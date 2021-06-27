//Array Methods

arr.push(...items) //– adds items to the end,
arr.pop() //– extracts an item from the end,
arr.shift() //– extracts an item from the beginning,
arr.unshift(...items) //– adds items to the beginning.


//splice
// The arr.splice method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.

// The syntax is:

arr.splice(start, deleteCount, elem1, ... elemN)

// It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.

//Example-

let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

alert( arr ); // ["I", "JavaScript"]

//-------------------------------------------------------------------

let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");

alert( arr ) // now ["Let's", "dance", "right", "now"]

//--------------------------------------------------------------------------------

// splice returns the array of removed elements:

let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr.splice(0, 2);

alert( removed ); // "I", "study" <-- array of removed elements

//------------------------------------------------------------------------------

let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

alert( arr ); // "I", "study", "complex", "language", "JavaScript"

//-----------------------------------------------------------------------------------

//Slice 


let arr = ["t", "e", "s", "t"];

alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

alert( arr.slice(-2) ); // s,t (copy from -2 till the end)


//----------------------------------------------------------------------------------------------

//Concat


let arr = [1, 2];

// create an array from: arr and [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6


//----------------------------------------------------------------------------------------------------------------------------

//IMPORTANT:

// Iterate: forEach
// The arr.forEach method allows to run a function for every element of the array.

// The syntax:

arr.forEach(function(item, index, array) {
    // ... do something with item
  });


  ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
  });


//---------------------------------------------------------------------------------------------------------------------------------

// find & filter 

// Imagine we have an array of objects. How do we find "an" object with the specific condition?

// Here the arr.find(fn) method comes in handy.

// The syntax is:

let result = arr.find(function(item, index, array) {
    // if true is returned, item is returned and iteration is stopped
    // for falsy scenario returns undefined
  });

//If it returns true, the search is stopped, the item is returned. If nothing found, undefined is returned.

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  let user = users.find(item => item.id == 1);
  
  alert(user.name); // John


//   filter

// The find method looks for a single (first) element that makes the function return true.

// If there may be many, we can use arr.filter(fn).

let results = arr.filter(function(item, index, array) {
    // if true item is pushed to results and the iteration continues
    // returns empty array if nothing found
  });


  //Ex-

  let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  // returns array of the first two users
  let someUsers = users.filter(item => item.id < 3);
  
  alert(someUsers.length); // 2


//-------------------------------------------------------------------------------------------------------------------------------

// A cheat sheet of array methods:

// To add/remove elements:

// push(...items) – adds items to the end,
// pop() – extracts an item from the end,
// shift() – extracts an item from the beginning,
// unshift(...items) – adds items to the beginning.
// splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
// slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
// concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
// To search among elements:

// indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
// includes(value) – returns true if the array has value, otherwise false.

// findIndex is like find, but returns the index instead of a value.
// To iterate over elements:



// IMPORTANT------------------------------------------------
//func---->  function(item, index, array){}


// find/filter(func) – filter elements through the function, return first/all values that make it return true.
// forEach(func) – calls func for every element, does not return anything.
// To transform the array:
// map(func) – creates a new array from results of calling func for every element.
// sort(func) – sorts the array in-place, then returns it.
// ---------------------------------------------------------------------

// reverse() – reverses the array in-place, then returns it.
// split/join – convert a string to array and back.