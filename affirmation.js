// Researched mdn for api calls, and promises
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

//2
fetch("https://www.affirmations.dev")
    //3
    .then(res => res.json())
    //4
    .then((result) => {
        //5
        console.log(result);
    }),
    //6
    (error) => {
        console.log(error);
    }

/*
    Thinking
    1. The program gets a random affirmation from an api and prints its out to the console.

    2. We make an api call to the affirmation api using fetch to get us an object containing an affirmation.

    3. "Res" contains the returned object from the api call if successful. We use the json() method to convert our json object into an object whose data can be accessed by javascript.

    4. We pass the result of our api call into an arrow function with a parameter of "result", so we can start accessing the data inside our object.

    5. We console.log the affirmation inside our "result" object.

    6. If our api call was not fulfilled an error would be logged to the console.
*/