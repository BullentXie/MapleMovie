package com.wenjie.maplemovie.controller;

import com.wenjie.maplemovie.entities.Message;
import com.wenjie.maplemovie.entities.MovieInfo;
import com.wenjie.maplemovie.entities.UserRecommend;
import com.wenjie.maplemovie.repository.MovieInfoRepository;
import com.wenjie.maplemovie.repository.UserRecommendRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MovieInfoController {

    @Autowired
    private MovieInfoRepository movieInfoRepository;

    @Autowired
    private UserRecommendRepository userRecommendRepository;

    @PostMapping(path = "/getmovieinfo")
    @ResponseBody
    public Message GetMovieInfo(@RequestBody UserRecommend ur){
        try {
            long uid = ur.getUid();
            String MovieIdString = userRecommendRepository.findByUid(uid).getRecommendstring();

            MovieInfo[] movies = new MovieInfo[30];
            String[] sourceStrArray = MovieIdString.split(",", 31);
            int j = 0;
            int null_num=0;
            for (int i = 0; i < sourceStrArray.length-1; i++) {
                movies[j] = movieInfoRepository.findByMid(Long.valueOf(sourceStrArray[i]));
                if(movies[j]==null){
                    null_num++;
                    continue;
                }

                if(movies[j].getImg().isEmpty()){
                    movies[j] = new MovieInfo();
                    null_num++;
                    continue;
                }
                if(movies[j].getName().isEmpty())
                    movies[j].setName("");
                if(movies[j].getType().isEmpty())
                    movies[j].setType("");
                if(movies[j].getActors().isEmpty())
                    movies[j].setActors("");
                if(movies[j].getCountries().isEmpty())
                    movies[j].setCountries("");
                if(movies[j].getDirectors().isEmpty())
                    movies[j].setDirectors("");
                if(movies[j].getRating().isEmpty())
                    movies[j].setRating("");
                if(movies[j].getSummary().isEmpty())
                    movies[j].setSummary("");
                movies[j].setImg("https://images.weserv.nl/?url="+movies[j].getImg().substring(movies[j].getImg().lastIndexOf("//")+2));
                j++;
            }

            MovieInfo[] movies_return;
            if(null_num==30)
                movies_return = null;
            else
                movies_return = new MovieInfo[30-null_num];
            for(int k=0;k<30-null_num;k++){
                movies_return[k]=movies[k];
            }
            Message<MovieInfo[]> mes = new Message();
            mes.setRes(movies_return);
            return mes;
        }catch (Exception e){
            Message<String> mes = new Message();
            mes.setRes("未知错误！");
            return mes;
        }
    }

    @PostMapping(path = "/getsinglemovieinfo")
    @ResponseBody
    public Message GetSingleMovieInfo(@RequestBody MovieInfo mi){
        try {
            long mid = mi.getMid();
            MovieInfo single_movie = movieInfoRepository.findByMid(mid);

            if(single_movie.getName().isEmpty())
                single_movie.setName("");
            if(single_movie.getType().isEmpty())
                single_movie.setType("");
            if(single_movie.getActors().isEmpty())
                single_movie.setActors("");
            if(single_movie.getCountries().isEmpty())
                single_movie.setCountries("");
            if(single_movie.getDirectors().isEmpty())
                single_movie.setDirectors("");
            if(single_movie.getRating().isEmpty())
                single_movie.setRating("");
            if(single_movie.getSummary().isEmpty())
                single_movie.setSummary("");
            single_movie.setImg("https://images.weserv.nl/?url="+single_movie.getImg().substring(single_movie.getImg().lastIndexOf("//")+2));

            Message<MovieInfo> mes = new Message();
            mes.setRes(single_movie);
            return mes;
        }catch (Exception e){
            Message<String> mes = new Message();
            mes.setRes("未知错误！");
            return mes;
        }
    }
}
