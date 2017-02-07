$(function(){
    /*right tab*/
    $(".myhome-right-head>span").click(function(){
        var index = $(this).index();
        $(".myhome-right-con>div").eq(index).show().siblings().hide();
        $(this).addClass("current").siblings().removeClass("current");
    });
});