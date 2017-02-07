$(function(){
    $(".part3-process-aside>div").hover(function(){
        var index = $(this).index();
        $(".part3-process-picture>span").eq(index).show().siblings().hide();
        $(this).addClass("active").siblings().removeClass("active");
    });
});
