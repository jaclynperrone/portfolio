//= require_tree .

$(function(){
  
  // var iframe = $('#dupont-iframe');

  $('.desktop-button').click(function() {
    $('.device-wrapper').css('width', '100%');
    $('#dupont-iframe').attr('height', '600');
    $('.device-wrapper').css("padding", "50px");
    $('#trapezoid').css("opacity", "1");
  });
  $('.tablet-button').click(function() {
    $('.device-wrapper').css('width', '868');
    $('#dupont-iframe').attr('height', '600');
    $('.device-wrapper').css("padding", "50px");
    $('#trapezoid').css("opacity", "0.0");
  });
  $('.mobile-button').click(function() {
    $('.device-wrapper').css('width', '520');
    $('#dupont-iframe').attr('height', '760');
    $('.device-wrapper').css("padding", " 50px 20px 70px 20px");
    $('#trapezoid').css("opacity", "0.0");
  });

});



