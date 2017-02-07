window.onload = function(){

    function loadImg(data, targetId) {

        console.log(data, targetId)
        var object = document.getElementById(targetId)
        var i = 0;
        setInterval(function(){
            i++
            if(i>data){
                i=data
            }
            var imgLeft = -(i*44+(i*10))+'px'
            object.style.backgroundPosition = imgLeft+'\t'+'0px'
            object.innerHTML = i+'%';
        },50)

    }
    loadImg(100 , 'rate1');
    loadImg(100 , 'rate2');
    loadImg(100 , 'rate3');
    loadImg(100 , 'rate4');
    loadImg(6.03 , 'rate5');
    loadImg(6.03 , 'rate6');
    loadImg(97 , 'rate7');
    loadImg(39 , 'rate8');
    loadImg(80 , 'rate9');
    loadImg(0 , 'rate10');
    loadImg(48 , 'rate11');
    loadImg(73 , 'rate12');
}