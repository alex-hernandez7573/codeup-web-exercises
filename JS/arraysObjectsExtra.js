"use strict"

console.log ("testing...");

/* # 1 Write a function, filterNumbers() that takes in an array of
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

// # 2
//Write a function, getOlder() that takes in array of dog objects
// and increases the value of each object's age property by 1.

var dogArray = [{
    name : "maggie",
    breed : "golden",
    age : 12,
},{
    name : "zoe",
    breed : "golden",
    age : 8,
},{
    name : "junie",
    breed : "Mut",
    age : 9,
},{
    name : "dutch",
    breed : "chow",
    age : 18,
}];

dogArray.forEach(function (doggyInfo){
    console.log ("---");
    console.log ("name: "+doggyInfo.name);
    console.log ("age: "+parseInt(doggyInfo.age+1));
    console.log ("breed: "+doggyInfo.breed);
    console.log ("---");

});



