$(function(){

    /**
     * 卡片切换
     */
    $('.list-group-item').not('.disabled').click(function(){
        $('.active').removeClass('active');
        $(this).addClass('active');
        var id = "#" + $(this).attr('id') + "-setting";
        $('.card').not(id).hide();
        $('.card').filter(id).show();
    });

    /**
     * 添加邮箱
     */
    var num = 1;
    $('#addEmail').click(function(){
        var emailStr = "<div class=\"form-group col-12\">"+
        "<label for=\"email\">绑定邮箱&nbsp;&nbsp;/</label>"+
        "<i class=\"fa fa-trash little-trash\" id=\"email-"+num+"-delete\"></i>"+
        "<i class=\"fa fa-close little-close\" id=\"email-"+num+"-close\"></i>"+
        "<input type=\"email\" class=\"form-control noBlue\" id=\"email-"+num+"\" name=\"email-"+num+"\" placeholder=\"请输入需要绑定的邮箱\"></div>";
        num++;
        $('#email-setting').find('.form-row').append(emailStr);
    })

    /**
     * 删除邮箱
     */
    $('*').on("click",".fa-trash",function(){
        var id = "#"+$(this).attr('id').substr(0,7);
        $(id).parent().remove();
    })

    /**
     * 旋转小齿轮
     */
    $('.fa-gear').mouseenter(function(){
        $(this).addClass('fa-spin');
    })
    $('.fa-gear').mouseleave(function(){
        $(this).removeClass('fa-spin');
    })
});