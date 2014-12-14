//= require_tree .

$(function(){
  
  // var iframe = $('#dupont-iframe');

  $('#breakpoint-select').change(function() {

    var breakpointSelected = $('#breakpoint-select').val();

    if ( breakpointSelected == 'desktop') {
      $('#dupont-iframe').attr('width', '100%');
    }
    if ( breakpointSelected == 'tablet') {
      $('#dupont-iframe').attr('width', '768');
    }
    if ( breakpointSelected == 'mobile') {
      $('#dupont-iframe').attr('width', '480');
    }
  });

});



