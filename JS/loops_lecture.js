"use strict";

// var slices = 8;
//
// while (slices > 0) {
//     console.log ("Ill have a slice");
//     slices = slices -1;
//     console.log ("Now there's "+slices+" slices left!");
// }


// PseudoCode is when we plan out the code
// ask user input
// get user input
// declare user input val
// store user input in the var
// declare a var tos tore the total (accumulator)
// add the cost o the new item to the total
//tell the user how to end the program
// loop back around and do it all again

// var priceOfItem = parseFloat(prompt("Enter the price of your first item"));
// alert("the price of the your item was "+priceOfItem);
// var totalCost = priceOfItem;
// var userInput = "";

// priceOfItem = parseFloat(prompt("enter the next item")) ;
// totalCost = totalCost + priceOfItem;
// alert("Your total is now "+totalCost.toFixed(2));

// creating a sentinel value

// while (priceOfItem !== "stop") {
//     priceOfItem = parseFloat("enter the price of your next item");
//     totalCost =totalCost+priceOfItem;
//     //alert("your total is now "+totalCost.toFixed(2));
//     if (userInput === "stop")
//     {
//         alert("Ok. your final price  "+totalCost);
//     } else {
//         priceOfItem = parseFloat([priceOfItem])
//     }
// }


// pure math example for exercise
var counter = 8;
while (counter >= 0) {
    console.log ("Light the FUSE!"+counter);
    counter = counter - 1;
}

// var num = prompt("what number do you want to start with?");
// var originalNumber = num;
// var exponent =2;
// num = num * originalNumber;
//
// console.log (originalNumber," to the power of "+exponent+" = "+num

///\/\/\/\\/\/\/ DO WHILE LOOPS /\/\\\\

var number = Math.floor (Math.random()*6)+1;
var guess;
do  {
    guess =parseInt(prompt("enter Between 1 and 6"));
} while (guess !== number)  {
    //alert("nope");
}
alert("your guess of " + guess + " matches the number "+ number+"!");
