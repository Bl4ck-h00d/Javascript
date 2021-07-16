// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

// The constructor syntax for a promise object is:

let promise = new Promise(executor);
// The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically. 

//Executor function takes ==2 function as arguments== => resolve() and reject() (These are callbacks that we are attaching to the object)

let promise = new Promise(function(resolve, reject) {
    // executor (the producing code, "singer")
  });


//   When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

// resolve(value) — if the job is finished successfully, with result value.
// reject(error) — if an error has occurred, error is the error object.

//Promise runs automatically when it is constructed. 


let promiseObj = new Promise ((resolve, reject) => {

    setTimeout(() => {

        //Do some computatiion
        //A result is generated--> value

        resolve(value);

    },1000);
})

// The executor is called automatically and immediately (by new Promise).

// The executor receives two arguments: resolve and reject. These functions are pre-defined by the JavaScript engine, so we don’t need to create them. ===We should "only call one of them" when ready.===

// After one second of “processing” the executor calls resolve(value) to produce the result. 


//------------------------------------------------------------------------------------------------
//NOTE 
// There can be only a single result or an error
// The executor should call only one resolve or one reject. Any state change is final.

// All further calls of resolve and reject are ignored:

//--------------------------------------------------------------------------------------------------------------------------------


// Create a Promise Object ---> Executor---> Asynchronous operation---> Result----> RESOLVE --> State of Promise: Fulfilled    ------
//                                                                         |                                                        |---> Promise Produced
//                                                                         ------> REJECT --> State of Promise: Rejected/error  ----



// Now we need to consume the Produced Promise


// Consumers: then, catch

// .then() function

promiseObj.then(
    function(result) { /* handle a successful result */ },
    function(error) { /* handle an error */ }
  );

  // 1st argument: function for successful result
  // 2nd argument: function for error result/rejection

  //If we are only interested in resolved/successful promise then pass only 1 argument

  promiseObj.then((value) => {
      console.log(value);
  })


 // .catch() function
 
 //If we are only interested in error result 

 promiseObj.catch((error) =>{
     console.log(error);
 })




 //Simply

 let promiseObj = new Promise ((resolve, reject) => {

    setTimeout(() => {

        //Do some computatiion
        //A result is generated--> value

        resolve(value);

    },1000);
})


promiseObj
.then((value) => {
    console.log(value);
})
.catch((error) =>{
    console.log(error);
})

//or

promiseObj
.then((value) => {
    console.log(value);
}, (error) => {
    console.log(error);
});





// Ex--

let a=1;
let b=2;


//here, we could have passed 2 callbacks into the given function rather we just returned the promise
function doSomething() {

    return new Promise ((resolve, reject) => {

        if(a==b)
        {
            resolve(a+b);
        }
        else
        {
            reject("Not equal");
        }
    })
}

doSomething()
.then(value => {
    console.log("The sum is: " + value);
})
.catch((error) => {
    console.log(error);
})






//Chaining

doSomething()
.then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback);


// If there's an exception, the browser will look down the chain for .catch() handlers