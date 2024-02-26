// <!-- Author: https://trungquandev.com -->
function zoomImages(className) {
  $(`.${className}`).unbind("click").on("click", function() {
    $("#div-zoom-area").css("display", "block");
    $("#img-zoom-area-content").attr("src", $(this)[0].src);

    $("#div-zoom-area").on("click", function() {
      $(this).css("display", "none");
    });
  });
}

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $("a.js-scroll-trigger[href*='#']:not([href='#'])").click(function() {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate({
          scrollTop: (target.offset().top)
        }, 500, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#sideNav"
  });
  
  // Say hello when access page.
  if (window.innerWidth < 992) {
    // Default position of notify is bottom-right
    alertify.success("Have A Nice Day Everyone! I'm TrungQuanDev from Vietnam 🇻🇳", 5);
  } else {
    alertify.set("notifier","position", "top-right");
    alertify.success("Have A Nice Day Everyone! I'm TrungQuanDev from Vietnam 🇻🇳", 5);
  }

  // Zoom images that have class name: img-zoomable
  zoomImages("img-zoomable");

})(jQuery); // End of use strict
