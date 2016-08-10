$( document ).ready(function() {
  var mn = $(".main-nav"),
      mns = "main-nav-scrolled",
      pad = 50,
      hdr = $('.intro').height()-pad;


  $(window).resize(function(){
    hdr = $('.intro').height()-pad;
  })

  $(window).scroll(function() {
    if( $(this).scrollTop() > hdr ) {
      mn.addClass(mns);
    } else {
      mn.removeClass(mns);
    }
  });
});
