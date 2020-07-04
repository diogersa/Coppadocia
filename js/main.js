$(document).ready(function () {
  // fairytail slider
  $(".fairytail-slider").slick({
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><img src="/img/fairytail/arrow-left.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><img src="/img/fairytail/arrow-right.svg" alt=""></button>',
    autoplay: 3000,
    // fade: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // trip slider
  $(".trip-slider").slick({
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><img src="/img/fairytail/arrow-left.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><img src="/img/fairytail/arrow-right.svg" alt=""></button>',
    autoplay: 3000,
    fade: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  // Плавная прокрутка к якорю
  $("a[href^='#']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });
});
