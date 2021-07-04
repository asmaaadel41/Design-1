/*global $ , jQuery , alert */

$(document).ready(function () {

    "use strict";
    
// Nice Scroll
$("html").niceScroll();

$('.carousel').carousel({
    interval: 5000
});

//Show Color Option Div When Click On The Cog
$(".cog-check").click(function () {
    $(".color-option").fadeToggle();

});

//Change Theme Color On Click

var colorLi = $(".color-option ul li"),
    scrollButton = $("#scroll-top");

colorLi
    .eq(0).css("backgroundColor", "#b62323ec").end()
    .eq(1).css("backgroundColor", "#2983beec").end()
    .eq(2).css("backgroundColor", "#449D44").end()
    .eq(3).css("backgroundColor", "#A458A6");

colorLi.click(function () {

    $("link[href*='theme']").attr("href", $(this).attr("data-value"));
});

//Cashing The Scroll Top Element

$(Window).scroll(function () {
    $(this).scrollTop() > 700 ? scrollButton.show() : scrollButton.hide();

    //Click On Button T Top
    scrollButton.click(function () {
        $("html,body").animate({ scrollTop: 0 }, 600)
    });
});
// Loading Screen
/* $(window).load(function (){
 //Show The Scroll
     $(".loading-overlay h1").fadeOut(2000,
         function ()
         {
              $("body").css("overflow","auto")
             $(this).parent().fadeOut(2000,
                 function ()
                 {
                     $(this).remove();
                 });
         });
 }); */

});
