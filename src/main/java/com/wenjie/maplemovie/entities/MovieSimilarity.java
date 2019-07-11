package com.wenjie.maplemovie.entities;


public class MovieSimilarity {
    public long mid;
    public String type;
    public float similarity_5;
    public float similarity_4;
    public float similarity_3;
    public float score;

    public MovieSimilarity() {
    }

    public long getMid() {
        return mid;
    }

    public void setMid(long mid) {
        this.mid = mid;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public float getSimilarity_5() {
        return similarity_5;
    }

    public void setSimilarity_5(float similarity_5) {
        this.similarity_5 = similarity_5;
    }

    public float getSimilarity_4() {
        return similarity_4;
    }

    public void setSimilarity_4(float similarity_4) {
        this.similarity_4 = similarity_4;
    }

    public float getSimilarity_3() {
        return similarity_3;
    }

    public void setSimilarity_3(float similarity_3) {
        this.similarity_3 = similarity_3;
    }

    public float getScore() {
        return score;
    }

    public void setScore(float score) {
        this.score = score;
    }
}
