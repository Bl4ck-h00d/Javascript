// Destructuring assignment
// The two most used data structures in JavaScript are Object and Array.

// Objects allow us to create a single entity that stores data items by key.
// Arrays allow us to gather data items into an ordered list.
// Although, when we pass those to a function, it may need not an object/array as a whole. It may need individual pieces.

// Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.

// Array destructuring

// we have an array with the name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname);  // Smith


// It’s just a shorter way to write:

// let [firstName, surname] = arr;
let firstName = arr[0];
let surname = arr[1];

//------------------------------------------------------------

// Ignore elements using commas
// Unwanted elements of the array can also be thrown away via an extra comma:

// second element is not needed(see comma)

let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( title ); // Consul
// In the code above, the second element of the array is skipped, the third one is assigned to title, and the rest of the array items is also skipped (as there are no variables for them).

//-------------------------------------------------------------------------------

// we can use it with any iterable, not only arrays:

let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);


//----------------------------------------------------------------------------

// We can use it with destructuring to loop over keys-and-values of an object:

let user = {
  name: "John",
  age: 30
};

// loop over keys-and-values
for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, then age:30
}

//--------------------------------------------------------------------------------

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest is array of items, starting from the 3rd one
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2

//----------------------------------------------------------------------------------

//Default values 

let [name = "Guest", surname = "Anonymous"] = ["Julius"];

alert(name);    // Julius (from array)
alert(surname); // Anonymous (default used)

//------------------------------------------------------------------------------------------------------------------------------------------------------------



// Object destructuring

let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  let {title, width, height} = options;
  
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200

//Note
// Properties options.title, options.width and options.height are assigned to the corresponding variables.

// The order does not matter. This works too:

// changed the order in let {...}
let {height, width, title} = { title: "Menu", height: 200, width: 100 }




// If we want to assign a property to a variable with another name, for instance, make options.width go into the variable named w, then we can set the variable name using a colon:

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200


//----------------------------------------------------------------------------


// For potentially missing properties we can set default values using "=", like this:

let options = {
  title: "Menu"
};

let {width = 100, height = 200, title} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200


//-----------------------------------------------------------------------------------

//Rest parameters

let options = {
    title: "Menu",
    height: 200,
    width: 100
  };
  
  // title = property named title
  // rest = object with the rest of properties
  let {title, ...rest} = options;
  
  // now title="Menu", rest={height: 200, width: 100}
  alert(rest.height);  // 200
  alert(rest.width);   // 100

//------------------------------------------------------------------------------------------

//Nested Destructuring

let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  
  // destructuring assignment split in multiple lines for clarity
  let {
    size: { // put size here
      width,
      height
    },
    items: [item1, item2], // assign items here
    title = "Menu" // not present in the object (default value is used)
  } = options;
  
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200
  alert(item1);  // Cake
  alert(item2);  // Donut
  
//   All properties of options object except extra that is absent in the left part, are assigned to corresponding variables:
  
  