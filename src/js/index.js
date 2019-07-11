$(".slide-lists a").mouseenter(function() {
    // 字体变大效果：
    $(".slide-lists .list-big").removeClass("list-big");
    $(this).addClass("list-big");

    // <span>小字出现效果：
    $(".slide-lists .list-small").addClass("span-hidden");
    $(this).removeClass("span-hidden");

})

// 背景图的更换：
$("#up-1").mouseenter(function() {
    $("#bg-pic").removeClass();
    $("#bg-pic").addClass("navbar-outline-border-1")
})
$("#up-2").mouseenter(function() {
    $("#bg-pic").removeClass();
    $("#bg-pic").addClass("navbar-outline-border-2")
})
$("#up-3").mouseenter(function() {
    $("#bg-pic").removeClass();
    $("#bg-pic").addClass("navbar-outline-border-3")
})
$("#up-4").mouseenter(function() {
    $("#bg-pic").removeClass();
    $("#bg-pic").addClass("navbar-outline-border-4")
})
$("#up-5").mouseenter(function() {
    $("#bg-pic").removeClass();
    $("#bg-pic").addClass("navbar-outline-border-5")
})
$("#up-6").mouseenter(function() {
    $("#bg-pic").removeClass();
    $("#bg-pic").addClass("navbar-outline-border-6")
})
$("#up-7").mouseenter(function() {
    $("#bg-pic").removeClass();
    $("#bg-pic").addClass("navbar-outline-border-7")
})
$("#up-8").mouseenter(function() {
    $("#bg-pic").removeClass();
    $("#bg-pic").addClass("navbar-outline-border-8")
})
$("#up-9").mouseenter(function() {
    $("#bg-pic").removeClass();
    $("#bg-pic").addClass("navbar-outline-border-9")
})
$("#up-10").mouseenter(function() {
    $("#bg-pic").removeClass();
    $("#bg-pic").addClass("navbar-outline-border-10")
})






// 注册数据与后端的交互
$(document).ready(function(){
    $('#registerBtn').click(function() {
        
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