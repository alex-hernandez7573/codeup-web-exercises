"use strict"


console.log("Test")


Promise.resolve('one').then((one) => {
    console.log(one);
    return 'two';
}).then((two) => {
    console.log(two);
    return 'three';
}).then((three) => {
    console.log(three);
});



// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.

// fetch('https://api.github.com/users').then( response => {
//     response.json().then( users => {
//         users.forEach( user => {
//             // do something with each user object...
//             console.log(user);
//         });
//     });
// });
//


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
delay(1000).then(() => console.log('You\'ll see this after 1 second'));
delay(3000).then(() => console.log('You\'ll see this after 3 seconds'));




function getGithubUsernames(userName) {
    return fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': 'PROMISE_TOKEN'}})
.then(response => response.json().then(data => {
        console.log(data);
        var latestPush = data[0].created_at
        let date = new Date(latestPush);

        console.log(date.toString());
    }))
}
getGithubUsernames("alex-hernandez7573")



