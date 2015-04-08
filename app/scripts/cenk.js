'use strict';

$(document).ready(function() {


  $('#social-media-wrapper a:not([title="email"])').on('click', function(event) {
    event.preventDefault();
    switch($(this).attr('title')) {
      case 'github':
        window.open("https://github.com/cyurtbil", "_blank");
      case 'linkedin':
        window.open("https://www.linkedin.com/in/cenkyurtbilir", "_blank");
    }
  });

  $('.explanation a').on('click', function(event) {
    event.preventDefault();
    switch($(this).attr('title')) {
      case 'OnMyPlate Code':
        window.open("https://github.com/cyurtbil/OnMyPlateClient", "_blank");
      case 'OnMyPlate Website':
        window.open("http://onmyplatecy.com/", "_blank");
      case 'MusicWallet Code':
        window.open("https://github.com/cyurtbil/MusicWalletClient", "_blank");
      case 'MusicWallet Website':
        window.open("http://musicwalletcy.com/", "_blank");
    }
  });

  $('#hamburger').on('click', function(event) {
    $('body,html').animate({ scrollTop: 630 }, 700);
  });

  $('#hamburger').hover(function() {
    $('#hamburger .line:eq(0)').toggleClass('line1');
    $('#hamburger .line:eq(1)').toggleClass('line2');
    $('#hamburger .line:eq(2)').toggleClass('line3');
  });
});