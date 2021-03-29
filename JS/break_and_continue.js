"use strict"

var userNum = 0;

while (userNum % 2 === 0)
{
    userNum = +prompt("enter a number between 1 and 50");
}
for (var i = 1; i < 50; i+=2){
    if(i === userNum){
        console.log("Skipping "+userNum+" the number you picked.");
        continue
    }
    console.log("The odd number is "+i);
}