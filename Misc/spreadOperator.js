// Rest parameters and spread syntax

//Rest parameters

// A function can be called with any number of arguments, no matter how it is defined.

// Like here:

function sum(a, b) {
  return a + b;
}

alert( sum(1, 2, 3, 4, 5) );

// There will be no error because of “excessive” arguments. But of course in the result only the first two will be counted.


//Therefore to include n no. of arguments

// parameters can be included in the function definition by using three dots ... followed by the name of the array that will contain them. The dots literally mean “gather the remaining parameters into an array”.

function sumAll(...args) { // args is the name for the array
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
  }
  
  alert( sumAll(1) ); // 1
  alert( sumAll(1, 2) ); // 3
  alert( sumAll(1, 2, 3) ); // 6



//   We can choose to get the first parameters as variables, and gather only the rest.

//   Here the first two arguments go into variables and the rest go into titles array:
  
  function showName(firstName, lastName, ...titles) {
    alert( firstName + ' ' + lastName ); // Julius Caesar
  
    // the rest go into titles array
    // i.e. titles = ["Consul", "Imperator"]
    alert( titles[0] ); // Consul
    alert( titles[1] ); // Imperator
    alert( titles.length ); // 2
  }
  
  showName("Julius", "Caesar", "Consul", "Imperator");




//   The rest parameters must be at the end

function f(arg1, ...rest, arg2) { // arg2 after ...rest ?!
    // error
  }

//   The ...rest must always be last.






//---------------------------------------------------------------------------------------------------------------------------------

//Spread operator

// We’ve just seen how to get an array from the list of parameters.

// But sometimes we need to do exactly the reverse. i.e, list of parameters from array

alert( Math.max(3, 5, 1) ); // 5
// Now let’s say we have an array [3, 5, 1]. How do we call Math.max with it?

// Passing it “as is” won’t work, because Math.max expects a list of numeric arguments, not a single array:

// And surely we can’t manually list items in the code Math.max(arr[0], arr[1], arr[2]), because we may be unsure how many there are. As our script executes, there could be a lot, or there could be none. And that would get ugly.

// Spread syntax to the rescue! It looks similar to rest parameters, also using ..., but does quite the opposite.

// When ...arr is used in the function call, it “expands” an "iterable object" arr into the list of arguments.

// For Math.max:

let arr = [3, 5, 1];

alert( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)

// We also can pass multiple iterables this way:

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(...arr1, ...arr2) ); // 8

// We can even combine the spread syntax with normal values:

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25

// Also, the spread syntax can be used to merge arrays:

let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr2];

alert(merged); // 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)


//NOTE-In the examples above we used an array to demonstrate the spread syntax, but any iterable will do.


//---------------------------------------------------------------------------------------------------------------------


// Copy an Object

// Remember when we talked about Object.assign() in the past?

// It is possible to do the same thing with the spread syntax.

let obj = { a: 1, b: 2, c: 3 };

let objCopy = { ...obj }; // spread the object into a list of parameters
                          // then return the result in a new object

// do the objects have the same contents?
alert(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// are the objects equal?
alert(obj === objCopy); // false (not same reference)

// modifying our initial object does not modify the copy:
obj.d = 4;
alert(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
alert(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}

//-------------------------
//IMPORTANT NOTE


//If we have nested objects/arrays then it will just copy the reference of that nested object
// e.g

let user ={ 
    name: 'John',
    hobbies: ["cooking", "sports"]
}

let newUser = { ...user}

user.hobbies.push("coding");

// newUser.hobbies will also change

//That is bcoz it just copies upper level of key value pairs. It doesnt deep copy

