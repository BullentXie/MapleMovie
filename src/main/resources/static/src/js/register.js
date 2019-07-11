window.onload=function() {
    // 注册页面幻灯片切换
    setTimeout(() => {
        $('#register-bg').removeClass();$('#register-bg').addClass('register-bg-2');
    }, 7000);
    setTimeout(() => {
        $('#register-bg').removeClass();$('#register-bg').addClass('register-bg-3');
    }, 14000);
    setTimeout(() => {
        $('#register-bg').removeClass();$('#register-bg').addClass('register-bg-1');
    }, 21000);
    setTimeout(() => {
        setInterval("$('#register-bg').removeClass();$('#register-bg').addClass('register-bg-2');", 21000)
    }, 7000);
    setTimeout(() => {
        setInterval("$('#register-bg').removeClass();$('#register-bg').addClass('register-bg-3');", 21000)
    }, 14000);
    setTimeout(() => {
        setInterval("$('#register-bg').removeClass();$('#register-bg').addClass('register-bg-1');", 21000)
    }, 21000);

}

// 注册数据与后端的交互
$(document).ready(function(){
    $('#registerBtn').click(function() {
        var email = $('#registerEmail').val();
        var name = $('#registerName').val();
        var password = $('#registerPwdOnce').val();
        var pwdAgain = $('#registerPwdAgain').val();

        if(name != "" && password != "" && pwdAgain != "") {
            $('#registerEmail').text("");
            $("#registerName").text("");
            $("#registerPwdOnce").text("");
            $("#registerPwdAgain").text("");
            if (password != pwdAgain){
                // 两次密码不一致，请重新输入
                alert("两次密码不一致，请重新输入！")
            }
            else {
                var input = {
                    "name": name,
                    "password": password,
                    "email": email
                }
                console.log(input);
                //访问后台服务器
                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "http://localhost:8090/register",
                    "method": "POST",
                    "headers": {
                      "Content-Type": "application/json",
                      "cache-control": "no-cache",
                    },
                    "processData": false,
                    "data": "{\n\t\"name\":\"{name}\"\n,\n\t\"password\":\"{password}\"\n,\n\t\"email\":\"{email}\"}".format(input)
                  }
                  
                $.ajax(settings).done(function (response) {
                    console.log(settings.data);
                    console.log(response);
                    if (response.res==null){
                        console.log("1");
                        //此账户已注册
                        alert("此邮箱已注册！");
                    }
                    else {
                        console.log("2");
                        var message = confirm("注册成功!");
                        if(message==true){
                            var res = {
                                id:response.res,
                                password:password
                            };
                            var userinfo = '{\"id\":{id},\"password\":{password}}'.format(res);
                            sessionStorage.setItem("userinfo",userinfo);
                            console.log(res.id);
                            var url="./user.html"+"?"+res.id;
                            window.location.assign(encodeURI(url));
                            // location.href="http://localhost:8080/Maple-frontend/user.html";
                        }
                        
                    }
                });
            }
        }


        // 存在空表单
        else {
            if(email == ""){
                alert("请输入您的邮箱账号！");
            }
            if(name == ""){
                alert("请输入用户名！");
            }
            if(password == ""){
                alert("请输入密码！");
            }
            if(pwdAgain == ""){
                alert("请确认密码！");
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
})