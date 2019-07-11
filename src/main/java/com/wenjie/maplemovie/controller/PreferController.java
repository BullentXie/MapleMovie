package com.wenjie.maplemovie.controller;

import com.wenjie.maplemovie.entities.*;
import com.wenjie.maplemovie.model.BaseUserRecommender;
import com.wenjie.maplemovie.model.CharacterStringAcquaintanceDegree;
import com.wenjie.maplemovie.repository.UserPreferRepository;
import com.wenjie.maplemovie.repository.UserRecommendRepository;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.*;
import java.lang.reflect.Field;

@Controller
public class PreferController {

    @Autowired
    private UserPreferRepository userPreferRepository;

    @Autowired
    private UserRecommendRepository userRecommendRepository;

    @PostMapping(path = "/getprefer")
    @ResponseBody
    public Message GetPrefer(@RequestBody UserPrefer up){
        try{
            long uid = up.getUid();
            Message<UserPrefer> mes = new Message();
            mes.setRes(userPreferRepository.findByUid(uid));
            return mes;
        }catch (Exception e) {
            Message<String> mes = new Message();
            mes.setRes("未知错误");
            return mes;
        }
    }

    @PostMapping(path = "/resetprefer")
    @ResponseBody
    public Message ResetPrefer(@RequestBody UserPrefer up){
        try {
            if(userPreferRepository.existsById(up.getUid()))
                userPreferRepository.deleteById(up.getUid());
            userPreferRepository.save(up);
        }
        catch (Exception e){

        }


        Message<String> mes = new Message();
        String[] preferType = new String[]{"","",""};
        try {
            Field[] fields = up.getClass().getDeclaredFields();          //获取实体类的所有属性，返回Field数组
            for (Field field : fields)                                   //遍历所有属性
            {
                field.setAccessible(true);
                if(!field.getName().equals("uid"))
                {
                    if((int)field.get(up) == 5){
                        preferType[0] = preferType[0].concat(MovieTypeMap.dict.get(field.getName())+"|");
                    }
                    if((int)field.get(up) == 4){
                        preferType[1] = preferType[1].concat(MovieTypeMap.dict.get(field.getName())+"|");
                    }
                    if((int)field.get(up) == 3){
                        preferType[2] = preferType[2].concat(MovieTypeMap.dict.get(field.getName())+"|");
                    }
                }
            }
        }
        catch (Exception e) {
            mes.setRes("设定用户画像数据出错！");
            return mes;
        }
        try {
            MovieSimilarity SimilarityArray[] = new MovieSimilarity[55654];

            // 读取电影csv表
            Reader in = new FileReader("./Data/movie_info.csv");
            Iterable<CSVRecord> records = CSVFormat.EXCEL.parse(in);

            for (CSVRecord record : records) {
                int i = (int)((CSVParser) records).getCurrentLineNumber();
                if(i!=1)
                    SimilarityArray[i-2] = new MovieSimilarity();
                if(i==1 || record.get(3).isEmpty() || record.get(7).isEmpty())
                    continue;
                SimilarityArray[i-2].setMid(Long.valueOf(record.get(1)));
                SimilarityArray[i-2].setType(record.get(3));
                SimilarityArray[i-2].setScore(Float.valueOf(record.get(7)));

                // 计算所有电影与用户画像的相似度
                float s_5 = CharacterStringAcquaintanceDegree.levenshtein(preferType[0],SimilarityArray[i-2].getType());
                SimilarityArray[i-2].setSimilarity_5(s_5);

                float s_4 = CharacterStringAcquaintanceDegree.levenshtein(preferType[1],SimilarityArray[i-2].getType());
                SimilarityArray[i-2].setSimilarity_4(s_4);

                float s_3 = CharacterStringAcquaintanceDegree.levenshtein(preferType[2],SimilarityArray[i-2].getType());
                SimilarityArray[i-2].setSimilarity_3(s_3);

            }

            // 往评分表插入数据
            FileWriter writer = new FileWriter("./Data/douban_ratings.dat", true);

            // 排序，取与用户画像类似的电影
            SimilarityArray = sort(SimilarityArray,1000,5);
            for(int i=0;i<3;i++)
            {
                String appendString = String.valueOf(up.getUid());
                appendString += "::";
                appendString += String.valueOf(SimilarityArray[i].mid);
                appendString += "::5::838985046\n";
                writer.write(appendString);
            }

            SimilarityArray = sort(SimilarityArray,1000,4);
            for(int i=0;i<3;i++)
            {
                String appendString = String.valueOf(up.getUid());
                appendString += "::";
                appendString += String.valueOf(SimilarityArray[i].mid);
                appendString += "::4::838985046\n";
                writer.write(appendString);
            }

            SimilarityArray = sort(SimilarityArray,1000,3);
            for(int i=0;i<3;i++)
            {
                String appendString = String.valueOf(up.getUid());
                appendString += "::";
                appendString += String.valueOf(SimilarityArray[i].mid);
                appendString += "::3::838985046\n";
                writer.write(appendString);
            }

            writer.close();

            String recommend_result = BaseUserRecommender.getRecommend(up.getUid());
            UserRecommend ar = new UserRecommend();
            ar.setUid(up.getUid());
            ar.setRecommendstring(recommend_result);
            if(userRecommendRepository.existsById(up.getUid()))
                userRecommendRepository.deleteById(up.getUid());
            userRecommendRepository.save(ar);

            for(int i=0;i<9;i++){
                RandomAccessFile f = new RandomAccessFile("./Data/douban_ratings.dat", "rw");
                long length = f.length() - 1;
                byte b;
                do {
                    length -= 1;
                    f.seek(length);
                    b = f.readByte();
                } while(b != 10);
                f.setLength(length+1);
                f.close();
            }

        } catch(Exception ioe) {
            ioe.printStackTrace();
        }
        mes.setRes("Set Prefer Successfully!");
        return mes;
    }

    public MovieSimilarity[] sort(MovieSimilarity[] movieSimilarity,long totallines, int level){
        MovieSimilarity temp;
        for (int i = 0; i < totallines-1; i++) {
            for (int j = i+1; j < totallines; j++) {
                if(compare(movieSimilarity[i],movieSimilarity[j],level)<0) {
                    temp = movieSimilarity[j];
                    movieSimilarity[j] = movieSimilarity[i];
                    movieSimilarity[i] = temp;
                }
            }
        }
        return movieSimilarity;
    }

    public int compare(MovieSimilarity o1, MovieSimilarity o2, int level) {

        if(level==5)
        {
            float x1 = o1.getSimilarity_5();
            float x2 = o2.getSimilarity_5();
            int sComp = Float.compare(x1,x2);

            if (sComp != 0) {
                return sComp;
            }
        }
        if(level==4)
        {
            float x1 = o1.getSimilarity_4();
            float x2 = o2.getSimilarity_4();
            int sComp = Float.compare(x1,x2);

            if (sComp != 0) {
                return sComp;
            }
        }
        if(level==3)
        {
            float x1 = o1.getSimilarity_3();
            float x2 = o2.getSimilarity_3();
            int sComp = Float.compare(x1,x2);

            if (sComp != 0) {
                return sComp;
            }
        }

        float x3 = o1.getScore();
        float x4 = o2.getScore();
        return Float.compare(x3,x4);
    }

}
