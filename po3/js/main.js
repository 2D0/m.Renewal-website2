

/* 사이드메뉴 */
$(".btnMenu").click(function(){
   $(".sideMenu").animate({
        right:0
   },300);
});
$(".sideMenu .close").click(function(){
    $(".sideMenu").animate({
        right:-337
    },300);
});



    $(".sideMenu .gnb li .m").click(function(){

    var tg=$(this).siblings(".sideMenu .sub");

    var dis=tg.css("display");

 

    if(dis=="block"){

        $(this).removeClass("on");

        tg.slideUp(300);

    }

 

    if(dis=="none"){

        $("#header .sideMenu .gnb li .m").removeClass("on");

        $(this).addClass("on");

        $(".sideMenu .gnb li .sub").slideUp(300);

        tg.slideDown(300);

    };

    

    return false;

}); 


/* 탑메뉴 서브 */
$("#header .topMenu .gnb").mouseover(function(){
    $(this).stop().animate({
        height:560
    },300);
    $("#header .subBg").stop().animate({
        height:560
    },300);
}).mouseout(function(){
        $(this).stop().animate({
        height:63
    },300);
    $("#header .subBg").stop().animate({
        height:0
    },300);
});




/* 슬라이더 */
$('#mainSlider ul').bxSlider({
    auto: true,
    controls: false,
    autoControls: false,
    stopAutoOnClick: true,
    pager: true,
  });


