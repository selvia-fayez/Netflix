$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
  },
});
$(".btn2").on("click", function () {
  $(".item").removeClass("col-md-3 col-sm-6 col-12");
  $(".item").addClass("col-6");
});
$(".btn4").on("click", function () {
  $(".item").removeClass("col-6");
  $(".item").addClass("col-3");
});
$(".btn1").on("click", function () {
  $(".item").addClass("col-12");
});
$(".filter").on("click", function () {
  $(".scroll").addClass("d-block");
});
$(".close").on("click", function () {
  $(".scroll").removeClass("d-block");
  $(".cart").removeClass("d-block");
});
$(".carticon").on("click", function () {
  $(".cart").addClass("d-block");
});
