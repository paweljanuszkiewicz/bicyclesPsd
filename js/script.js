$(document).ready(function () {
  //SLIDER
  var eq;
  var intervalTime = 6000;
  function hideShow() {
    $('.tweet.active').removeClass('active').fadeOut(400, function() {
      $('.tweet').eq(eq).addClass('active').fadeIn(400);
    });
    $('.dot.active').removeClass('active');
  }
  function next() {
    eq = ($('.tweet.active').index('.tweet') == 2) ? 0 : $('.tweet.active').index('.tweet') + 1;
    hideShow();
    $('.dot').eq(eq).addClass('active');
  }
  var interval = setInterval(next, intervalTime);
  //set first visible
  $('.tweet.active').css({'display': 'block'});
  //events
  $('.dot').on('click', function () {
    hideShow();
    $(this).addClass('active');
    eq = $(this).index('.dot');
    clearInterval(interval);
    interval = setInterval(next, intervalTime);
  });
  //INPUT
  var actualInputValue;
  $('input[type="text"]').on('focus', function () {
    actualInputValue = $(this).attr('value');
    $(this).attr('value', '');
  });
  $('input[type="text"]').on('blur', function () {
    $(this).attr('value', actualInputValue);
  });
  //scroll menu
  $('nav a').on('click', function ( e ) {
    var to = $(this).attr('href');
    e.preventDefault();
        $('html, body').animate({
            scrollTop: $(to).position().top
        }, 1000);
  });

});
