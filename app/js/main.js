$( document ).ready(function() {
  var mn = $(".main-nav"),
      mns = "main-nav-scrolled",
      pad = 50,
      hdr = $('.full-page').height()-pad;

  $(window).resize(function(){
    hdr = $('.full-page').height()-pad;
  })

  $(window).scroll(function() {
    if( $(this).scrollTop() > hdr ) {
      mn.addClass(mns);
    } else {
      mn.removeClass(mns);
    }
  });

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 80
          }, 500);
          return false;
        }
      }
    });
  });


});
