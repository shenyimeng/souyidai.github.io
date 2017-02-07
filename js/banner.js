
$(document).ready(function(){
    var index=0;
    var timer=null;
   //圆点绑定click事件
        $(".banner-page>a").click(function(){
            //清除定时器
            clearInterval(timer);
            index=$(this).index();
            changeBanner(index);
            //添加定时器，切换banner图
            timer=setInterval(autoPlay,2000);
        });
  //添加定时器，切换banner图
    timer=setInterval(autoPlay,2000);

function autoPlay(){
    index++;
    if(index>=5){
        index=0;
    }
    changeBanner(index);
}
});
function changeBanner(curIndex){
    $(".banner-page>a").removeClass("hover");
    $(".banner-page>a").eq(curIndex).addClass("hover");
    $(".banner-img>a").fadeOut("slow");
    $(".banner-img>a").eq(curIndex).fadeIn("slow");
}

















