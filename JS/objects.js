(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Alexander",
        middleName: "Xavier",
        lastName: "Hernandez"
    }
    document.write(person.firstName+"<br>");
    document.write(person.middleName+"<br>");
    document.write(person.lastName+"<br>");
    console.log (person.firstName);
    console.log (person.middleName);
    console.log (person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return "<b>Hello from "+this.firstName+" "+this.middleName+" "+this.lastName+ "!";
    }
    document.write(person.sayHello());
    console.log (person.sayHello())

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function (thisShopper){
        if (thisShopper.amount >= 200) {
            var discountedTotal = thisShopper.amount - (thisShopper.amount * .12);
            console.log ("|Name: "+thisShopper.name+"| Amount before discount: "+thisShopper.amount+"| Discount Total: "+discountedTotal+" |");
        } else  {
            console.log ("Did not exceed or equal of 200. No Discount applied");
            console.log ("|Name: "+thisShopper.name+ "| Amount Total: "+ thisShopper.amount+"|");
        }
    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var booksArray = [ {
        title:"Mass Effect Revelation",
            author: {
                firstName:"Drew",
                lastName:"Karpyshyn"}
            },
        {title:"Dishonored: The Corroded Man",
            author: {
                firstName:"Adam",
                lastName:"Christopher"}
            },
        {title:"Atlas Shrugged",
            author: {
                firstName:"Ayn",
                lastName:"Rand"}
            },
        {title:"Nineteen Eighty-Four",
            author: {
                firstName:"George",
                lastName:"Orwell"}
            },
        {title:"Brave New World",
            author: {
                firstName:"Aldous",
                lastName:"Huxley"}
            },
        {title:"Fahrenheit 451",
            author: {
                firstName:"Ray",
                lastName:"Bradbury"}
        }
                    ];

    console.log(booksArray[0].title);
    //console.log(typeof (booksArray[0].title));
    console.log(booksArray[0].author.firstName);
    console.log(booksArray[0].author.lastName);
    console.log(booksArray[1].title);
    console.log(booksArray[1].author.firstName);
    console.log(booksArray[1].author.lastName);
    console.log(booksArray[2].title);
    console.log(booksArray[2].author.firstName);
    console.log(booksArray[2].author.lastName);
    console.log(booksArray[3].title);
    console.log(booksArray[3].author.firstName);
    console.log(booksArray[3].author.lastName);
    console.log(booksArray[4].title);
    console.log(booksArray[4].author.firstName);
    console.log(booksArray[4].author.lastName);
    console.log(booksArray[5].title);
    console.log(booksArray[5].author.firstName);
    console.log(booksArray[5].author.lastName);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

        booksArray.forEach( function (bookInformation){
            console.log("Book # "+(booksArray.indexOf(bookInformation)+1));
            console.log("Title: "+ bookInformation.title);
            console.log("Author: "+bookInformation.author.lastName+" ,"+bookInformation.author.firstName);
            console.log("---");

        });




    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook (title, firstName, lastName) {
        booksArray.push ({
            title: title,
            author: {
                firstName: firstName,                lastName: lastName

            }
        });
    }

    createBook("Moby Dick","Herman","Melville");

    function thisBookInfo (thisBook) {
        console.log("Book # -New Book- ");
        console.log("Title: "+ thisBook.title);
        console.log("Author: "+thisBook.author.lastName+" ,"+thisBook.author.firstName);
        console.log("---");
    }
    thisBookInfo(booksArray[6]);


    console.log ("hello I need to see if git is still working");
    console.log (1+1+3);




})();
