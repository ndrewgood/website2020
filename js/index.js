import "jquery";

$(".menuButton").click(function(){
    $(".menuContainer").addClass("visible");
    $("#mobileNav").addClass("invisible").removeClass("mobileNav");
    $("main").addClass("invisible");
});

$(".menuX").click(function(){
  $(".menuContainer").removeClass("visible");
  $("#mobileNav").addClass("mobileNav").removeClass("invisible");
  $("main").removeClass("invisible");
});