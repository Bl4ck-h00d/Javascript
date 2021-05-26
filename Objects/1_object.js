// An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.


// An empty object (“empty cabinet”) can be created using one of two syntaxes:

let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

//-------------------------------------------------------------------- 

// Literals and properties
// We can immediately put some properties into {...} as “key: value” pairs:

let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};

// A property has a key (also known as “name” or “identifier”) before the colon ":" and a value to the right of it.

// In the user object, there are two properties:

// The first property has the name "name" and the value "John".
// The second one has the name "age" and the value 30.


// Property values are accessible using the dot notation:

// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30

// The value can be of any type. Let’s add a boolean one:

user.isAdmin = true;

// To remove a property, we can use delete operator:

delete user.age;

//-------------------------------------------------------------------------------------------------------

// We can also use multiword property names, but then they must be quoted:

let user = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};

// For multiword properties, the dot access doesn’t work:
// this would give a syntax error
// user.likes birds = true

// There’s an alternative “square bracket notation” that works with any string:

let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];


//Note - We can also use "non-negative numbers" as keys 
let user = {
  name: "John",
  age: 30,
  "likes birds": true,  // multiword property name must be quoted
  1.5: "hello"

};

alert(user[1.5]) 

//--------------------------------------------------------------------------------------------------------

// Computed properties / Dynamically setting properties
// We can use square brackets in an object literal, when creating an object. That’s called computed properties.

// For instance:

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"

// The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit variable.

// So, if a visitor enters "apple", bag will become {apple: 5}.

// Essentially, that works the same as:

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// take property name from the fruit variable
bag[fruit] = 5;

//----------------------------------------------------------------------------------------------------------------------

// Property value shorthand
// In real code we often use existing variables as values for property names.

// For instance:

function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John



// Instead of name:name we can just write name, like this:

function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
    // ...
  };
}

//--------------------------------------------------------------------------------------------------

//NOTE- Reading a non-existing property just returns undefined. So we can easily test whether the property exists:

let user = {};

alert( user.noSuchProperty === undefined ); // true means "no such property"

// There’s also a special operator "in" for that.

let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist

//NOTE- Please note that on the left side of in there must be a property name. That’s usually a quoted string.

// If we omit quotes, that means a variable, it should contain the actual name to be tested. For instance:

let user = { age: 30 };

let key = "age";
alert( key in user ); // true, property "age" exists

//------------------------------------------------------------------------------------------------------

//Loop

for (key in object) {
    // executes the body for each key among object properties
  }



//   There are many other kinds of objects in JavaScript:

//   Array to store ordered data collections,
//   Date to store the information about the date and time,
//   Error to store the information about an error.