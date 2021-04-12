"use strict"

console.log ("testing...");

/* # 1 Write a function, filterNumbers() that takes in an array of
 mixed data types and returns an array of only the numbers type in ascending order.
Example input: ["fred", true, 5, 3] Example output: [3, 5]


*/

var mixedDataTypes = [{Alice: name, age : 12},{David: name, age : 22},{Alex: name, age: 45}];

function filterAgeAscending () {
    mixedDataTypes.sort(name.age);
    console.log(mixedDataTypes)
}
filterAgeAscending();



// space
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
//createCharcter(prompt("enter name"),prompt("enter armor rating"),prompt("enter magic rating"));

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

// # 3
//Write a function, washCars() that takes in a
// array of car objects
// and sets the boolean properties of isDirty to false.

const carWashArray = [
    {
        make : "Ford",
        color : "White",
        year : "2019",
        isDirty : true
    },{
        make : "Volvo",
        color : "grey",
        year : "2012",
        isDirty : true
    },{
        make : "Honda",
        color : "blue",
        year : "2012",
        isDirty : true
    },{
        make : "Mazda",
        color : "red",
        year : "2017",
        isDirty : false,
    }
];

console.log ("Checking if dirty, if so change to clean")
function carWashFunction (index) {
    carWashArray.forEach((make, i) => make.isDirty = index === i);
}
carWashFunction(0-4)
console.log(carWashArray);

/* #4 Write a function, adminList() that takes in an array of
 user objects and returns a count of
all admins based on the isAdmin property. Refactor to return an
 array of admin-only user emails.
 Refactor again to return an array of user objects that are admins.*/


const adminArray = [{
    isAdmin: true,
    email: 'david@email.com'
},{
    isAdmin: true,
    email: 'alex@mail.com'
},{
    isAdmin: false,
    email: 'sebas@email.com'
}];

// function showOnlyAdmin () {
//     adminArray.forEach();
// }
// showOnlyAdmin()




