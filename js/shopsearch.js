$(document).ready(function() {
  /*
輪撥設定
*/
  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000
  });
  /*
lightbox設定
*/
  $(".popClose").on("click", function() {
    $.magnificPopup.close();
  });

  $(".shopsearchBt").magnificPopup({
    type: "inline",
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });
});
