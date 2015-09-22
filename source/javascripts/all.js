$(function(){

  // prototype
  $('.breakpoint-button').click(function(){
    var device = $(this).attr('id');
    $(this).addClass('active').siblings().removeClass('active');
    $('#device-wrapper').removeClass().addClass(device);
  });

  //mobile navigation
  var backNavText = $('.back').html();
  var forwardNavText = $('.forward').html();

  function mobileNavigation(){
    var winW = window.innerWidth;

      if (winW <= 500) {
        $('.back').html('Previous');
        $('.forward').html('Next');
      }
      else {
        $('.back').html(backNavText);
        $('.forward').html(forwardNavText);
      }
  }

  mobileNavigation();

  $(window).resize(function(){
      mobileNavigation();
  });

});