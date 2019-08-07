import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
// window.jQuery = $;
// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

$(document).foundation();

$(".dropbtn").on("click", function() {
  $(".dropdown-content").toggleClass("responsive");
  $(".main_nav__mobile_menu_arrows").toggleClass("show-inline hidden");
  $(".main_nav__mobile_menu_close").toggleClass("show-inline hidden");

  $(this).attr("aria-expanded", function (i, attr) {
    return attr == "true" ? "false" : "true";
  });

});

$(".side_slide_out__title").on("click", function() {
  $(".side_slide_out").toggleClass("open closed");
  $(".side_slide_out__title").toggleClass("black");
  $(".side_slide_out__title_span_close").toggleClass("show-inline hidden");

  $(this).attr("aria-expanded", function (i, attr) {
    return attr == "true" ? "false" : "true";
  });
});
