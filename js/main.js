(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Prevent navbar dropdown issues on resize
  $(document).ready(function () {
    $(".navbar-toggler").on("click", function () {
      $(".navbar-collapse").toggleClass("show"); // Toggle visibility
      $(this).toggleClass("collapsed"); // Add/remove collapsed class for button icon
    });
  });
  

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Modal Video
  var $videoSrc;
  $(".btn-play").click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);
  $("#videoModal").on("shown.bs.modal", function (e) {
    $("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });
  $("#videoModal").on("hide.bs.modal", function (e) {
    $("#video").attr("src", $videoSrc);
  });

  
  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Project carousel
  $(".project-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });

  //logo
  $(document).ready(function () {
    const logos = [
      "Logo 1.png",
      "Logo 2.png",
      "Logo 3.png",
      "Logo 4.png",
      "Logo 5.png",
      "Logo 6.png",
      "Logo 7.png",
      "Logo 8.png",
      "Logo 9.png",
      "Logo 10.png",
      "Logo 11.png",
      "Logo 12.png",
      "Logo 13.png",
      "Logo 14.png",
      "Logo 15.png",
      "Logo 16.png",
      "Logo 17.png",
      "Logo 18.png",
      "Logo 19.png",
      "Logo 20.png",
      "Logo 21.png",
      "Logo 22.png",
    ];

    const $logoTrack = $("#logoTrack");

    // Add logos to the slider
    $.each(logos, function (index, logo) {
      const $slide = $("<div>")
        .addClass("slide")
        .html(
          `<img src="img/Logos/${logo}" height="100" width="250" alt="${logo}" />`
        );
      $logoTrack.append($slide);
    });

    // Duplicate logos for continuous scrolling
    $.each(logos, function (index, logo) {
      const $slide = $("<div>")
        .addClass("slide")
        .html(
          `<img src="img/Logos/${logo}" height="100" width="250" alt="${logo}" />`
        );
      $logoTrack.append($slide);
    });
  });

  // Smooth scroll to appointment section
  $(document).on("click", "#getQuoteButton", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#appointment-section").offset().top,
      },
      1000,
      "easeInOutExpo"
    );
  });

  $(window).on('load', function(){	
    $('.counter').counterUp({
      delay: 10,
      time: 3000
    });	
  });
  

  // Toast Notification on Appointment Button Click
  $("#appointmentButton").on("click", function () {
    var toastEl = $("#appointmentToast")[0];
    var toast = new bootstrap.Toast(toastEl);
    toast.show();
  });
})(jQuery);

