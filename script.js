$(document).ready(function () {
  const mobileMenu = $(".mobile-menu");
  const deskMenu = $(".desk-menu");
  const openMenu = $(".open-menu");
  mobileMenu.css({ display: "none" });
  //   openMenu.css({ display: "none" });
  openMenu.on("click", function () {
    mobileMenu.css({ display: "block" });
    mobileMenu.css({ width: "90%" });
  });
  $(".close-menu").on("click", function () {
    mobileMenu.css({ display: "none" });
  });

  // on scroll
  $(window).bind("scroll", function () {
    if ($(window).scrollTop() > 150) {
      deskMenu.addClass("fixed transition ease-in-out delay-150 duration-300");
    } else {
      deskMenu.removeClass("fixed");
    }
  });

  // slick carrousel

  $(".owl-carousel").owlCarousel({ items: 4, loop: true, autoplay: true });
});

//
$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};
$(window)
  .scroll(function () {
    var lastElem = null;

    $(".section-item").each(function (i) {
      if ($(this).isInViewport()) {
        lastElem = $(this);
      }
    });

    if (lastElem != null) {
      console.clear();
      console.log(lastElem.attr("id"));
    }
  })
  .scroll();

// javascript
window.onresize = function () {
  if (window.innerHeight >= 850) {
    /* ... */
  }

  if (window.innerWidth <= 1280) {
    /* ... */
  }
};

// jquery

$(window).on("resize", function () {
  var win = $(this); //this = window
  if (win.height() >= 820) {
    /* ... */
  }
  if (win.width() >= 768) {
    /* ... */
    $(".mobile-menu").css({ display: "none" });
  }
});
