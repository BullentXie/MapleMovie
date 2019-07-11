package com.wenjie.maplemovie.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

//    电影信息实体类
@Entity
@Table(name = "movie_info")
@JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
public class MovieInfo {
    @Id
    private long mid;

    @Column
    private String name;

    @Column
    private String type;

    @Column
    private String actors;

    @Column
    private String countries;

    @Column
    private String directors;

    @Column
    private String rating;

    @Column
    private String summary;

    @Column
    private String img;

    public MovieInfo() {
    }

    public long getMid() {
        return mid;
    }

    public void setMid(long mid) {
        this.mid = mid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getActors() {
        return actors;
    }

    public void setActors(String actors) {
        this.actors = actors;
    }

    public String getCountries() {
        return countries;
    }

    public void setCountries(String countries) {
        this.countries = countries;
    }

    public String getDirectors() {
        return directors;
    }

    public void setDirectors(String directors) {
        this.directors = directors;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
}
