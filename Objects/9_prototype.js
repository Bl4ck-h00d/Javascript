// All JavaScript objects inherit properties and methods from a prototype.

// Prototypes are the mechanism by which JavaScript objects inherit features from one another. 

// JavaScript is often described as a prototype-based language — to provide inheritance, objects can have a prototype object, which acts as a template object that it inherits methods and properties from.

//An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. This is often referred to as a prototype chain,

//The JS engines considers everything as an object (even a function).

//Prototypes are nothing but an object that JS engine attaches to our objects so that we can inherit some properties and methods.

//if we create an array 

arr =['Rohan', 'blackhat']

//go to console 
//  arr.  (On writing this we see a list of properties and methods which  we didnt create like "push" )
//Actually it inherits properties and methods from the prototype object (in case of arrays it is Array.prototype)

//Array.prototype is a standard object for arrays 

arr.__proto__ //this gives attached prototype object
//Here, it is same as
Array.prototype //as arr is an array



// All JavaScript objects inherit properties and methods from a prototype:

// Date objects inherit from Date.prototype
// Array objects inherit from Array.prototype
// Person objects inherit from Person.prototype


//So we know JS engine attaches a prototype object to all objects so even Array.prototype has a prototype..

arr.__proto__.__proto__
//OR
Array.prototype.__proto__ 

//This is called Object prototype or Object.prototype (since Array.prototype in itself is an object)

//Further

arr.__proto__.__proto__.__proto__ //This gives NULL

// Note- THIS IS CALLED PROTOTYPE CHAINING

// https://www.youtube.com/watch?v=wstwjQ1yqWQ

//---------------------------------------------------------------------------------------------------------------------------

//IMPORTANT

// The JavaScript prototype property also allows you to add new methods to objects constructors:

//Now we can add new properties in constructor function

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.nationality = "English";

//   Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects.


//Prototypal Inheritance 
//Example------------------------

let obj1= { 
    name: "Rohan",
    city: "Raigarh",
    getIntro: function() {
        console.log(this.name + " from " + this.city);
    }
}

let obj2= { 
    name: "blackHat"
}

//obj2 is inheriting properties for obj1---> this is called prototypal inheritance.
obj2.__proto__=obj1 //We modified obj2.__proto__ to obj1

obj2.name //blackHat

obj2.city //Raigarh
//It first checks the property named "city" in the top level object if not found then it checks in prototype

obj1.getIntro() // Rohan from Raigarh

obj2.getIntro() // blackHat from Raigarh ("this" is binded to obj2)