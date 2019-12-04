import "jquery";

$(window).scroll(function() {
    var hT = $('#catb').offset().top,
        hH = $('#catb').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
           $('#mobileThumb').addClass('hoverCATB');
    } else {
          $('#mobileThumb').removeClass('hoverCATB');
    }
  });
  
  $(window).scroll(function() {
    var hT = $('#ba19').offset().top,
        hH = $('#ba19').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
           $('#mobileThumb').addClass('hoverBA19');
    } else {
          $('#mobileThumb').removeClass('hoverBA19');
    }
  });
  
  $(window).scroll(function() {
    var hT = $('#code').offset().top,
        hH = $('#code').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
           $('#mobileThumb').addClass('hoverCODE');
    } else {
          $('#mobileThumb').removeClass('hoverCODE');
    }
  });
  
  $(window).scroll(function() {
    var hT = $('#drum').offset().top,
        hH = $('#drum').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
           $('#mobileThumb').addClass('hoverDRUM');
    } else {
          $('#mobileThumb').removeClass('hoverDRUM');
    }
  });
  