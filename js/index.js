$(document).ready(function () {
  $(".units").click(dropMenu);
  $(".right li:nth-child(1)").click(activeLink1);
  $(".right li:nth-child(2)").click(activeLink2);
  $(".right li:nth-child(3)").click(activeLink3);

});

function dropMenu() {
  $(".drop-menu").slideToggle("slow").css("display", "block");
}

function activeLink1(event) {
  event.preventDefault();
  $(".nav-one").addClass('active');
  $(".nav-two").removeClass('active');
  $(".nav-three").removeClass('active');
}

function activeLink2(event) {
  event.preventDefault();
  $(".nav-one").removeClass('active');
  $(".nav-two").addClass('active');
  $(".nav-three").removeClass('active');
}

function activeLink3(event) {
  event.preventDefault();
  $(".nav-one").removeClass('active');
  $(".nav-two").removeClass('active');
  $(".nav-three").addClass('active');
}
