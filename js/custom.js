(function ($) {
  "use strict";

  // PRE LOADER
  $(window).load(function () {
    $(".preloader").fadeOut(1000); // set duration in brackets
  });

  // Redirect if not local
  redirectIfNotLocal();

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
})(window.jQuery);

function redirectIfNotLocal() {
  const hostname = window.location.hostname;

  const isLocal = hostname === "localhost" || hostname === "127.0.0.1";

  if (!isLocal || hostname === "cyriellecoul.github.io") {
    window.location.replace("https://cyriellecoul.github.io/portfolio2025/");
  }
}
