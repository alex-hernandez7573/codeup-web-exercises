"use strict";
// create function showMultiplicationTable that accepts a number and console.logs that multi
// table for that number (just multiply by the numbers 1 and 10)

const number = parseInt(prompt("Enter a number!"));
for (let i = 1; i <= 10;i++){
    const result = i*number;
    console.log(""+number+"*"+i+"="+""+result);
}