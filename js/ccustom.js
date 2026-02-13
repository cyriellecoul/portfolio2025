(function ($) {
  "use strict";

  // PRE LOADER
  $(window).load(function () {
    $(".preloader").fadeOut(1000); // set duration in brackets
  });

  // CUSTOM LINKN
  $(".custom-link").click(function () {
    var el = $(this).attr("href");
    var elWrapped = $(el);
    var header_height = $(".navbar").height() + 10;

    scrollToDiv(elWrapped, header_height);
    return false;

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $("body,html").animate(
        {
          scrollTop: totalScroll,
        },
        300,
      );
    }
  });
  
// Typed animations
document.addEventListener("DOMContentLoaded", function () {
  new Typed("#typed", {
    strings: ["de sites Web", "d'applications mobiles", "de votre prochain projet numérique"],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
  });
});

  
})(window.jQuery);
