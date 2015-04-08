'use strict';

$(document).ready(function() {

  // Projects
  // ================================================================================================

  // $('#onmyplate').hover(function() {
  //   $(this).children('.explanation').css({cursor: 'pointer'}).stop(true, true).slideDown(300);
  // }, function() {
  //   $(this).children('.explanation').css({cursor: 'pointer'}).stop(true, true).slideUp(300);
  // });

  // $('#musicwallet2').hover(function() {
  //   $(this).children('.explanation').css({cursor: 'pointer'}).stop(true, true).slideDown(300);
  // }, function() {
  //   $(this).children('.explanation').css({cursor: 'pointer'}).stop(true, true).slideUp(300);
  // });

  // $('#algorithms').hover(function() {
  //   $(this).children('.explanation').css({cursor: 'pointer'}).stop(true, true).slideDown(300);
  // }, function() {
  //   $(this).children('.explanation').css({cursor: 'pointer'}).stop(true, true).slideUp(300);
  // });


  $('#social-media-wrapper a:not([title="email"])').on('click', function(event) {
    event.preventDefault();
    switch($(this).attr('title')) {
      case 'github':
        window.open("https://github.com/cyurtbil", "_blank");
      case 'linkedin':
        window.open("https://www.linkedin.com/in/cenkyurtbilir", "_blank");
    }
  });
});