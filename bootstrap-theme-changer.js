// Author: Serhat SOYLEMEZ

var btclass = ['table-', 'btn-', 'btn-outline-', 'badge-', 'alert-', 'list-group-item-', 'bg-', 'border-', 'text-'];
var btcolor = ['primary', 'secondary', 'success', 'info', 'danger', 'warning', 'light', 'dark']; // Colors.

var btaltern = ['text-white', 'text-white-50', 'text-body', 'text-black-50', 'text-muted', 'navbar-light', 'navbar-dark',
  'thead-light', 'thead-dark', 'bg-white', 'bg-black', 'border-white', 'border-black', 'bx', 'by', 'bz'];

$(function() {

  $('body').prepend('<fieldset class="container my-2" >\
    <strong><label for="bt-value-color" >Select Color : </label></strong>\
    <input type="number" id="bt-value-color" min="1" max="8" value="1" />\
    </fieldset>'); // You can add these or use input, select whose id bt-value-color to html file manually.

  $('#bt-value-color').change(function() {

    var n = $('#bt-value-color').val()-1; // Theme changer value. Important for script!

    $('.bg-black,.border-black,btn').removeAttr('style'); // Removing used old color styles.
    $('.bx').addClass('border-dark'); // Adding missing removed classes.
    $('.by').removeClass('border'); // Removing extra added classes.
    $('.bz').addClass('text-dark'); // Adding missing removed classes.
    $('.thead-dark,.thead-light').addClass('bg-dark'); // Changing thead style. Bg-{color} is better.

    for (var k = 0; k < btaltern.length; k++) {
      $('*').removeClass(btaltern[k]); // Removing some unwanted classes.
    }

    for (var j = 0; j < btcolor.length; j++) {
      for (var i = 0; i < btclass.length; i++) {
        $('.'+btclass[i]+btcolor[j]).removeClass(btclass[i]+btcolor[j]).addClass(btclass[i]+btcolor[n]);
      } // *** Changing theme. ***
    }

    for (var j = 0; j < btcolor.length; j++) {
      $('.btn').removeClass('text-'+btcolor[j]+' border-'+btcolor[j]);
      $('kbd,.bg-'+btcolor[j]).removeClass('text-'+btcolor[j]);
    } // Removing some unwanted {color} classes.

    if (n == 5) { // Correcting Warning color.

      $('.bg-warning:not(.navbar)').addClass('text-body'); // Yellow background and Black text.
      $('.bg-warning.navbar').addClass('navbar-light'); // Yellow background and Black text.

    } else if (n == 6) { // Correcting Light color.

      $('.progress-bar.bg-light').removeClass('bg-light').addClass('bg-dark'); // Dark bar is better than Light bar.
      $('.bg-light:not(.navbar)').addClass('text-body'); // Light background and Black text.
      $('.bg-light.navbar').addClass('navbar-light'); // Light background and Black text.
      $('.btn').addClass('border border-black by'); // Adding border to Buttons - "by" is a Mark for border class.

      $('.btn-outline-light').addClass('text-muted').hover(function() { // Adding classes for white and dark background.
        $('.btn-outline-light').removeClass('text-muted');
      },function() {
        $('.btn-outline-light').addClass('text-muted');
      });

      $('.border-light').removeClass('border-light').addClass('border-black bx'); // "bx" is a Mark for border-{color} class.
      $('thead.bg-light').removeClass('bg-light').addClass('thead-light'); // thead-light is better than bg-light.
      $('.text-light').addClass('bg-black'); // Adding class for white background.

    } else if (n == 7) { // Correcting Dark color.

      $('.bg-dark:not(.navbar)').removeClass('text-dark').addClass('text-white'); // Dark background and White text.
      $('.bg-dark.navbar').removeClass('text-dark').addClass('navbar-dark'); // Dark background and White text.
      $('.btn').addClass('border border-black by'); // Adding border to Buttons - "by" is a Mark for border class.

      $('.btn-outline-dark').addClass('text-muted').hover(function() { // Adding classes for white and dark background.
        $('.btn-outline-dark').removeClass('text-muted');
      },function() {
        $('.btn-outline-dark').addClass('text-muted');
      });

      $('tr.table-dark').addClass('text-body'); // Fixing White text on tr.table-dark
      $('.text-dark').removeClass('text-dark').addClass('text-muted bz'); // "bz" is a Mark for text-{color} class.

    } else { // Correcting Primary, Secondary, Success, Info and Danger colors.

      $('.bg-'+btcolor[n]+':not(.navbar)').addClass('text-white'); // Colored background and White text.
      $('.bg-'+btcolor[n]+'.navbar').addClass('navbar-dark'); // Colored background and White text.
    }

    $('kbd').addClass('border border-white'); // Adding class for dark background.
    $('.border-black').css('cssText','border-color: #818182 !important;'); // Adding extra color style.
    $('.bg-black').css('cssText','background-color: #818182 !important;'); // Adding extra color style.

  });

  $('#bt-value-color').change(); // On ready, change.

});
