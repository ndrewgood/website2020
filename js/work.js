import "jquery";

$(window).scroll(function() {
    var hT = $('#lw').offset().top,
        hH = $('#lw').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
       $('#mobileThumb').addClass('hoverLW');
    } else {
      $('#mobileThumb').removeClass('hoverLW');
    }
  });
  
  $(window).scroll(function() {
    var hT = $('#pt').offset().top,
        hH = $('#pt').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
       $('#mobileThumb').addClass('hoverPT');
    } else {
      $('#mobileThumb').removeClass('hoverPT');
    }
  });
  
  $(window).scroll(function() {
    var hT = $('#flux').offset().top,
        hH = $('#flux').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
       $('#mobileThumb').addClass('hoverFLUX');
    } else {
       $('#mobileThumb').removeClass('hoverFLUX');
    }
  });
  
  $(window).scroll(function() {
    var hT = $('#co').offset().top,
        hH = $('#co').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
           $('#mobileThumb').addClass('hoverCO');
    } else {
          $('#mobileThumb').removeClass('hoverCO');
    }
  });
  