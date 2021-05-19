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


const wait= ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));




function getGithubUsernames(userName) {
    return fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': 'PROMISE_TOKEN'}})
        .then(response => response.json()
            .then(data => {
        console.log(data);
        let lastPush;
        for (let event of data) {
            if(event.type === "PushEvent"){
                lastPush = new Date(event.created_at);
                break;
            }
        }
    }))
}
getGithubUsernames("alex-hernandez7573")



