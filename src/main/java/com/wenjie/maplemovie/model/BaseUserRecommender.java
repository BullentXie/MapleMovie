package com.wenjie.maplemovie.model;

import com.wenjie.maplemovie.entities.MovieSimilarity;
import org.apache.mahout.cf.taste.impl.neighborhood.NearestNUserNeighborhood;
import org.apache.mahout.cf.taste.impl.recommender.GenericUserBasedRecommender;
import org.apache.mahout.cf.taste.impl.similarity.PearsonCorrelationSimilarity;
import org.apache.mahout.cf.taste.model.DataModel;
import org.apache.mahout.cf.taste.neighborhood.UserNeighborhood;
import org.apache.mahout.cf.taste.recommender.RecommendedItem;
import org.apache.mahout.cf.taste.recommender.Recommender;
import org.apache.mahout.cf.taste.similarity.UserSimilarity;
import org.apache.mahout.cf.taste.similarity.precompute.example.GroupLensDataModel;

import java.io.File;
import java.io.FileWriter;
import java.util.List;

public class BaseUserRecommender {
    public static String getRecommend(long uid) throws Exception {
        //准备数据 这里是电影评分数据
        File file = new File("./Data/douban_ratings.dat");
        //将数据加载到内存中，GroupLensDataModel是针对开放电影评论数据的
        DataModel dataModel = new GroupLensDataModel(file);
        //计算相似度，相似度算法有很多种，欧几里得、皮尔逊等等。
        UserSimilarity similarity = new PearsonCorrelationSimilarity(dataModel);
        //计算最近邻域，邻居有两种算法，基于固定数量的邻居和基于相似度的邻居，这里使用基于固定数量的邻居
        UserNeighborhood userNeighborhood = new NearestNUserNeighborhood(100, similarity, dataModel);
        //构建推荐器，协同过滤推荐有两种，分别是基于用户的和基于物品的，这里使用基于用户的协同过滤推荐
        Recommender recommender = new GenericUserBasedRecommender(dataModel, userNeighborhood, similarity);
        //给用户ID等于uid的用户推荐30部电影
        List<RecommendedItem> recommendedItemList = recommender.recommend(uid, 30);

//        //打印推荐的结果
//        FileWriter writer = new FileWriter("./Data/user_recommend.csv", true);
//        for (RecommendedItem recommendedItem : recommendedItemList) {
////            System.out.println(recommendedItem.toString());
//            String appendString = String.valueOf(uid) + "," + String.valueOf(recommendedItem.getItemID()) + "\n";
//            writer.write(appendString);
//        }
//        writer.close();
        String returnString = "";
        for (RecommendedItem recommendedItem : recommendedItemList) {
            returnString += String.valueOf(recommendedItem.getItemID()) + ",";
        }
        return returnString;
    }
}
