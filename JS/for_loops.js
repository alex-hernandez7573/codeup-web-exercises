"use strict";
// create function showMultiplicationTable that accepts a number and console.logs that multi
// table for that number (just multiply by the numbers 1 and 10)

const number = parseInt(prompt("Enter a number!"));
for (let i = 1; i <= 10;i++){
    const result = i*number;
    console.log(""+number+"*"+i+"="+""+result);
}

// function randomIntFromInterval  (min, max){
//     return Math.floor(Math.random()*(max-min+1)+ min);
// }
// var random, evenOddString;
// for (var i =0; i <10; i++)
// {
//     random = randomIntFromInterval(20, 200);
//     evenOddString = (random % 2 === 0) ? 'even' : 'odd';
//     console.log (random + 'is' + evenOddString);
// }
//
//var rows=5;


for (var i = 1; i<9; i++)
{
    var numberPyr = "";
    for (var j = 0; j < i; j++)
    {
        numberPyr = numberPyr + i;
    }
    console.log(numberPyr);
}

for (var x =100; x>=5;x--){
    if(x%5===0){
        console.log(x);
    }
}

