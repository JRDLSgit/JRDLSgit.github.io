(function ($) {
  "use strict";

  $(document).ready(function () {

    /* Initialize WOW.js for scroll animations */
    new WOW().init();

    /* ---------- 1. TESTIMONIOS ---------- */
    // 🔹 SOLO apunta a .testimonials-carousel y usa iconos simples:
    $(".testimonials-carousel").owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 4000,
      smartSpeed: 800,
      dots: false,
      nav: true,
      navText: [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
      ],
      responsive: { 0:{items:1}, 600:{items:2}, 992:{items:3} }
    });
    

    /* ---------- 2. CARRUSEL PRINCIPAL HERO ---------- */
    // (Aparece en la sección .carousel de tu portada)
    $(".carousel .owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 1000,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      dots: false,
      nav: true,
      navText: [
        '<i class="fa fa-chevron-left"></i>',
        '<i class="fa fa-chevron-right"></i>'
      ]
    });


    /* ---------- 3. OTROS carruseles genéricos ---------- */
    // 🔹 Si tienes MÁS carruseles (por ejemplo en otra página)
    //    dales una clase específica, p. ej. .owl-generic :
    $(".owl-generic").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 1000,
      nav: true,
      navText: [
        '<i class="fa fa-chevron-left"></i>',
        '<i class="fa fa-chevron-right"></i>'
      ]
    });


    /* ---------- 4. BACK‑TO‑TOP ---------- */
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 200) {
        $(".back-to-top").fadeIn("slow");
      } else {
        $(".back-to-top").fadeOut("slow");
      }
    });

    $(".back-to-top").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
      return false;
    });


    /* ---------- 5. NAVBAR STICKY ---------- */
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 0) {
        $(".navbar").addClass("nav-sticky");
      } else {
        $(".navbar").removeClass("nav-sticky");
      }
    });

  });
})(jQuery);
