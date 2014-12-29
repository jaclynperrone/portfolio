//= require_tree .

$(function(){
  
  // var iframe = $('#dupont-iframe');

  $('.desktop-button').click(function() {
    $('.breakpoint-button').removeClass('active');
    $('.desktop-button').addClass('active');
    $('.device-wrapper').removeClass("tablet mobile").addClass("desktop");
    $('#trapezoid').css("opacity", "1");
  });
  $('.tablet-button').click(function() {
    $('.breakpoint-button').removeClass('active');
    $('.tablet-button').addClass('active');
    $('.device-wrapper').removeClass("desktop mobile").addClass("tablet");
    $('#trapezoid').css("opacity", "0.0");
  });
  $('.mobile-button').click(function() {
    $('.breakpoint-button').removeClass('active');
    $('.mobile-button').addClass('active');
    $('.device-wrapper').removeClass("desktop tablet").addClass("mobile");
    $('#trapezoid').css("opacity", "0.0");
  });

});



