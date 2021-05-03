"use strict"

// $("p").dblclick(function (){
//     $(this).hide();
// })

$('h1').click(function () {
    $(this).css('background-color','red');
})



// $('p').dblclick(function () {
//     $('p').css('font-size','18px');
// })
// ^ the p in the selector will make all paragraphs change font size



$('p').dblclick(function () {
    $(this).css('font-size','18px');
})

$('li').hover(function () {
    $(this).css('color','red');
}, function () {
    $(this).css('color','black');
})


























