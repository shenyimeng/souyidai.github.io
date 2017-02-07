$(function(){
    /*tab切换*/
    /*entrance*/
    $(".entrance-box-title>div").click(function(){
        var index = $(this).index();
        $(".entrance-con").eq(index).show().siblings().hide();
        $(this).addClass("active").siblings().removeClass("active");
    });
    /*item3 left2*/
    $(".column-head>span").click(function(){
        var index = $(this).index();
        $(".column-item>.items").eq(index).show().siblings().hide();
    });
    /*item2 right*/
    $(".item2-rt-head>span").click(function(){
        var index = $(this).index();
        $(".item2-rt-list>div").eq(index).show().siblings().hide();
    });
    /*item3 right*/
    $(".item3-rt-head>span").click(function(){
        var index = $(this).index();
        $(".item3-rt-list>div").eq(index).show().siblings().hide();
    });
    /*footer code*/
    $(".line2-2-box a").hover(function(){
        var index = $(this).index();
        $(".line2-2-box .code").eq(index).show().css("opacity","1").siblings().hide();
    });
    $(".line2-2-box a").mouseout(function(){
        var index = $(this).index();
        $(".line2-2-box .code").eq(index).css("opacity","0.6");
    });

    /*底下的光标移动*/
    var cur_left=0;
    $(".column-head span").click(function(){
        var cur_left=153*($(this).index());
        $(".bottom-line2").animate({left:cur_left},150);
    });
    $(".item2-rt-head span").click(function(){
        var l_left=153*($(this).index());
        $(".bottom-line1").css("left",l_left);
    });
    $(".item3-rt-head span").click(function(){
        var l_left=153*($(this).index());
        $(".bottom-line3").css("left",l_left);
    });
});


