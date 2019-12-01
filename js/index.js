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
    $('#hello').addClass("noDisplay");
    $('#moreHello').addClass("noDisplay");
    $('#hoverImage').addClass("hoverImage hoverPT");
  }, function() {
    $('.memojiFace').removeClass("noDisplay");
    $('#hello').removeClass("noDisplay");
    $('#moreHello').removeClass("noDisplay");
    $('#hoverImage').removeClass("hoverImage hoverPT");
  });
});

//hover Best Albums of 2019
$(function() {
  $('#lw').hover(function() {
    $('.memojiFace').addClass("noDisplay");
    $('#hello').addClass("noDisplay");
    $('#moreHello').addClass("noDisplay");
    $('#hoverImage').addClass("hoverImage hoverLW");
  }, function() {
    $('.memojiFace').removeClass("noDisplay");
    $('#hello').removeClass("noDisplay");
    $('#moreHello').removeClass("noDisplay");
    $('#hoverImage').removeClass("hoverImage hoverLW");
  });
});

//hover Code Art
$(function() {
  $('#flux').hover(function() {
    $('.memojiFace').addClass("noDisplay");
    $('#hello').addClass("noDisplay");
    $('#moreHello').addClass("noDisplay");
    $('#hoverImage').addClass("hoverImage hoverFLUX");
  }, function() {
    $('.memojiFace').removeClass("noDisplay");
    $('#hello').removeClass("noDisplay");
    $('#moreHello').removeClass("noDisplay");
    $('#hoverImage').removeClass("hoverImage hoverFLUX");
  });
});

//hover Drumline
$(function() {
  $('#co').hover(function() {
    $('.memojiFace').addClass("noDisplay");
    $('#hello').addClass("noDisplay");
    $('#moreHello').addClass("noDisplay");
    $('#hoverImage').addClass("hoverImage hoverCO");
  }, function() {
    $('.memojiFace').removeClass("noDisplay");
    $('#hello').removeClass("noDisplay");
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
    $('#playDesc').addClass("noDisplay");
    $('#hoverImage').addClass("hoverImage hoverCATB");
  }, function() {
    $('#playDesc').removeClass("noDisplay");
    $('#hoverImage').removeClass("hoverImage hoverCATB");
  });
});

//hover Best Albums of 2019
$(function() {
  $('#ba19').hover(function() {
    $('#playDesc').addClass("noDisplay");
    $('#hoverImage').addClass("hoverImage hoverBA19");
  }, function() {
    $('#playDesc').removeClass("noDisplay");
    $('#hoverImage').removeClass("hoverImage hoverBA19");
  });
});

//hover Code Art
$(function() {
  $('#code').hover(function() {
    $('#playDesc').addClass("noDisplay");
    $('#hoverImage').addClass("hoverImage hoverCODE");
  }, function() {
    $('#playDesc').removeClass("noDisplay");
    $('#hoverImage').removeClass("hoverImage hoverCODE");
  });
});

//hover Drumline
$(function() {
  $('#drum').hover(function() {
    $('#playDesc').addClass("noDisplay");
    $('#hoverImage').addClass("hoverImage hoverDRUM");
  }, function() {
    $('#playDesc').removeClass("noDisplay");
    $('#hoverImage').removeClass("hoverImage hoverDRUM");
  });
});

$(window).scroll(function() {
  var hT = $('#lw').offset().top,
      hH = $('#lw').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
  if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
     $('h1').addClass('view')
  } else {
     $('h1').removeClass('view')
  }
});