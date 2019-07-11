$(function() {
    getId();
});

function getId() {
    var userId = decodeURI(window.location.href).split('?')[1];
    userId = parseInt(userId);
    // console.log(userId);
    return userId;
}
$(document).ready(function(){
    //从后端获取json数据
        var input = {};
        var uid = getId();
        var allUserId = {
            'uid': uid
        }
        console.log("alluserid=");
        console.log(allUserId);
        $.ajax({
            type : 'POST',
            url : 'http://localhost:8090/getprefer',
            cache:false,
            async:false,
            data : JSON.stringify(allUserId),
            contentType : 'application/json',
            dataType : 'json',
            success : function(data) {
                console.log("----------- success-------------");
                console.log(data);
                // var dataNew = eval('('+data+')');
                var dataNew = data;
                console.log("这是datanew");
                console.log(dataNew);
                var res = dataNew.res;
                if(res == null) {
                    console.log('空值空值空值！！！！！')
                    input = {
                        'uid': 'uid',
                        'juqing': '0',
                        'xiju': '0',
                        'dongzuo': '0',
                        'aiqing': '0',
                        'kehuan': '0',
                        'donghua': '0',
                        'xuanyi': '0',
                        'jingsong': '0',
                        'kongbu': '0',
                        'fanzui': '0',
                        'jilupian': '0',
                        'duanpian': '0',
                        'lishi': '0',
                        'qingse': '0',
                        'tongxing': '0',
                        'zhuanji': '0',
                        'yinyue': '0',
                        'jiating': '0',
                        'qihuan': '0',
                        'gewu': '0',
                        'zhanzheng': '0',
                        'maoxian': '0',
                        'guzhuang': '0',
                        'yundong': '0',
                        'wuxia': '0',
                        'zainan': '0',
                        'ertong': '0',
                        'xibu': '0',
                        'heisedianying': '0'
                    }
                    console.log('input=0');
                    console.log(input);
                }
                else {
                    input = {
                        'uid': 'uid',
                        'juqing': res.juqing,
                        'xiju': res.xiju,
                        'dongzuo': res.dongzuo,
                        'aiqing': res.aiqing,
                        'kehuan': res.kehuan,
                        'donghua': res.donghua,
                        'xuanyi': res.xuanyi,
                        'jingsong': res.jingsong,
                        'kongbu': res.kongbu,
                        'fanzui': res.fanzui,
                        'jilupian': res.jilupian,
                        'duanpian': res.duanpian,
                        'lishi': res.lishi,
                        'qingse': res.qingse,
                        'tongxing': res.tongxing,
                        'zhuanji': res.zhuanji,
                        'yinyue': res.yinyue,
                        'jiating': res.jiating,
                        'qihuan': res.qihuan,
                        'gewu': res.gewu,
                        'zhanzheng': res.zhanzheng,
                        'maoxian': res.maoxian,
                        'guzhuang': res.guzhuang,
                        'yundong': res.yundong,
                        'wuxia': res.wuxia,
                        'zainan': res.zainan,
                        'ertong': res.ertong,
                        'xibu': res.xibu,
                        'heisedianying': res.heisedianying
                    }
                    console.log('input != 0');
                    console.log(input);
                }
            },
    
            
            error : function(data) {
                console.log("----------- error-------------");
                // console.log(data);
                input = {
                    'uid': 'uid',
                    'juqing': '0',
                    'xiju': '0',
                    'dongzuo': '0',
                    'aiqing': '0',
                    'kehuan': '0',
                    'donghua': '0',
                    'xuanyi': '0',
                    'jingsong': '0',
                    'kongbu': '0',
                    'fanzui': '0',
                    'jilupian': '0',
                    'duanpian': '0',
                    'lishi': '0',
                    'qingse': '0',
                    'tongxing': '0',
                    'zhuanji': '0',
                    'yinyue': '0',
                    'jiating': '0',
                    'qihuan': '0',
                    'gewu': '0',
                    'zhanzheng': '0',
                    'maoxian': '0',
                    'guzhuang': '0',
                    'yundong': '0',
                    'wuxia': '0',
                    'zainan': '0',
                    'ertong': '0',
                    'xibu': '0',
                    'heisedianying': '0'
                }
            },
        });
        console.log(input);
        document.getElementById("juqing").value = 20*input.juqing;
        document.getElementById("xiju").value = 20*input.xiju;
        document.getElementById("dongzuo").value = 20*input.dongzuo;
        document.getElementById("aiqing").value = 20*input.aiqing;
        document.getElementById("kehuan").value = 20*input.kehuan;
        document.getElementById("donghua").value = 20*input.donghua;
        document.getElementById("xuanyi").value = 20*input.xuanyi;
        document.getElementById("jingsong").value = 20*input.jingsong;
        document.getElementById("kongbu").value = 20*input.kongbu;
        document.getElementById("fanzui").value = 20*input.fanzui;
        document.getElementById("jilupian").value = 20*input.jilupian;
        document.getElementById("duanpian").value = 20*input.duanpian;
        document.getElementById("lishi").value = 20*input.lishi;
        document.getElementById("qingse").value = 20*input.qingse;
        document.getElementById("tongxing").value = 20*input.tongxing;
        document.getElementById("zhuanji").value = 20*input.zhuanji;
        document.getElementById("yinyue").value = 20*input.yinyue;
        document.getElementById("jiating").value = 20*input.jiating;
        document.getElementById("qihuan").value = 20*input.qihuan;
        document.getElementById("gewu").value = 20*input.gewu;
        document.getElementById("zhanzheng").value = 20*input.zhanzheng;
        document.getElementById("maoxian").value = 20*input.maoxian;
        document.getElementById("guzhuang").value = 20*input.guzhuang;
        document.getElementById("yundong").value = 20*input.yundong;
        document.getElementById("wuxia").value = 20*input.wuxia;
        document.getElementById("zainan").value = 20*input.zainan;
        document.getElementById("ertong").value = 20*input.ertong;
        document.getElementById("xibu").value = 20*input.xibu;
        document.getElementById("heisedianying").value = 20*input.heisedianying;


        myChartType.setOption({
            series: [{
                name: '电影类型权重分布',
                type: 'radar',
                // areaStyle: {normal: {}},
                data : [
                    {
                        value : [20*input.juqing, 20*input.xiju, 20*input.dongzuo, 20*input.aiqing, 20*input.kehuan, 20*input.donghua, 20*input.xuanyi, 20*input.jingsong, 
                            20*input.kongbu, 20*input.fanzui, 20*input.jilupian, 20*input.duanpian, 20*input.lishi, 20*input.qingse, 20*input.tongxing, 20*input.zhuanji, 
                            20*input.yinyue, 20*input.jiating, 20*input.qihuan, 20*input.gewu, 20*input.zhanzheng, 20*input.maoxian, 20*input.guzhuang, 20*input.yundong, 
                            20*input.wuxia, 20*input.zainan, 20*input.ertong, 20*input.xibu, 20*input.heisedianying],
                        name : '我的标签'
                    }
                ]
            }]
        })
    })

var myChartType = echarts.init(document.getElementById('chart-type'),'walden');
option = {
    title: {
        text: '拖动滑块选择您喜欢的电影类型哦！'
    },
    tooltip: {},
    // legend: {
    //     data: ['我的标签']
    // },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        splitArea: {
            areaStyle: {
                color: ['rgba(255, 170, 191, 0.2)',
                'rgba(255, 170, 191, 0.4)', 'rgba(255, 170, 191, 0.6)',
                'rgba(255, 170, 191, 0.8)', 'rgba(255, 170, 191, 1)'],
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 10
            }
        },
        indicator: [
           { name: '剧情', max: 100},
           { name: '喜剧', max: 100},
           { name: '动作', max: 100},
           { name: '爱情', max: 100},
           { name: '科幻', max: 100},
           { name: '动画', max: 100},
           { name: '悬疑', max: 100},
           { name: '惊悚', max: 100},
           { name: '恐怖', max: 100},
           { name: '犯罪', max: 100},
           { name: '纪录片', max: 100},
           { name: '短片', max: 100},
           { name: '历史', max: 100},
           { name: '情色', max: 100},
           { name: '同性', max: 100},
           { name: '传记', max: 100},
           { name: '音乐', max: 100},
           { name: '家庭', max: 100},
           { name: '奇幻', max: 100},
           { name: '歌舞', max: 100},
           { name: '战争', max: 100},
           { name: '冒险', max: 100},
           { name: '古装', max: 100},
           { name: '运动', max: 100},
           { name: '武侠', max: 100},
           { name: '灾难', max: 100},
           { name: '儿童', max: 100},
           { name: '西部', max: 100},
           { name: '黑色电影', max: 100},
        ]
        
    },
    series: [{
        name: '电影类型权重分布',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [],
                name : '我的标签'
            }
        ]
    }]
};
myChartType.setOption(option);



function changeTypeValue() {
    var juqing = document.getElementById("juqing").value/20;
    var xiju = document.getElementById("xiju").value/20;
    var dongzuo = document.getElementById("dongzuo").value/20;
    var aiqing = document.getElementById("aiqing").value/20;
    var kehuan = document.getElementById("kehuan").value/20;
    var donghua = document.getElementById("donghua").value/20;
    var xuanyi = document.getElementById("xuanyi").value/20;
    var jingsong = document.getElementById("jingsong").value/20;
    var kongbu = document.getElementById("kongbu").value/20;
    var fanzui = document.getElementById("fanzui").value/20;
    var jilupian = document.getElementById("jilupian").value/20;
    var duanpian = document.getElementById("duanpian").value/20;
    var lishi = document.getElementById("lishi").value/20;
    var qingse = document.getElementById("qingse").value/20;
    var tongxing = document.getElementById("tongxing").value/20;
    var zhuanji = document.getElementById("zhuanji").value/20;
    var yinyue = document.getElementById("yinyue").value/20;
    var jiating = document.getElementById("jiating").value/20;
    var qihuan = document.getElementById("qihuan").value/20;
    var gewu = document.getElementById("gewu").value/20;
    var zhanzheng = document.getElementById("zhanzheng").value/20;
    var maoxian = document.getElementById("maoxian").value/20;
    var guzhuang = document.getElementById("guzhuang").value/20;
    var yundong = document.getElementById("yundong").value/20;
    var wuxia = document.getElementById("wuxia").value/20;
    var zainan = document.getElementById("zainan").value/20;
    var ertong = document.getElementById("ertong").value/20;
    var xibu = document.getElementById("xibu").value/20;
    var heisedianying = document.getElementById("heisedianying").value/20;

    

    myChartType.setOption({
        series: [{
            name: '电影类型权重分布',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
                {
                    value : [20*juqing, 20*xiju, 20*dongzuo, 20*aiqing, 20*kehuan, 20*donghua, 20*xuanyi, 20*jingsong, 
                        20*kongbu, 20*fanzui, 20*jilupian, 20*duanpian, 20*lishi, 20*qingse, 20*tongxing, 20*zhuanji, 
                        20*yinyue, 20*jiating, 20*qihuan, 20*gewu, 20*zhanzheng, 20*maoxian, 20*guzhuang, 20*yundong, 
                        20*wuxia, 20*zainan, 20*ertong, 20*xibu, 20*heisedianying],
                    name : '我的标签'
                }
            ]
        }]
    })

    var input = {
        "uid": getId(),
        "juqing": juqing,
        "xiju": xiju,
        "dongzuo": dongzuo,
        "aiqing": aiqing,
        "kehuan": kehuan,
        "donghua": donghua,
        "xuanyi": xuanyi,
        "jingsong": jingsong,
        "kongbu": kongbu,
        "fanzui": fanzui,
        "jilupian": jilupian,
        "duanpian": duanpian,
        "lishi": lishi,
        "qingse": qingse,
        "tongxing": tongxing,
        "zhuanji": zhuanji,
        "yinyue": yinyue,
        "jiating": jiating,
        "qihuan": qihuan,
        "gewu": gewu,
        "zhanzheng": zhanzheng,
        "maoxian": maoxian,
        "guzhuang": guzhuang,
        "yundong": yundong,
        "wuxia": wuxia,
        "zainan": zainan,
        "ertong": ertong,
        "xibu": xibu,
        "heisedianying": heisedianying
    }
    // console.log(input);
    return input;
}




$('#confirmTypeBtn').click(function() {
    var input = changeTypeValue();
    // console.log(changeTypeValue());

    // console.log(xiju);
    
    // console.log(input);
    // 访问后台服务器
    /*var settings = {
        "async": true,
        "crossDomain": true,
        "url": "localhost:8090/getuserinfo",
        "method": "POST",
        "headers": {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
        },
        "processData": false,
        "data": "{\n\t\"uid\":\"{uid}\"\n,\n\t\"juqing\":\"{juqing}\"\n,\n\t\"xiju\":\"{xiju}\",\n\t\"dongzuo\":\"{dongzuo}\",\n\t\"aiqing\":\"{aiqing}\",\n\t\"kehuan\":\"{kehuan}\",\n\t\"xuanyi\":\"{xuanyi}\",\n\t\"jingsong\":\"{jingsong}\",\n\t\"kongbu\":\"{kongbu}\",\n\t\"fanzui\":\"{fanzui}\",\n\t\"togxing\":\"{tongxing}\",\n\t\"yinyue\":\"{yinyue}\",\n\t\"gewu\":\"{gewu}\",\n\t\"zhuanji\":\"{zhuanji}\",\n\t\"lishi\":\"{lishi}\",\n\t\"xiju\":\"{xiju}\",\n\t\"xiju\":\"{xiju}\",\n\t\"xiju\":\"{xiju}\",\n\t\"xiju\":\"{xiju}\",\n\t\"xiju\":\"{xiju}\",\n\t\"xiju\":\"{xiju}\",\n\t\"xiju\":\"{xiju}\",\n\t\"xiju\":\"{xiju}\",\n\t\"xiju\":\"{xiju}\",\n\t\"xiju\":\"{xiju}\",\n\t\"xiju\":\"{xiju}\",\n\t\"xiju\":\"{xiju}\",\n\t\"xiju\":\"{xiju}\",\n\t\"xiju\":\"{xiju}\",\n\t\"xiju\":\"{xiju}\"}".format(input)
    }

    $.ajax(settings).done(function (response) {
        console.log(settings.data);
        console.log(response);

        var res = {
            id:response.res,
            movStyle: response.prefer
        };
        var userinfo = '{\"id\":{id},\"password\":{password}}'.format(res);
        sessionStorage.setItem("userinfo",userinfo);
        console.log(res.id);
        var url="./user.html"+"?"+res.id;
        window.location.assign(encodeURI(url));
        // location.href="http://localhost:8080/Maple-frontend/user.html";
            
    });*/
    input.juqing = parseInt(input.juqing);
    input.xiju = parseInt(input.xiju);
    input.dongzuo = parseInt(input.dongzuo);
    input.aiqing = parseInt(input.aiqing);
    input.kehuan = parseInt(input.kehuan);
    input.donghua = parseInt(input.donghua);
    input.xuanyi = parseInt(input.xuanyi);
    input.jingsong = parseInt(input.jingsong);
    input.kongbu = parseInt(input.kongbu);
    input.fanzui = parseInt(input.fanzui);
    input.jilupian = parseInt(input.jilupian);
    input.duanpian = parseInt(input.duanpian);
    input.lishi = parseInt(input.lishi);
    input.qingse = parseInt(input.qingse);
    input.tongxing = parseInt(input.tongxing);
    input.zhuanji = parseInt(input.zhuanji);
    input.yinyue = parseInt(input.yinyue);
    input.jiating = parseInt(input.jiating);
    input.qihuan = parseInt(input.qihuan);
    input.gewu = parseInt(input.gewu);
    input.zhanzheng = parseInt(input.zhanzheng);
    input.maoxian = parseInt(input.maoxian);
    input.guzhuang = parseInt(input.guzhuang);
    input.yundong = parseInt(input.yundong);
    input.wuxia = parseInt(input.wuxia);
    input.zainan = parseInt(input.zainan);
    input.ertong = parseInt(input.ertong);
    input.xibu = parseInt(input.xibu);
    input.heisedianying = parseInt(input.heisedianying);

    console.log("打印");
    console.log(input);
    console.log(JSON.stringify(input));

	//传参(input)到后台
	$.ajax({
        url : 'http://localhost:8090/resetprefer',
        type : 'POST',
        data : JSON.stringify(input),
        contentType : 'application/json; charset=utf-8',
        dataType : 'json',
        success : function(result) {
            alert('传参成功');
        }
    });

    alert('传参成功');
    var url="./index.html"+"?"+input.uid;
    window.location.assign(encodeURI(url));

    // 从后端取得相关数据
    String.prototype.format = function(args) {
        var result = this;
        if (arguments.length > 0) {
            if (arguments.length == 1 && typeof (args) == "object") {
                for (var key in args) {
                    if(args[key]!=undefined){
                        var reg = new RegExp("({" + key + "})", "g");
                        result = result.replace(reg, args[key]);
                    }
                }
            }
            else {
                for (var i = 0; i < arguments.length; i++) {
                    if (arguments[i] != undefined) {
                        var reg= new RegExp("({)" + i + "(})", "g");
                        result = result.replace(reg, arguments[i]);
                    }
                }
            }
        }
        return result;
    }
})


