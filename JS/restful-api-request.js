let options = {
    method: 'GET',
    headers: {
        'Content-Type' : 'application/json',
    }
}

fetch ("https://chivalrous-ember-toucan.glitch.me/books")
.then (resp => resp.json())
// .then(data => console.log(data))
.then(books =>{
    let htmlStr = "";
    for (let book of books) {
        htmlStr += `<h1>${book.title}</h1><p>by: ${book.author.firstName} ${book.author.lastName}</p>`
    }
    $("#container").html(htmlStr)
});
fetch("https://chivalrous-ember-toucan.glitch.me/books/1")
    .then(resp => resp.json())
    .then(book => console.log(book))


const getBooks = () => {
    fetch("https://chivalrous-ember-toucan.glitch.me/books")
        .then(resp => resp.json())
        .then(books => {
            console.log(books);
            let htmlStr = " ";
            for (let book of books) {
                htmlStr += `<h1>${book.title}</h1><p>by: ${book.author.firstName} ${book.author.lastName}</p>`
            }
            $("#container").html(htmlStr);
        });
}

/// post request

/// exammple if were to add in as an object
let newBook = {
    "title" : "Percy Jackson & The Lightning Thief",
    "author" : {
        "firstName" : "Rick",
        "lastName" : "Riordan"
    }
};



let postOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
}

$("#addPercy").click(()=> {
    fetch("https://chivalrous-ember-toucan.glitch.me/books", postOptions)
        .then(getBooks)
});

// Put
let putThis ={
    "title" : "Percy Jackson & The Lightning Thief",
        "author" : {
        "firstName" : "Rick",
            "lastName" : "Riordan"
    }
}

let putOptions = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(putThis)
}


fetch("https://chivalrous-ember-toucan.glitch.me/books/6", putOptions).then(getBooks)



fetch("https://chivalrous-ember-toucan.glitch.me/books", postOptions)
    .then(resp => resp.json())
    .then(book => console.log(book))


// PATCH


let patchThis = {
    "title": "Percy Jackson & The Titan's Curse",
    "author": {
        "firstName": "Trick",
        "lastName": "Triordan"
    }
}

let patchOptions = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(patchThis)
}

fetch("https://chivalrous-ember-toucan.glitch.me/books/7", patchOptions).then(getBooks);

getBooks();

// delete

let deleteOptions = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
    }
};

$("#deleteBTN").click (() => {
    fetch("https://chivalrous-ember-toucan.glitch.me/books")


})


