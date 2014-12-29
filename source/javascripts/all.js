//= require_tree .

$(function(){
  
  // var iframe = $('#dupont-iframe');

  $('.desktop-button').click(function() {
    $('.device-wrapper').removeClass("tablet mobile").addClass("desktop");
    $('#trapezoid').css("opacity", "1");
  });
  $('.tablet-button').click(function() {
    $('.device-wrapper').removeClass("desktop mobile").addClass("tablet");
    $('#trapezoid').css("opacity", "0.0");
  });
  $('.mobile-button').click(function() {
    $('.device-wrapper').removeClass("desktop tablet").addClass("mobile");
    $('#trapezoid').css("opacity", "0.0");
  });

});



