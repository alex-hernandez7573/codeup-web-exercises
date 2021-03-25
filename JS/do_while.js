"use strict"
// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random()*50)+50
// This expression will generate a random number between 1 and 5
var customerCones = Math.floor(Math.random()*5)+1;

console.log (allCones);
console.log (customerCones);
//expected output
//5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones
    do{ customerCones = Math.floor(Math.random()*5)+1;
        if (customerCones > allCones) {
    console.log  ("I cannot sell you "+customerCones+ " because I only have "+ allCones);
    } else {
    console.log("I can sell you "+customerCones+" because I have "+allCones);
            allCones -= customerCones;
            }
    }while (allCones > 0) {
        console.log ("Yay! I sold them all! ");
            }