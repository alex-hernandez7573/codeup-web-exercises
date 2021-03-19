"using strict ";


// console.log ("Hello from external JavaScript");

//alert ("Welcome to my website");

//var favColor = prompt("what's your favorite color?");

//console.log ("User entered: " + favColor);

// PART 3.1
// var rentalDays = prompt("How many days did you have the movie for?");
// var totalAmountDue = (rentalDays)*3;
// alert("Customer has had movie for "+rentalDays+" and owes " + totalAmountDue +"$");
//
// var workingHours = prompt("How many hours do you work?");
// var googleRate = 400*workingHours;
// var amazonRate = 380*workingHours;
// var faceBookRate = 350*workingHours;
//
// alert("You've worked " + workingHours +" you'd make "+ googleRate+ "$ at google and "+ amazonRate + "$ at amazon and " +faceBookRate+ "$ at Facebook.");


//PART 3.2
// var classSize = 10;
// var studentSignedUp=5
// var studentPrompt = prompt(" How many students do you wish to add? Currently there is "+studentSignedUp+" students signed up");
// var newClassSize = studentSignedUp + studentPrompt;
// var classFull = true;
// var cantReg = (classSize < newClassSize);



// PART 3.3
var classHasRoom = confirm ("Is there room in the class?");
var noScheduleConflict = confirm("aer you sure you can take this 8am?");
alert("you can take class" + (classHasRoom && noScheduleConflict));

//PART 3.4

var isOffValid = confirm("food coupon still valid?");
var isPremiumMemb =  confirm("Does customer have their customer card?");
var totalPurchase = parseFloat("How much for food?");

alert("Customer qualifies for coupon: " +(((isPremiumMemb || totalPurchase >= 2)&& isOffValid) && totalPurchase > 0) + ".");























