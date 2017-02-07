function focusblur(inputid){
    var inputid=$(inputid);
    var inputval=$(inputid).val();
    inputid.focus(function(){
        var thisval=$(this).val();
        if(thisval==inputval){
            $(this).val("").css("color","#333");
        }
    });
    inputid.blur(function(){
        var thisval=$(this).val();
        if(thisval==""){
            $(this).val(inputval).css("color","rgb(204, 204, 204)");
        }
    });
}
$(function(){
    focusblur("#duihuanma");
});
