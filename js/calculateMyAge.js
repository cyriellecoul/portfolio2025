(function ($) {
  "use strict";

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
