!(function (e) {
  "use strict";
  function a(a) {
    var t = e(document).scrollTop();
    e(".nav a").each(function () {
      var a = e(this),
        i = e(a.attr("href"));
      i.position().top <= t && i.position().top + i.height() > t
        ? (e(".nav ul li a").removeClass("active"), a.addClass("active"))
        : a.removeClass("active");
    });
  }
  function t() {
    var a = e(window).width();
    e(".submenu").on("click", function () {
      a < 767 &&
        (e(".submenu ul").removeClass("active"),
        e(this).find("ul").toggleClass("active"));
    });
  }
  e(window).scroll(function () {
    var a = e(window).scrollTop(),
      t = e(".header-text").height(),
      i = e("header").height();
    a >= t - i
      ? e("header").addClass("background-header")
      : e("header").removeClass("background-header");
  }),
    e(".loop").owlCarousel({
      center: !0,
      items: 1,
      loop: !0,
      autoplay: !0,
      nav: !0,
      margin: 0,
      responsive: { 1200: { items: 5 }, 992: { items: 3 }, 760: { items: 2 } },
    }),
    e(".partners").owlCarousel({
      center: !1,
      items: 2,
      loop: !0,
      autoplay: !0,
      nav: !1,
      margin: 0,
      responsive: { 1200: { items: 5 }, 992: { items: 4 }, 760: { items: 3 } },
    }),
    e(".menu-trigger").length &&
      e(".menu-trigger").on("click", function () {
        e(this).toggleClass("active"), e(".header-area .nav").slideToggle(200);
      }),
    e(".scroll-to-section a[href*=\\#]:not([href=\\#])").on(
      "click",
      function () {
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          var a = e(this.hash);
          if (
            (a = a.length ? a : e("[name=" + this.hash.slice(1) + "]")).length
          )
            return (
              991 > e(window).width() &&
                (e(".menu-trigger").removeClass("active"),
                e(".header-area .nav").slideUp(200)),
              e("html,body").animate({ scrollTop: a.offset().top + 1 }, 700),
              !1
            );
        }
      }
    ),
    e(document).ready(function () {
      e(document).on("scroll", a),
        e('.scroll-to-section a[href^="#"]').on("click", function (t) {
          t.preventDefault(),
            e(document).off("scroll"),
            e(".scroll-to-section a").each(function () {
              e(this).removeClass("active");
            }),
            e(this).addClass("active");
          var i = this.hash,
            i = e(this.hash);
          e("html, body")
            .stop()
            .animate(
              { scrollTop: i.offset().top + 1 },
              500,
              "swing",
              function () {
                (window.location.hash = i), e(document).on("scroll", a);
              }
            );
        });
    }),
    e(document).on("click", ".naccs .menu div", function () {
      var a = e(this).index();
      if (!e(this).is("active")) {
        e(".naccs .menu div").removeClass("active"),
          e(".naccs ul li").removeClass("active"),
          e(this).addClass("active"),
          e(".naccs ul")
            .find("li:eq(" + a + ")")
            .addClass("active");
        var t = e(".naccs ul")
          .find("li:eq(" + a + ")")
          .innerHeight();
        e(".naccs ul").height(t + "px");
      }
    }),
    e(window).on("load", function () {
      e("#js-preloader").addClass("loaded");
    }),
    screen.width > 575
      ? e(".dropdown-toggle").hover(function () {
          e(this).find(".dropdown-menu").toggleClass("active");
        })
      : e(".dropdown-toggle").click(function () {
          e(this).find(".dropdown-menu").toggleClass("active");
        });
})(window.jQuery);

AOS.init({
  once: true,
  delay: 0,
});
