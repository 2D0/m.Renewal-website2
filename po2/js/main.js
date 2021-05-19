$("#header .gnb").mouseover(function(){
    $(this).stop().animate({
        height:450
    },300);
    $("#header .subBg").stop().animate({
        height:400
    },300);
}).mouseout(function(){
        $(this).stop().animate({
        height:63
    },300);
    $("#header .subBg").stop().animate({
        height:0
    },300);
});

$('.mainSlider ul').bxSlider({
  auto: true,
  controls: false,
  autoControls: false,
  stopAutoOnClick: true,
  pager: true,
});
