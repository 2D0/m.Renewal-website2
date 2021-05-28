$("#header .gnb").mouseover(function(){
            $(this).stop().animate({
                height:525
            },300);
            $("#header .subBg").stop().animate({
                height:525
            },300);
        }).mouseout(function(){
            $(this).stop().animate({
                height:40
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
