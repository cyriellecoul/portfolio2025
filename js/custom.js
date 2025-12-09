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
  // INIT ELEMENTS
  ///////////////////
  const track = document.getElementById("track");
  const arrowLeft = document.getElementById("arrowLeft");
  const arrowRight = document.getElementById("arrowRight");
  let cardsPerView = 4;
  let index = 0;
  let cards = [];

 //////////////////////////////
  // GET DATAS FROM A JSON FILE
  ////////////////////////////
  fetch("js/ratingFile.json")
    .then((response) => response.json())
    .then((data) => {
      cards = data;
      renderCards();
      updateCardsPerView();
      updateArrows();
    })
    .catch((err) => console.error(err));

  ////////////////////////
  // CREATE CARDS
  ///////////////////////

  /**
   * Generates HTML for star ratings based on the given rate.
   *
   * @param {number} rate - The number of filled stars (0 to 5).
   * @returns {string} HTML containing filled and empty stars.
   */
  function generateStars(rate) {
    let starsHTML = "";
    const fullStars = Math.floor(rate);
    const emptyStars = 5 - fullStars;

    for (let i = 0; i < fullStars; i++) {
      starsHTML += `<i class="bi bi-star-fill text-warning"></i>`;
    }
    for (let i = 0; i < emptyStars; i++) {
      starsHTML += `<i class="bi bi-star text-warning"></i>`;
    }

    return starsHTML;
  }

  /**
   * Renders all cards dynamically from the `cards` array (coming from JSON file) into the carousel track.
   * Each card includes image, name, connection, rating stars, authenticity and comment.
   * The stars are generated dynamically using `generateStars()`.
   *
   * @returns {void} This function does not return anything. It directly updates the DOM.
   *
   */
  function renderCards() {
    track.innerHTML = ""; // empty the container before filling

    cards.forEach((item) => {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add(
        "card",
        "mb-5",
        "me-3",
        "shadow",
        "p-3",
        "rating-card"
      );

      // Create an HTML of the card
      cardDiv.innerHTML = `
      <div class="row align-items-center">
        <div class="col-4">
          <img src="${item.image}" class="avatar-image-perso img-fluid" alt="${
        item.alt
      }">
        </div>
        <div class="col-8">
          <div class="rating-name">${item.name}</div>
          <h7 class="mb-1 rating-details">${item.connection} -</h7><br>
           <h7 class="mb-1 rating-authenticity">${item.authenticity}</h7>
          <div class="rating mb-2">
            ${generateStars(item.rate)}
          </div>
        </div>
      </div>
      <div class="text-muted mt-1 rating-comments">
        ${item.comment}
      </div>
    `;

      track.appendChild(cardDiv);
    });
  }

  /**
   * Updates the number of cards visible in the carousel based on the current window width.
   * Adjusts the `cardsPerView` variable and calls `showCards()` to update the display.
   * @returns {void} Updates the global `cardsPerView` and refreshes visible cards in the DOM.
   */
  function updateCardsPerView() {
    const window = window.innerWidth;
    if (window < 576) cardsPerView = 1;
    else if (window < 768) cardsPerView = 2;
    else if (window < 992) cardsPerView = 3;
    else cardsPerView = 4;

    showCards();
  }

  /**
   * Updates the carousel display to show the correct set of cards based on the current index
   * and number of cards per view, and updates the visibility of the left/right arrows.
   *
   * - Cards outside the visible range are hidden.
   * - The left arrow is hidden if at the start.
   * - The right arrow is hidden if at the end.
   *
   * @returns {void} Updates the DOM directly: transforms the carousel track and toggles arrow display.
   */
  function showCardsAndUpdateArrows() {
    const offset = -(index * (100 / cardsPerView));
    track.style.transform = `translateX(${offset}%)`;
    updateArrows();
  }

  // Navigation of arrows
  arrowRight.addEventListener("click", () => {
    index += cardsPerView;
    if (index >= cards.length) index = cards.length - cardsPerView;
    if (index < 0) index = 0;
    showCardsAndUpdateArrows();
  });

  arrowLeft.addEventListener("click", () => {
    index -= cardsPerView;
    if (index < 0) index = 0;
    showCardsAndUpdateArrows();
  });

  // Display/Hide arrows
  function updateArrows() {
    arrowLeft.style.display = index <= 0 ? "none" : "block";
    arrowRight.style.display =
      index + cardsPerView >= cards.length ? "none" : "block";
  }

  window.addEventListener("resize", () => {
    updateCardsPerView();
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
})(window.jQuery);
