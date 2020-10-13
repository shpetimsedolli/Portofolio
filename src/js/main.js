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
  }
  )(window.jQuery, window, document);