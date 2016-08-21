$(document).ready(function(){
  $('.carousel').slick({
  centerMode: true,
  slidesToShow: 3,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});
});
