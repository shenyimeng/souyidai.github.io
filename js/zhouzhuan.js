$(function(){
    $(".left2-1>div").hover(function() {
        var index = $(this).index();
        $(this).addClass("select").siblings().removeClass("select");
    });
});
