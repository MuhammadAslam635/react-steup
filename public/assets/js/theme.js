!(function (e) {
  "use strict";
  var o = e(".timer");
  o.length &&
    o.appear(function () {
      o.countTo();
    }),
    e(window).on("scroll", function () {
      var o = e(".sticky-menu");
      e(window).scrollTop() >= 100
        ? o.addClass("fixed")
        : o.removeClass("fixed");
    }),
    e(window).on("scroll", function () {
      e(this).scrollTop() > 200
        ? e(".scroll-top").fadeIn()
        : e(".scroll-top").fadeOut();
    }),
    e(".scroll-top").on("click", function () {
      return e("html, body").animate({ scrollTop: 0 }, 1500), !1;
    }),
    e("a.scroll-target").on("click", function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") ||
        location.hostname == this.hostname
      ) {
        var o = e(this.hash);
        if ((o = o.length ? o : e("[name=" + this.hash.slice(1) + "]")).length)
          return (
            e("html,body").animate({ scrollTop: o.offset().top - 120 }, 1e3), !1
          );
      }
    });
  var s = window.location.href.substr(
    window.location.href.lastIndexOf("https://html.creativegigstf.com/") + 1
  );
  if (
    (e(".navbar-nav > li  a").each(function () {
      (e(this).attr("href") != s && "" != e(this).attr("href")) ||
        e(this).addClass("active");
    }),
    e(".mixitUp-container").length)
  ) {
    var t = document.querySelector(".mixitUp-container");
    mixitup(t);
  }
  e(".user-data-form").length &&
    e(".passVicon").on("click", function () {
      e(".passVicon").toggleClass("eye-slash");
      var o = e(".pass_log_id");
      "password" === o.attr("type")
        ? o.attr("type", "text")
        : o.attr("type", "password");
    }),
    e(".companies-logo-slider").length &&
      e(".companies-logo-slider").slick({
        centerMode: !0,
        centerPadding: "0px",
        slidesToShow: 7,
        prevArrow: e(".prev"),
        nextArrow: e(".next"),
        autoplay: !0,
        autoplaySpeed: 3e3,
        responsive: [
          {
            breakpoint: 991,
            settings: { arrows: !0, centerMode: !0, slidesToShow: 5 },
          },
          {
            breakpoint: 768,
            settings: { arrows: !0, centerMode: !0, slidesToShow: 3 },
          },
          {
            breakpoint: 480,
            settings: { arrows: !0, centerMode: !0, slidesToShow: 2 },
          },
        ],
      }),
    e(".partnerSliderTwo").length &&
      e(".partnerSliderTwo").slick({
        centerMode: !0,
        centerPadding: "0px",
        arrows: !1,
        slidesToShow: 5,
        autoplay: !0,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 992, settings: { centerMode: !0, slidesToShow: 4 } },
          { breakpoint: 768, settings: { centerMode: !0, slidesToShow: 3 } },
          { breakpoint: 480, settings: { centerMode: !0, slidesToShow: 2 } },
        ],
      }),
    e(".clientSliderOne").length &&
      e(".clientSliderOne").slick({
        centerMode: !0,
        centerPadding: "0px",
        slidesToShow: 1,
        prevArrow: e(".prev_c"),
        nextArrow: e(".next_c"),
        autoplay: !0,
        autoplaySpeed: 6e3,
      }),
    e(".img-slick-slider").length &&
      e(".img-slick-slider").slick({
        dots: !0,
        arrows: !1,
        centerPadding: "0px",
        slidesToShow: 1,
        autoplay: !0,
        autoplaySpeed: 6e3,
      }),
    e(".clientSliderTwo").length &&
      e(".clientSliderTwo").slick({
        dots: !0,
        arrows: !1,
        centerMode: !0,
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: !0,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 2 } },
          { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
      }),
    e(".teamSliderOne").length &&
      e(".teamSliderOne").slick({
        dots: !1,
        arrows: !0,
        prevArrow: e(".prev_c"),
        nextArrow: e(".next_c"),
        centerPadding: "0px",
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: !1,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 768, settings: { slidesToShow: 3 } },
          { breakpoint: 576, settings: { slidesToShow: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
      }),
    e(".clientSliderThree").length &&
      e(".clientSliderThree").slick({
        dots: !1,
        arrows: !0,
        prevArrow: e(".prevT"),
        nextArrow: e(".nextT"),
        centerPadding: "0px",
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !1,
        autoplaySpeed: 3e3,
      }),
    e(".clientSliderFour").length &&
      e(".clientSliderFour").slick({
        dots: !0,
        arrows: !1,
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: !1,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      }),
    e(".clientSliderFive").length &&
      e(".clientSliderFive").slick({
        centerMode: !0,
        centerPadding: "0px",
        slidesToShow: 1,
        prevArrow: e(".prev_f"),
        nextArrow: e(".next_f"),
        autoplay: !0,
        autoplaySpeed: 6e3,
      }),
    e(".clientSliderSix").length &&
      e(".clientSliderSix").slick({
        dots: !0,
        arrows: !1,
        centerMode: !0,
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: !0,
        autoplaySpeed: 3e3,
        responsive: [
          {
            breakpoint: 1200,
            settings: { slidesToShow: 2, slidesToScroll: 2 },
          },
          { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      }),
    e(".clientSliderSeven").length &&
      e(".clientSliderSeven").slick({
        centerMode: !0,
        centerPadding: "0px",
        slidesToShow: 1,
        prevArrow: e(".prev_cs1"),
        nextArrow: e(".next_cs1"),
        autoplay: !0,
        fade: !0,
        autoplaySpeed: 6e3,
      }),
    e(".clientSliderEight").length &&
      e(".clientSliderEight").slick({
        dots: !0,
        arrows: !1,
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 3e3,
        responsive: [
          {
            breakpoint: 1200,
            settings: { slidesToShow: 2, slidesToScroll: 2 },
          },
          { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      }),
    e(".app-preview-slider-one").length &&
      e(".app-preview-slider-one").slick({
        dots: !1,
        arrows: !1,
        centerPadding: "0px",
        slidesToShow: 3,
        centerMode: !0,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 3 } },
          { breakpoint: 576, settings: { slidesToShow: 2, centerMode: !1 } },
        ],
      }),
    e(".app-preview-slider-two").length &&
      e(".app-preview-slider-two").slick({
        dots: !1,
        arrows: !1,
        centerPadding: "0px",
        slidesToShow: 5,
        centerMode: !0,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 3 } },
          { breakpoint: 576, settings: { slidesToShow: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
      }),
    e(".portfolio_slider_one").length &&
      e(".portfolio_slider_one").slick({
        dots: !1,
        arrows: !0,
        prevArrow: e(".prev_case1"),
        nextArrow: e(".next_case1"),
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: !1,
        centerMode: !0,
        autoplaySpeed: 3e3,
      }),
    e(".portfolio_slider_two").length &&
      e(".portfolio_slider_two").slick({
        dots: !1,
        arrows: !0,
        prevArrow: e(".prev_case2"),
        nextArrow: e(".next_case2"),
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: !1,
        centerMode: !0,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 768, settings: { slidesToShow: 2 } },
          { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
      }),
    e(".portfolio_slider_three").length &&
      e(".portfolio_slider_three").slick({
        dots: !1,
        arrows: !0,
        prevArrow: e(".prev_c"),
        nextArrow: e(".next_c"),
        centerPadding: "0px",
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 3 } },
          { breakpoint: 576, settings: { slidesToShow: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
      }),
    e(".product_slider_one").length &&
      e(".product_slider_one").slick({
        dots: !1,
        arrows: !0,
        prevArrow: e(".prev_p1"),
        nextArrow: e(".next_p1"),
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: !1,
        centerMode: !0,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 1200, settings: { slidesToShow: 2 } },
          { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
      }),
    e(".product_slider_two").length &&
      e(".product_slider_two").slick({
        dots: !1,
        arrows: !1,
        centerPadding: "0px",
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 1200, settings: { slidesToShow: 3 } },
          { breakpoint: 768, settings: { slidesToShow: 2 } },
          { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
      }),
    e("input,textarea").each(function () {
      e(this).data("holder", e(this).attr("placeholder")),
        e(this).on("focusin", function () {
          e(this).attr("placeholder", "");
        }),
        e(this).on("focusout", function () {
          e(this).attr("placeholder", e(this).data("holder"));
        });
    });
  var i = e(".doc-sidebar ul li.dropdown-holder>h4"),
    n = e(".doc-sidebar .sec-menu");
  e(".doc-sidebar ul li.dropdown-holder .expander");
  i.on("click", function (e) {
    e.preventDefault();
  }),
    i.append(function () {
      return '<span class="expander"><i class="fa fa-chevron-down" aria-hidden="true"></i></span>';
    }),
    i.on("click", function () {
      e(this).parent("li").children("ul").hasClass("show")
        ? e(this).parent("li").children("ul").removeClass("show")
        : (e(".sub-menu.show").removeClass("show"),
          e(this).parent("li").children("ul").addClass("show"));
    }),
    n.on("click", function () {
      e(this).parent("li").children("ul").hasClass("open")
        ? e(this).parent("li").children("ul").removeClass("open")
        : (e(".sub-menu.open").removeClass("open"),
          e(this).parent("li").children("ul").addClass("open"));
    }),
    (i = e(".card .card-header")).on("click", function (e) {
      e.preventDefault();
    }),
    i.on("click", function () {
      e(this).parent(".card").children(".collapse").hasClass("show")
        ? e(this).parent(".card").children(".collapse").removeClass("show")
        : (e(".collapse.show").removeClass("show"),
          e(this).parent(".card").children(".collapse").addClass("show"));
    }),
    e(".main-side-nav").length &&
      e(".main-side-nav a").on("click", function () {
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          var o = e(this.hash);
          if (
            (o = o.length ? o : e("[name=" + this.hash.slice(1) + "]")).length
          )
            return (
              e("html, body").animate({ scrollTop: o.offset().top - 100 }, 800),
              !1
            );
        }
      }),
    e(".theme-main-menu").length &&
      (e(".theme-main-menu .navbar-toggler").on("click", function () {
        e(".navbar-collapse").toggleClass("show"), e(this).toggleClass("open");
      }),
      e(".dropdown-menu .dropdown-toggle").on("click", function (o) {
        return (
          e(this).next().hasClass("show") ||
            e(this)
              .parents(".dropdown-menu")
              .first()
              .find(".show")
              .removeClass("show"),
          e(this).next(".dropdown-menu").toggleClass("show"),
          !1
        );
      })),
    e("#one-page-nav .nav-link").on("click", function () {
      e(".navbar-collapse").removeClass("show"),
        e(".navbar-toggler").removeClass("open");
    }),
    e(".doc-sidebar").length &&
      e(".doc-sidebar .btn").on("click", function () {
        e(".doc-links").toggleClass("show");
      }),
    e(".main-sidebar-nav").length &&
      (e(".sidebar-nav-button").on("click", function () {
        e(".main-sidebar-nav").addClass("show");
      }),
      e(".main-sidebar-nav .close-btn").on("click", function () {
        e(".main-sidebar-nav").removeClass("show");
      })),
    e(".product-value").length &&
      (e(".value-increase").on("click", function () {
        var o = e(this).closest("ul").find(".product-value"),
          s = parseInt(o.val());
        isNaN(s) || o.val(s + 1);
      }),
      e(".value-decrease").on("click", function () {
        var o = e(this).closest("ul").find(".product-value"),
          s = parseInt(o.val());
        !isNaN(s) && s > 1 && o.val(s - 1);
      })),
    e("#credit-card").length &&
      e(".payment-radio-button").on("click", function () {
        e("#credit-card").is(":checked")
          ? e(".credit-card-form").show(300)
          : e(".credit-card-form").hide(300);
      }),
    e(".js-tilt").length && e(".js-tilt").tilt({ glare: !0, maxGlare: 0.3 }),
    e("#contact-form").length &&
      (e("#contact-form").validator(),
      e("#contact-form").on("submit", function (o) {
        if (!o.isDefaultPrevented()) {
          return (
            e.ajax({
              type: "POST",
              url: "inc/contact.php",
              data: e(this).serialize(),
              success: function (o) {
                var s = "alert-" + o.type,
                  t = o.message,
                  i =
                    '<div class="alert ' +
                    s +
                    ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
                    t +
                    "</div>";
                s &&
                  t &&
                  (e("#contact-form").find(".messages").html(i),
                  e("#contact-form")[0].reset());
              },
            }),
            !1
          );
        }
      })),
    e(window).on("load", function () {
      e("#ctn-preloader").fadeOut(),
        e("#preloader").delay(350).fadeOut("slow"),
        e("body").delay(350).css({ overflow: "visible" }),
        e("[data-aos]").length && AOS.init({ duration: 1e3, mirror: !0 });
      var o = e(".fancybox");
      if (
        (o.length &&
          o.fancybox({
            arrows: !0,
            buttons: ["zoom", "slideShow", "thumbs", "close"],
            animationEffect: "zoom-in-out",
            transitionEffect: "zoom-in-out",
          }),
        e(".map-canvas").length)
      ) {
        var s = new google.maps.Map(e(".map-canvas")[0], {
          zoom: 14,
          center: new google.maps.LatLng(40.72, -74),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          clickableIcons: !1,
        });
        new google.maps.Marker({
          map: s,
          draggable: !0,
          position: new google.maps.LatLng(40.72, -74),
          visible: !0,
        });
      }
    });
})(jQuery);
