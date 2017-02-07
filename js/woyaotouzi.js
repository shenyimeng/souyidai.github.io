$(function(){
    /*tab*/
    $(".title-tab>div").click(function(){
        var index = $(this).index();
        $(".left-items>.left-con").eq(index).show().siblings().hide();
        $(this).addClass("active").siblings().removeClass("active");
    });

    $(".rank-title>a").click(function(){
        var index = $(this).index();
        $(".rank-list>div").eq(index).show().siblings().hide();
        $(this).addClass("current").siblings().removeClass("current");
    });

    /*fold*/
    $(".morelist").click(function(){
        $(this).hide();
        $(".rank-list>div").removeClass("list-fold");
    });
});
function autoScroll(obj){
    $(obj).find("ul").animate({
        marginTop : "-36px"
    },500,function(){
        $(this).css({marginTop : "0px"}).find("li:first").appendTo(this);
    })
}
$(function(){
    setInterval('autoScroll(".notice-content")',3000);

})