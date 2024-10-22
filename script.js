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
});

// javascript
window.onresize = function () {
  if (window.innerHeight >= 820) {
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
