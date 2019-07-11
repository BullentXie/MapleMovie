package com.wenjie.maplemovie.entities;

public class Message<T> {
    public Message(){}

    private T res;

    public T getRes() {
        return res;
    }

    public void setRes(T res) {
        this.res = res;
    }
}
