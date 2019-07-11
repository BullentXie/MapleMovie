window.onload=function() {
    // 登录界面幻灯片切换
    setTimeout(() => {
        $('#login-bg').removeClass();$('#login-bg').addClass('login-bg-2');
    }, 7000);
    setTimeout(() => {
        $('#login-bg').removeClass();$('#login-bg').addClass('login-bg-3');
    }, 14000);
    setTimeout(() => {
        $('#login-bg').removeClass();$('#login-bg').addClass('login-bg-1');
    }, 21000);
    setTimeout(() => {
        setInterval("$('#login-bg').removeClass();$('#login-bg').addClass('login-bg-2');", 21000)
    }, 7000);
    setTimeout(() => {
        setInterval("$('#login-bg').removeClass();$('#login-bg').addClass('login-bg-3');", 21000)
    }, 14000);
    setTimeout(() => {
        setInterval("$('#login-bg').removeClass();$('#login-bg').addClass('login-bg-1');", 21000)
    }, 21000);
}

// 登录数据与后端的交互
// $(document).ready(function(){
$('#loginBtn').click(function() {
    var email = $('#loginEmail').val();
    var password = $('#loginPwd').val();
    if (email != "" && password != "") {
        var input = {
            email: email,
            password: password,
        }

        // 访问后台服务器
        var settings = {
            "async": true,
                "crossDomain": true,
                "url": "http://localhost:8090/login",
                "method": "POST",
                "headers": {
                "Content-Type": "application/json",
                "cache-control": "no-cache",
                },
                "processData": false,
                "data": "{\n\t\"email\":\"{email}\",\n\t\"password\":\"{password}\"\n}".format(input)
        }

        // 根据后台传回来的结果修改登录页面
        $.ajax(settings).done(function (response) {
            console.log(response);
            if(response.res == null) {
                if (response.code == "NO_RECORDS"){
                    // 账号未注册
                    alert("不存在的邮箱账号！");
                    $("#loginEmail").text("");
                    $("#loginPwd").text("");
                }
                if (response.code == "NO_PASSWORD"){
                    // 密码错误
                    alert("密码错误！")
                    $("#loginPwd").text("");
                }
            }
            else {
                
                var res = {
                    id: response.res,
                    password: password
                };
                console.log(res);
                var userinfo = '{\"id\":{id},\"password\":{password}}'.format(res);
                console.log(userinfo);
                sessionStorage.setItem("userinfo",userinfo);
                console.log('jzqj');
                console.log(res.id);
                var url="./index.html"+"?"+res.id;
                window.location.assign(encodeURI(url));
                // location.href="http://localhost:8080/Maple-frontend/index.html";
            }
        });
    }

    else {
        $("#loginEmail").text("");
        $("#loginPwd").text("");
        // 表单不能有空
        if(email == ""){
            alert("请输入您的邮箱账号！");
        }
        if(password == ""){
            alert("请输入您的密码！");
        }
    }
});

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
// })
