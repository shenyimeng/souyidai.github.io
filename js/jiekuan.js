$(function(){
    $(".con-right>a").hover(function(){
        var index = $(this).index();
        $(".con-left>div").eq(index).show().siblings().hide();
        $(this).addClass("active").siblings().removeClass("active");
    });
});