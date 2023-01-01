$(document).ready(function (event) {
   $('.header__burger').click(function (event) {
     $('.menu, .header__burger, .menu-bg').toggleClass('active');
     $('body').toggleClass('lock');
   });
   $('.menu__item, .menu-bg').click(function (event) {
      $('.header__burger, .menu, .menu-bg').removeClass('active');
      $('body').removeClass('lock');
   });  
  
   $('.reviews__slider').slick({
     swipe:true,
     slidesToShow: 3,
     infinite:false,
     initialSlide:1,
     speed: 500,    
     centerMode:true,
     prevArrow:$('.reviews__left'),
     nextArrow:$('.reviews__right'),
     touchThreshold:50,
      responsive: [
         {
         breakpoint: 841,
            settings: {
                slidesToShow: 2,
                infinite:true,
            }
         },
         {
         breakpoint: 563,
            settings: {
                slidesToShow: 1,
                infinite:true,
            }
         },

      ]  

   });   
    $('.reviews__slider')
     .on('afterChange', function(event, slick, currentSlide, nextSlide){
         $('.reviews__control>p>span').html(currentSlide + 1);
     });

});
