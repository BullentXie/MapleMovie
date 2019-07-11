package com.wenjie.maplemovie.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

//    推荐记录实体类
@Entity
@Table(name = "user_recommend")
@JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
public class UserRecommend {
    @Id
    private long uid;

    @Column(nullable = false)
    private String recommendstring;

    public UserRecommend() {
    }

    public long getUid() {
        return uid;
    }

    public void setUid(long uid) {
        this.uid = uid;
    }

    public String getRecommendstring() {
        return recommendstring;
    }

    public void setRecommendstring(String recommendstring) {
        this.recommendstring = recommendstring;
    }
}
