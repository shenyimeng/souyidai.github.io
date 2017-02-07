$(function(){
    /*left*/
    $(".left-item-title").click(function() {
        $(this).siblings().toggle(500);
        $(this).find("i").toggleClass("up");
    });
});