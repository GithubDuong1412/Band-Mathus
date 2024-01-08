$(document).ready(function(){
    var num = 0;
    var Last_img = $("img.slider-img-animation:last").attr("idx");
    $("#next").click(function(){
        if(++num > Last_img){
            num=0;
        }
        $("img.slider-img-animation").hide();
        $("img.slider-img-animation").eq(num).show();
    });

    $("#prev").click(function(){
        if(--num < 0){
            num=Last_img;
        }
        $("img.slider-img-animation").hide();
        $("img.slider-img-animation").eq(num).show();
    });

    var interval;
    var timer = function(){
        interval = setInterval(function(){
            $("#next").click();
        }, 4000);
    };
    timer();
})