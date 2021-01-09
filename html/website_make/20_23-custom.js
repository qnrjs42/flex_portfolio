$(function () {
  // Trigger
  $(".trigger").click(function () {
    $(this).toggleClass("active");
    $(".gnb").toggleClass("active");
  });

  $(".gnb a").click(function () {
    $(".gnb, .trigger").removeClass("active");
  });

  // Sliding jQuery
  $(".gnb a, .goto-top").click(function (e) {
    $.scrollTo(this.hash || 0, 800);
    e.preventDefault();
  });

  // Header Scroll Change
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $("header, .goto-top").addClass("active");
    } else {
      $("header").removeClass("active");
      $("header, .goto-top").removeClass("active");
    }
  });

  // Slick.js
  $(".myslider").slick({
    // 1024px 이상
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        // 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        // 600px
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        // 480px
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
