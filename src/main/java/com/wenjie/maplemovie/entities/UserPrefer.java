package com.wenjie.maplemovie.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

//    用户喜好实体类
@Entity
@Table(name = "user_prefer")
@JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
public class UserPrefer {
    @Id
    private long uid;           //用户ID

//    private JSONObject prefer;  //用户偏好

//    private String prefer;  //用户偏好
    @Column(nullable = false)
    private int juqing;     //剧情

    @Column(nullable = false)
    private int xiju;       //喜剧

    @Column(nullable = false)
    private int dongzuo;    //动作

    @Column(nullable = false)
    private int aiqing;     //爱情

    @Column(nullable = false)
    private int kehuan;     //科幻

    @Column(nullable = false)
    private int donghua;    //动画

    @Column(nullable = false)
    private int xuanyi;     //悬疑

    @Column(nullable = false)
    private int jingsong;   //惊悚

    @Column(nullable = false)
    private int kongbu;     //恐怖

    @Column(nullable = false)
    private int fanzui;     //犯罪

    @Column(nullable = false)
    private int jilupian;   //纪录片

    @Column(nullable = false)
    private int duanpian;   //短片

    @Column(nullable = false)
    private int lishi;      //历史

    @Column(nullable = false)
    private int qingse;     //情色

    @Column(nullable = false)
    private int tongxing;   //同性

    @Column(nullable = false)
    private int zhuanji;    //传记

    @Column(nullable = false)
    private int yinyue;     //音乐

    @Column(nullable = false)
    private int jiating;    //家庭

    @Column(nullable = false)
    private int qihuan;     //奇幻

    @Column(nullable = false)
    private int gewu;       //歌舞

    @Column(nullable = false)
    private int zhanzheng;  //战争

    @Column(nullable = false)
    private int maoxian;    //冒险

    @Column(nullable = false)
    private int guzhuang;   //古装

    @Column(nullable = false)
    private int yundong;    //运动

    @Column(nullable = false)
    private int wuxia;      //武侠

    @Column(nullable = false)
    private int zainan;     //灾难

    @Column(nullable = false)
    private int ertong;     //儿童

    @Column(nullable = false)
    private int xibu;       //西部

    @Column(nullable = false)
    private int heisedianying;  //黑色电影

    public long getUid() {
        return uid;
    }

    public void setUid(long uid) {
        this.uid = uid;
    }

    public int getJuqing() {
        return juqing;
    }

    public void setJuqing(int juqing) {
        this.juqing = juqing;
    }

    public int getXiju() {
        return xiju;
    }

    public void setXiju(int xiju) {
        this.xiju = xiju;
    }

    public int getDongzuo() {
        return dongzuo;
    }

    public void setDongzuo(int dongzuo) {
        this.dongzuo = dongzuo;
    }

    public int getAiqing() {
        return aiqing;
    }

    public void setAiqing(int aiqing) {
        this.aiqing = aiqing;
    }

    public int getKehuan() {
        return kehuan;
    }

    public void setKehuan(int kehuan) {
        this.kehuan = kehuan;
    }

    public int getDonghua() {
        return donghua;
    }

    public void setDonghua(int donghua) {
        this.donghua = donghua;
    }

    public int getXuanyi() {
        return xuanyi;
    }

    public void setXuanyi(int xuanyi) {
        this.xuanyi = xuanyi;
    }

    public int getJingsong() {
        return jingsong;
    }

    public void setJingsong(int jingsong) {
        this.jingsong = jingsong;
    }

    public int getKongbu() {
        return kongbu;
    }

    public void setKongbu(int kongbu) {
        this.kongbu = kongbu;
    }

    public int getFanzui() {
        return fanzui;
    }

    public void setFanzui(int fanzui) {
        this.fanzui = fanzui;
    }

    public int getJilupian() {
        return jilupian;
    }

    public void setJilupian(int jilupian) {
        this.jilupian = jilupian;
    }

    public int getDuanpian() {
        return duanpian;
    }

    public void setDuanpian(int duanpian) {
        this.duanpian = duanpian;
    }

    public int getLishi() {
        return lishi;
    }

    public void setLishi(int lishi) {
        this.lishi = lishi;
    }

    public int getQingse() {
        return qingse;
    }

    public void setQingse(int qingse) {
        this.qingse = qingse;
    }

    public int getTongxing() {
        return tongxing;
    }

    public void setTongxing(int tongxing) {
        this.tongxing = tongxing;
    }

    public int getZhuanji() {
        return zhuanji;
    }

    public void setZhuanji(int zhuanji) {
        this.zhuanji = zhuanji;
    }

    public int getYinyue() {
        return yinyue;
    }

    public void setYinyue(int yinyue) {
        this.yinyue = yinyue;
    }

    public int getJiating() {
        return jiating;
    }

    public void setJiating(int jiating) {
        this.jiating = jiating;
    }

    public int getQihuan() {
        return qihuan;
    }

    public void setQihuan(int qihuan) {
        this.qihuan = qihuan;
    }

    public int getGewu() {
        return gewu;
    }

    public void setGewu(int gewu) {
        this.gewu = gewu;
    }

    public int getZhanzheng() {
        return zhanzheng;
    }

    public void setZhanzheng(int zhanzheng) {
        this.zhanzheng = zhanzheng;
    }

    public int getMaoxian() {
        return maoxian;
    }

    public void setMaoxian(int maoxian) {
        this.maoxian = maoxian;
    }

    public int getGuzhuang() {
        return guzhuang;
    }

    public void setGuzhuang(int guzhuang) {
        this.guzhuang = guzhuang;
    }

    public int getYundong() {
        return yundong;
    }

    public void setYundong(int yundong) {
        this.yundong = yundong;
    }

    public int getWuxia() {
        return wuxia;
    }

    public void setWuxia(int wuxia) {
        this.wuxia = wuxia;
    }

    public int getZainan() {
        return zainan;
    }

    public void setZainan(int zainan) {
        this.zainan = zainan;
    }

    public int getErtong() {
        return ertong;
    }

    public void setErtong(int ertong) {
        this.ertong = ertong;
    }

    public int getXibu() {
        return xibu;
    }

    public void setXibu(int xibu) {
        this.xibu = xibu;
    }

    public int getHeisedianying() {
        return heisedianying;
    }

    public void setHeisedianying(int heisedianying) {
        this.heisedianying = heisedianying;
    }
}
