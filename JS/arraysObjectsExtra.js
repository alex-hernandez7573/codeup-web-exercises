"use strict"

console.log ("testing...");

/*Write a function, filterNumbers() that takes in an array of
 mixed data types and returns an array of only the numbers type in ascencding order.

Example input: ["fred", true, 5, 3] Example output: [3, 5]
* */
var charcterArray =[{
    firstName: "test",
        stats: {
            armorRating: 0,
            magicRating: 0
        }
}];

function createCharcter (firstName, armorRating , magicRating) {
    charcterArray.push({
    firstName : firstName,
        stats : {
        armorRating : armorRating,
            magicRating : magicRating
        }
    });
}
// from function my charcter creator function, Im able to prompt the user to input basic stats of armor and magic ratings
createCharcter(prompt("enter name"),prompt("enter armor rating"),prompt("enter magic rating"));
