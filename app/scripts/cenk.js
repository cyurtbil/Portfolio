'use strict';

$(document).ready(function() {


  $('#musicwallet').hover(function() {
    $(this).children('.explanation').css({cursor: 'pointer'}).stop(true, true).slideDown(300);
  }, function() {
    $(this).children('.explanation').css({cursor: 'pointer'}).stop(true, true).slideUp(300);
  });

  $('#onmyplate').hover(function() {
    $(this).children('.explanation').css({cursor: 'pointer'}).stop(true, true).slideDown(300);
  }, function() {
    $(this).children('.explanation').css({cursor: 'pointer'}).stop(true, true).slideUp(300);
  });

});