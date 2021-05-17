"use strict"

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
//     Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let languages = users.filter(users => users.languages.length >=3);
console.log(languages);
//     Use .map to create an array of strings where each element is a user's email address

let userEmailAddress = users.map ( user => `${user.email}`)
console.log(userEmailAddress);
// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.


let totalYearsExperience = users.reduce((total, user) => {
    return total + user.yearsOfExperience / users.length
},0)
console.log( totalYearsExperience + " is the average");

function amountYearEXP (item) {
    return item.yearsOfExperience;
}

function sum (prev, next)
{
    return prev + next
}
console.log (users.map(amountYearEXP).reduce(sum)+ " :: this is the total amount of years added with everyone added" +
    " together")

//     Use .reduce to get the longest email from the list of users.

let longestEmailInList = users.reduce((longestEmail, user) =>{
    // console.log(user.email+" Working here!");

    if (user.email.length >= longestEmail.length) {
        longestEmail = user.email;
    }
    return longestEmail

},"")
console.log (longestEmailInList+" :: this is the longest email on the list")
console.log(`${longestEmailInList.length+" counting all the letters up for the longest email"}`)





//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let names = users.reduce(function (accumulator,user){
    accumulator.push(user.name);
    return accumulator;
},[]);

// let namesNicelyJoined = users.reduce (function (accumulator,user,index,usersArray){
//
//     if( index === usersArray.length - 1) {
//         accumulator.push(user.name);
//         let niceJoin = "Your instuctors are: " + niceJoin + '>';
//         return niceJoin
//         eless
//
//     }})



console.log(names)



//bonus



let userLang = users.reduce (function (accumulator,user){
    return accumulator.concat(user.languages);
},[])

console.log(userLang);







