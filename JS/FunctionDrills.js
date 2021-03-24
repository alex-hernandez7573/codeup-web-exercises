"using strict";

console.log ("Functions using conditionals but not loops or arrays:");
// NO LOOPS NO ARRAYS ONLY MAN
// #1 Make a function named isOdd (number)

// console.log ("is Odd?")
// const isOdd = number = number => number % 2 === 1;
// console.log (isOdd(1));
// console.log (isOdd(2));
// console.log (isOdd(3));
// console.log (isOdd(4));
// console.log (isOdd(5));

// # 2 isEven

// console.log ("is Even?")
// const isEven = number => number % 2 === 0;
// console.log(isEven(1));
// console.log(isEven(2));
// console.log(isEven(3));
// console.log(isEven(4));
// console.log(isEven(5));

// #3 identity (input) that returns exactly as provided???? what lol idk what this means.
// #4  Make function to ask isFive (input)

// console.log ("is this 5?");
// const isFive = number => number === 5;
// console.log(isFive(1));
// console.log(isFive(2));
// console.log(isFive(3));
// console.log(isFive(4));
// console.log(isFive(5));

// # 5 make a function that adds five

// console.log ("a function that adds 5 from input");
// function addFive (number){
//     userInput = parseFloat(prompt("enter a value"));
//     return alert("adding 5 to that: "+(userInput+5));
//
// }
// addFive()

// # 6 Make a function named isMultipleOfFive(input)

// function  multiplesOfFive (number) {
//     userInput = parseFloat(prompt("Is this a multiple of 5? "));
//     return alert("the verdict is :"+( userInput % 5 === 0 ));
// }
// multiplesOfFive()

// #7 Make a function named isThree(input)

// function isThree (number) {
//     userInput = parseFloat(prompt("is this 3? "));
//     return alert("is this 3"+(userInput === 3));
// }
// isThree()

//# 8 Make a function named isMultipleOfThree(input)

// function isMultipleOfThree (input) {
//     input = parseFloat((prompt("is this multiple of 3?")));
//     return alert ("is this a multiple of 3: "+ (input % 3 === 0 ));
// }
// isMultipleOfThree();

// # 9 Make a function named isMultipleOfThreeAndFive(input)

function isMultipleOfThreeAndFive (num) {
    num = parseFloat(prompt("is this a is Multiple Of Three And Five? "));
    return alert("this is a multiple of 3 and 5"+ (num % 3 === 0 && num % 5 === 0) );
}
isMultipleOfThreeAndFive();

