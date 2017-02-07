$(function(){
    window.onscroll= function(){
        var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrolltop>0){
            $("#page2-img").addClass("page2-img");
        }
        if(scrolltop>400){
            $("#page3-img").addClass("page3-img");
        }
        if(scrolltop>900){
            $("#page4-img").addClass("page4-img");
        }
        if(scrolltop>1400){
            $("#page5-img").addClass("page5-img");
        }
    }
});

