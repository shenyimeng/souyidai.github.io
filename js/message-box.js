$(function(){
    /*我的账户 消息箱*/
    $(".msg-show a").click(function() {
        $(this).parent().parent().siblings().toggle(300);
        $(this).find("i").toggleClass("up");
    });

});
function selectAll(){
    var ibox=document.getElementsByName("checkbox");
    console.log(ibox);
    if(ibox[0].checked){
        for(var i=0;i<ibox.length;i++){
            if(ibox[i].type=="checkbox") {
                ibox[i].checked = true;
            }
        }
    }
    else{
        for(var i=0;i<ibox.length;i++){
            if(ibox[i].type=="checkbox"){
                ibox[i].checked=false;
            }
        }
    }
}