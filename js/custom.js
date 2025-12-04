(function ($) {
  "use strict";

  // PRE LOADER
  $(window).load(function () {
    $(".preloader").fadeOut(1000); // set duration in brackets
  });

  // CUSTOM LINK
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
        300
      );
    }
  });

  ///////////////////
  // CALCULATE MY AGE
  ///////////////////
  const age = calculateAgeInDays("1988-02-20");

  document.getElementById("myAge").innerHTML = `${age}j`;

  const dialog = document.getElementById("demo-modal");
  const openBtn = document.getElementById("open-modal");
  const closeBtn = document.getElementById("close-modal");

  openBtn.addEventListener("click", function (event) {
    event.preventDefault();
    dialog.showModal();
  });

  closeBtn.addEventListener("click", function () {
    dialog.close();
  });

  function calculateAgeInDays(birthDate) {
    // get today's date
    const today = new Date();

    // get bithDate format Date
    const bithDateFormatted = new Date(birthDate);

    // calculate the difference in milliseconds.
    const diffMillisecondes = today.getTime() - bithDateFormatted.getTime();

    // calculate number of days
    const days = diffMillisecondes / (1000 * 60 * 60 * 24);

    // returns the age in days (rounded using Math.floor)
    return Math.floor(days);
  }

  ////////////////////////
  // MAKE CARDS SCROLLING
  ///////////////////////

  const cards = document.querySelectorAll(".rating-card");
  const wrapper = document.querySelector(".rating-cards-wrapper");
  const smallWindow = window.innerWidth < 768;
  const cardsPerView = smallWindow ? 1 : 2;
  let index = 0;

  function showCards() {
    cards.forEach((card, i) => {
      card.style.display =
        i >= index && i < index + cardsPerView ? "block" : "none";
    });

    wrapper.style.opacity = 1;
  }

  function nextCards() {
    wrapper.style.opacity = 0;

    setTimeout(() => {
      index += cardsPerView;
      if (index >= cards.length) index = 0;
      showCards();
    }, 300);
  }

  showCards();
  if (!smallWindow) {
    setInterval(nextCards, 13000);
  }
})(window.jQuery);
