import "jquery";

//
// MENU
//

//open menu
$(".menuButton").click(function(){
    $(".menuContainer").addClass("visible");
    $("#mobileNav").addClass("invisible").removeClass("mobileNav");
    $("main").addClass("invisible");
});


//close menu
$(".menuX").click(function(){
  $(".menuContainer").removeClass("visible");
  $("#mobileNav").addClass("mobileNav").removeClass("invisible");
  $("main").removeClass("invisible");
});

//
// Hover - Work
//

//hover Project Turf
$(function() {
  $('#pt').hover(function() {
    $('.memojiFace').addClass("noDisplay");
    $('.hello').addClass("noDisplay");
    $('.moreHello').addClass("noDisplay");
    $('#hoverImage').addClass("hoverImage hoverPT");
  }, function() {
    $('.memojiFace').removeClass("noDisplay");
    $('.hello').removeClass("noDisplay");
    $('.moreHello').removeClass("noDisplay");
    $('#hoverImage').removeClass("hoverImage hoverPT");
  });
});

//hover LiveWhale
$(function() {
  $('#lw').hover(function() {
    $('.memojiFace').addClass("noDisplay");
    $('.hello').addClass("noDisplay");
    $('.moreHello').addClass("noDisplay");
    $('#hoverImage').addClass("hoverImage hoverLW");
  }, function() {
    $('.memojiFace').removeClass("noDisplay");
    $('.hello').removeClass("noDisplay");
    $('.moreHello').removeClass("noDisplay");
    $('#hoverImage').removeClass("hoverImage hoverLW");
  });
});

//hover flux
$(function() {
  $('#flux').hover(function() {
    $('.memojiFace').addClass("noDisplay");
    $('.hello').addClass("noDisplay");
    $('.moreHello').addClass("noDisplay");
    $('#hoverImage').addClass("hoverImage hoverFLUX");
  }, function() {
    $('.memojiFace').removeClass("noDisplay");
    $('.hello').removeClass("noDisplay");
    $('.moreHello').removeClass("noDisplay");
    $('#hoverImage').removeClass("hoverImage hoverFLUX");
  });
});

//hover comotion
$(function() {
  $('#co').hover(function() {
    $('.memojiFace').addClass("noDisplay");
    $('.hello').addClass("noDisplay");
    $('.moreHello').addClass("noDisplay");
    $('#hoverImage').addClass("hoverImage hoverCO");
  }, function() {
    $('.memojiFace').removeClass("noDisplay");
    $('.hello').removeClass("noDisplay");
    $('#moreHello').removeClass("noDisplay");
    $('#hoverImage').removeClass("hoverImage hoverCO");
  });
});

//
// Hover - Play
//

//hover Chaos and the Butterfly
$(function() {
  $('#catb').hover(function() {
    $('.playDesc').addClass("noDisplay");
    $('#hoverImage').addClass("hoverImage hoverCATB");
  }, function() {
    $('.playDesc').removeClass("noDisplay");
    $('#hoverImage').removeClass("hoverImage hoverCATB");
  });
});

//hover Best Albums of 2019
$(function() {
  $('#ba19').hover(function() {
    $('.playDesc').addClass("noDisplay");
    $('#hoverImage').addClass("hoverImage hoverBA19");
  }, function() {
    $('#playDesc').removeClass("noDisplay");
    $('#hoverImage').removeClass("hoverImage hoverBA19");
  });
});

//hover Code Art
$(function() {
  $('#code').hover(function() {
    $('.playDesc').addClass("noDisplay");
    $('#hoverImage').addClass("hoverImage hoverCODE");
  }, function() {
    $('.playDesc').removeClass("noDisplay");
    $('#hoverImage').removeClass("hoverImage hoverCODE");
  });
});

//hover Drumline
$(function() {
  $('#drum').hover(function() {
    $('.playDesc').addClass("noDisplay");
    $('#hoverImage').addClass("hoverImage hoverDRUM");
  }, function() {
    $('.playDesc').removeClass("noDisplay");
    $('#hoverImage').removeClass("hoverImage hoverDRUM");
  });
});


$(function() {
  $(".sideBarUp").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
});

$(function() {
  $(".ptJump").on('click', function(e) {
    e.preventDefault();
    $(document).scrollTop( $("#ptFinal").offset().top );
  });
});



// Wrap every letter in a span
var textWrapper = document.querySelector('.hello');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var animationHelloTwo = anime.timeline()
.add({
  targets: '.hello .letter',
  translateY: [0,10],
  opacity: [1,0],
  easing: "easeOutExpo",
  duration: 200,
  delay: (el, i) => 30 * i
}).add({
  targets: '.hello .letter',
  translateY: [-10,0],
  opacity: [0,1],
  easing: "easeOutExpo",
  duration: 500,
  delay: (el, i) => 30 * i
});

var animationHello = anime({
  targets: '.hello .letter',
  opacity: [0,1],
  translateY: [-10,0],
  easing: "easeOutExpo",
  duration: 1000,
  delay: (el, i) => 30 * i
});

var animationMoreHello = anime({
  targets: '.moreHello',
  opacity: [0,1],
  easing: "easeOutExpo",
  delay: 500,
  duration: 2000
});

var animationPlay = anime({
  targets: '.playText',
  opacity: [0,1],
  easing: "easeOutExpo",
  duration: 2000
});

//...mobile copy. ik its fucking stupid
// Wrap every letter in a span
var textWrapperM = document.querySelector('.hello2');
textWrapperM.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var animationHelloTwoM = anime.timeline()
.add({
  targets: '.hello2 .letter',
  translateY: [0,10],
  opacity: [1,0],
  easing: "easeOutExpo",
  duration: 200,
  delay: (el, i) => 30 * i
}).add({
  targets: '.hello2 .letter',
  translateY: [-10,0],
  opacity: [0,1],
  easing: "easeOutExpo",
  duration: 500,
  delay: (el, i) => 30 * i
});

var animationHelloM = anime({
  targets: '.hello2 .letter',
  opacity: [0,1],
  translateY: [-10,0],
  easing: "easeOutExpo",
  duration: 1000,
  delay: (el, i) => 30 * i
});

var animationMoreHelloM = anime({
  targets: '.moreHello2',
  opacity: [0,1],
  easing: "easeOutExpo",
  delay: 500,
  duration: 2000
});

var animationPlayM = anime({
  targets: '.playText2',
  opacity: [0,1],
  easing: "easeOutExpo",
  duration: 2000
});

document.querySelector('#memoji').onclick = animationHelloTwo.restart;
document.querySelector('#memoji2').onclick = animationHelloTwoM.restart;

animationPlay();
animationPlayM();
animationHello();
animationMoreHello();
animationHelloM();
animationMoreHelloM();

