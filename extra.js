$('body').scrollspy({
   offset: $(window).height() * 0.4
});

$(window).on('scroll', function() {
  var w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
  if (w < 450) {
    $('.navbar-brand').addClass('small-brand')
  } else if (w < 650) {
    $('.navbar-brand').removeClass('small-brand')
  } else if ($(this).scrollTop() > 200) {
    $('.navbar-brand').addClass('small-brand')
  } else {
    $('.navbar-brand').removeClass('small-brand')
  }
});

$(window).on('load', function() {
  var w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
  if (w < 450) {
    $('.navbar-brand').addClass('small-brand')
  }
});

// The following was borrowed on "css-tricks.com".
$('a[href^="#"]:not([href^="#collapse"])').click(function(event) {
  // On-page links
  if (location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') 
      && location.hostname == this.hostname) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name='+this.hash.slice(1)+']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - 70
      }, 400, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

