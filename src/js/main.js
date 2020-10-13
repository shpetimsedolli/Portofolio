(function ($, window, document) {
    "use strict";
    $(() => {
        //##Variables
        //End Variablesn
        
        $('.slider__content').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            prevArrow: false,
            nextArrow: false
          });
          $('.about--nav').click(function() {
            $('html,body').animate({
                scrollTop: $(".about_section").offset().top},
                'slow');
        });
        document.querySelector(".hamburger").addEventListener("click", function (e) {
          document.querySelector(".nav_wrapper").classList.toggle("is--toggled");
        });
      $(document).scroll(function () {
        if ($(document).scrollTop() > $(".first_banner").outerHeight()) {
          $(".main_header").addClass("is--sticky");
        } else {
          $(".main_header").removeClass("is--sticky");
        }
      });
    });
    window.addEventListener('load', function(){
        document.getElementById('load_screen').style.opacity = '0';
        document.getElementById('load_screen').style.zIndex = '-1';
     
    })
  }
  )(window.jQuery, window, document);