"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// var colorInput = ['blue','red','cyan'];
//
// function analyzeColor (str) {
//     if (str === 'red'){
//         return "Strawberries are red";
//     } else if (str === 'blue') {
//         return "blue is the color of the sky";
//     } else if (str === 'cyan') {
//         return "I don't know anything about cyan";
//     } else {
//         return "I dont know anything about this color";
//     }
//
// }
// console.log (analyzeColor("red"));
// console.log (analyzeColor("blue"));
// console.log (analyzeColor("cyan"));
//


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log (analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor (str) {
    switch (str) {
        case 'red':
            return "Strawberries are red";
        case 'orange':
            return  "Carrots are orange";
        case 'yellow':
            return "Bananas are yellow";
        case 'green':
            return "Grass is green";
        case 'blue':
            return "Sky is blue";
        case 'indigo':
            return "Blueberries are indigo sometimes";
        case 'violet':
            return " Amethyst is violet";
        case 'cyan':
            return " exotic bird eggs can be cyan sometimes";
        default:
            return "I dont know anything about this color";
    }
}

console.log (analyzeColor("magenta"));
console.log (analyzeColor(randomColor))

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var giveMeTheColorNow = prompt('Enter the color or else!').toLocaleLowerCase();
var colorgiven = analyzeColor(giveMeTheColorNow);
console.log (colorgiven);
alert (colorgiven);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal (luckyNumber,amountTotal) {
    var discount;
    if (luckyNumber === 0) {
        discount = 0;
    } else if (luckyNumber === 1) {
        discount = .1;
    } else if (luckyNumber === 2) {
        discount = .25;
    } else if (luckyNumber === 3) {
        discount = .35;
    } else if (luckyNumber === 4) {
        discount = .5;
    } else if (luckyNumber === 5) {
        discount = 1;
    } else {
        discount = 0
    }
 var discountAmount = amountTotal * discount;
    return amountTotal - discountAmount;
}

console.log(calculateTotal(0, 100));
console.log(calculateTotal(1, 100));
console.log(calculateTotal(2, 100));
console.log(calculateTotal(3, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 100));

///// WRONG ATTEMPTS
// var discount;
//    case luckyNumber === 0;
//        return discount = 0;
//    case luckyNumber = 1;
//        return discount =.1;
//    case luckyNumber = 2;
//        return discount =.25;
//    case luckyNumber = 3;
//        return discount =.35;
//    case luckyNumber = 4;
//        return discount =.5;
//    case luckyNumber = 5;
//        return discount =1;


//  function calculateTotal (discount, amountTotal) {
//      switch (discount, amountTotal) {
//          case luckyNumber = 0:
//             return
//          case luckyNumber = 1:
//              return  discount;
//          case luckyNumber = 2:
//              return  discount;
//          case luckyNumber = 3:
//              return discount;
//          case luckyNumber = 4;
//             return discount;
//          case luckyNumber = 5;
//
//      }
// }

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
 var luckyNumber = Math.floor(Math.random() * 6);
 //
 // var userTotal = parseFloat(prompt("what is the total amount?"));
 // alert("your lucky number is "+luckyNumber);
 // alert(calculateTotal( luckyNumber,userTotal));

// var participate = confirm ("Enter for a discount number?")
//
// if (participate) {
// var theTotal = prompt("ENTER THE BILL TOTAL!NOW!");
// var theEnterTotal = calculateTotal(luckyNumber, theTotal);
//
// alert ("The lucky number was: "+luckyNumber);
// alert("the total you entered was: "+theTotal);
// alert("Wooo the final price is: "+theEnterTotal);
//
// }else {
//     alert("ahh well maybe next time");
// }
// console.log ("we working?");
//

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// var particpate = confirm("Would you like to enter a number?");
//  if (particpate){
//      var userNumber = parseFloat(prompt("Please enter a number"));
//      if (isNanN(userNumber)) {
//          alert (userNumber + "is not a number")
//      }
//      if (userNumber % 2 === 0) {
//          alert ( "your number is even");
//      } if (userNumber % 2 === 1) {
//          alert("your number is odd");
//      } if ( userNumber > 0 ) {
//          alert("you number is postive");
//      } else {
//          alert(" your number is a negative one");
//      }
//      alert(userNumber + 100 + " add 100");
//  }
//
//

var participate  = confirm("Would you like to enter a number?");
var numberEntry;
function isoddOrEven (num) {
    return (num % 2 === 0) ? "this number is even " : "this number is odd";
}
function isNegativeOrPostive (num) {
    return (num > 0 ) ? "this number is postive" : "this number is negative";
}

function plus100 (num) {
    return "your number is " + parseFloat(num+100)+ " when added with 100";
}

if (participate) {
    numberEntry = prompt("Please enter a number");
    if (isNaN(numberEntry)){
        alert("sorry that's not a number");
    } else {
        alert(isoddOrEven(numberEntry));
        alert(isNegativeOrPostive(numberEntry));
        alert(plus100(numberEntry));
    }

} else {
    alert("Next time")
}