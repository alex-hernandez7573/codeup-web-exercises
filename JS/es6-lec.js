"use strict"




// var oldWay = Math.pow(4,2);
// console.log(oldWay +" old way");
//
//
// var newWay = 4**2+" new way";
// console.log (newWay)


/// var vs let vs const ///

// var
// variables declared with var are function-scoped. This means that if a variable is cdeclaered anywhere elese
// besides a function using var, it will always exist in the global scope.


//ex

// for (var i=0;i < 5;i++) {
//     console.log (i)
// }
// i="hello!"
//
// console.log(i);
//
// if (i=== "hello!"){
//     var bubbles = 'Buubububuuububulses';
// }
//
// bubbles= 'pop!'
// console.log(bubbles);
//
//
//
// function test () {
//  var logMe = 'Hello!'
//     bubbles= '*floating*'
//     return logMe;
// }

// console.log (test())
// console.log(logMe)


////// ***** CONST ***** //////
// const is blocked-scoped. this means that variable declared with const cannot be redeclarrerd, or ressaighned.


// const num = 4;
// console.log(num)
// num = 6;
// console.log(num);


/// we can use var to redeclare a varibale, and to ressign, so this code will out put david

// var name = 'Jay'
// var name = 'David'
//
// console.log(name);

// var number = 5
//
// if (number ===6){
//     const cardNumber = 123123123123123123123123123123;
// }


