
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });

    // CUSTOM LINK
    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
      
  }
});

  const dialog = document.getElementById('demo-modal');
  const openBtn = document.getElementById('open-modal');
  const closeBtn = document.getElementById('close-modal');

  openBtn.addEventListener('click', function(event) {
    event.preventDefault();
    dialog.showModal();
  });

  closeBtn.addEventListener('click', function() {
    dialog.close();
  });
    
  })(window.jQuery);


