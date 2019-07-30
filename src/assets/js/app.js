import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

var stickyTop = $(".sticky_nav").offset().top;
$(window).on("scroll", function(){
        if ($(window).scrollTop() >= stickyTop) {
            $(".sticky_nav").css({position: "fixed", top: "0px"});
            $(".home_body").css({padding: "5.1rem 0 2rem 0"});
        } else {
            $(".sticky_nav").css({position: "relative", top: "0px"});
            $(".home_body").css({padding: "0 0 2rem 0"});
            $(".side_slide_out").css({position: "relative"});
        }
});

$(".dropbtn").on("click", function() {
  $(".dropdown-content").toggleClass("responsive");
  $(".main_nav__mobile_menu_arrows").toggleClass("show-inline hidden");
  $(".main_nav__mobile_menu_close").toggleClass("show-inline hidden");
  $(".dropbtn").toggleClass("yellow");
});

$(".side_slide_out__title").on("click", function() {
  $(".side_slide_out").toggleClass("open closed");
  $(".side_slide_out__title").toggleClass("black");
});
