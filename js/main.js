
/* 마우스 커스텀 */
/* $(document).mousemove(function(e){
  $('.mouse').css("top", e.pageY);
  $('.mouse').css("left", e.pageX);
}); */




    
  // --------클릭시 반짝이 모션
      var first = new mojs.Shape({
        shape:'circle', //동그라미
        left:0, top:0, //위치
        radius:{0:40}, //안쪽 동그라미 크기
        fill:'none', //동그라미 색상
        stroke:'#fafafa', //바깥 선 컬러
        strokeWidth:{45:0}, //바깥 동그라미 선 굵기
    });
    var second = new mojs.Shape({
        shape:'circle',
        parent:first.el,
        radius:{0:50},
        stroke:'#2d0',
        strokeWidth:{20:0}
    });
    document.addEventListener('click', function(e){
        first.tune({x:e.pageX, y:e.pageY}).replay();
    })


/* BX슬라이더 */
/* $('.etc ul').bxSlider({
minSlides:2,
maxSlides:4,
slideWidth:1100,
sliderMargin:30,
moveSlides:1,

auto: false,
controls: true,
autoControls: false,
stopAutoOnClick: true,
pager: false,
}); */





//etc_Slider 슬릭---------------------
  

$('.etc_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  centerMode: true,
  arrows: false,
  asNavFor: '.etc_text_slider',
  autoplay: true,
  pauseOnHover:false,
  autoplaySpeed: 3000,
  
  //반응형 옵션
  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

var etc_slider = $('.etc_slider');

etc_slider.on('wheel', (function(e) {
  e.preventDefault();
  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickPrev');
  } else {
    $(this).slick('slickNext');
  }
}));

etc_slider.on('click', '.slick-slide', function (e) {
  e.preventDefault();
  var index = $(this).data("slick-index");
  if ($('.slick-slider').slick('slickCurrentSlide') !== index) {
    $('.slick-slider').slick('slickGoTo', index);
  }
});

$('.etc_text_slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  arrows: false,
  asNavFor: '.etc_slider',


});


/* 사과 뒤집기 스크립트-------------- */

let fruit1 = document.querySelector('.fruit1');
  fruit1.addEventListener('click',click);

    function click(event){
      let elem = event.currentTarget;
      if (elem.style.transform ==
        'rotateY(180deg)'){
                  elem.style.transform =
                  'rotateY(0deg)';
        } else {
          elem.style.transform =
          'rotateY(180deg)'
        }
    }

 
    
let fruit2 = document.querySelector('.fruit2');
fruit2.addEventListener('click',click);

function click(event){
  let elem = event.currentTarget;
  if (elem.style.transform ==
    'rotateY(180deg)'){
              elem.style.transform =
              'rotateY(0deg)';
    } else {
      elem.style.transform =
      'rotateY(180deg)'
    }
}

    
let fruit3 = document.querySelector('.fruit3');
fruit3.addEventListener('click',click);

function click(event){
  let elem = event.currentTarget;
  if (elem.style.transform ==
    'rotateY(180deg)'){
              elem.style.transform =
              'rotateY(0deg)';
    } else {
      elem.style.transform =
      'rotateY(180deg)'
    }
}

    
let fruit4 = document.querySelector('.fruit4');
fruit4.addEventListener('click',click);

function click(event){
  let elem = event.currentTarget;
  if (elem.style.transform ==
    'rotateY(180deg)'){
              elem.style.transform =
              'rotateY(0deg)';
    } else {
      elem.style.transform =
      'rotateY(180deg)'
    }
}


    
let fruit5 = document.querySelector('.fruit5');
fruit5.addEventListener('click',click);

function click(event){
  let elem = event.currentTarget;
  if (elem.style.transform ==
    'rotateY(180deg)'){
              elem.style.transform =
              'rotateY(0deg)';
    } else {
      elem.style.transform =
      'rotateY(180deg)'
    }
}


    
let fruit6 = document.querySelector('.fruit6');
fruit6.addEventListener('click',click);

function click(event){
  let elem = event.currentTarget;
  if (elem.style.transform ==
    'rotateY(180deg)'){
              elem.style.transform =
              'rotateY(0deg)';
    } else {
      elem.style.transform =
      'rotateY(180deg)'
    }
}


    
let fruit7 = document.querySelector('.fruit7');
fruit7.addEventListener('click',click);

function click(event){
  let elem = event.currentTarget;
  if (elem.style.transform ==
    'rotateY(180deg)'){
              elem.style.transform =
              'rotateY(0deg)';
    } else {
      elem.style.transform =
      'rotateY(180deg)'
    }
}


    
let fruit8 = document.querySelector('.fruit8');
fruit8.addEventListener('click',click);

function click(event){
  let elem = event.currentTarget;
  if (elem.style.transform ==
    'rotateY(180deg)'){
              elem.style.transform =
              'rotateY(0deg)';
    } else {
      elem.style.transform =
      'rotateY(180deg)'
    }
}


    
let fruit9 = document.querySelector('.fruit9');
fruit9.addEventListener('click',click);

function click(event){
  let elem = event.currentTarget;
  if (elem.style.transform ==
    'rotateY(180deg)'){
              elem.style.transform =
              'rotateY(0deg)';
    } else {
      elem.style.transform =
      'rotateY(180deg)'
    }
}


    
let fruit10 = document.querySelector('.fruit10');
fruit10.addEventListener('click',click);

function click(event){
  let elem = event.currentTarget;
  if (elem.style.transform ==
    'rotateY(180deg)'){
              elem.style.transform =
              'rotateY(0deg)';
    } else {
      elem.style.transform =
      'rotateY(180deg)'
    }
}


    
let fruit11 = document.querySelector('.fruit11');
fruit11.addEventListener('click',click);

function click(event){
  let elem = event.currentTarget;
  if (elem.style.transform ==
    'rotateY(180deg)'){
              elem.style.transform =
              'rotateY(0deg)';
    } else {
      elem.style.transform =
      'rotateY(180deg)'
    }
}


    
let fruit12 = document.querySelector('.fruit12');
fruit12.addEventListener('click',click);

function click(event){
  let elem = event.currentTarget;
  if (elem.style.transform ==
    'rotateY(180deg)'){
              elem.style.transform =
              'rotateY(0deg)';
    } else {
      elem.style.transform =
      'rotateY(180deg)'
    }
}


    
let fruit13 = document.querySelector('.fruit13');
fruit13.addEventListener('click',click);

function click(event){
  let elem = event.currentTarget;
  if (elem.style.transform ==
    'rotateY(180deg)'){
              elem.style.transform =
              'rotateY(0deg)';
    } else {
      elem.style.transform =
      'rotateY(180deg)'
    }
}


    
let fruit14 = document.querySelector('.fruit14');
fruit14.addEventListener('click',click);

function click(event){
  let elem = event.currentTarget;
  if (elem.style.transform ==
    'rotateY(180deg)'){
              elem.style.transform =
              'rotateY(0deg)';
    } else {
      elem.style.transform =
      'rotateY(180deg)'
    }
}


