// What is this?
// The JavaScript this keyword refers to the object it belongs to.

// It has different values depending on where it is used:

// In a method, this refers to the owner object.

// Alone, this refers to the global object.

// In a function, this refers to the global object.

// In a function, in strict mode, this is undefined.

// In an event, this refers to the element that received the event.

// Methods like call(), and apply() can refer this to any object.

//---------------------------------------------------------------------------------------

// “this” Refers to a Global Object

// By default, the execution context for an execution is global — which means if a code is being executed as part of a simple function call, simply defined, then this refers to a global object.

// The window object is the global object in the case of the browser. And in a NodeJS environment, a special object called global will be the value of this.

// but JavaScript in strict mode does not allow default binding.So, when used in a function, in strict mode, this is undefined.


// 1- Default Binding:
// It’s the most common case of function calls the standalone function invocation like below example.

var myFunction = function() {
    console.log(this);
 }
 
 myFunction();    // Window 


//  As you see above because we call myfunction() from the Window context so this will refer to Window object .


//-----------------------------------------------------------------------------

// “this” Refers to a New Instance

// When a function is invoked with the "new" keyword, then the "function" is known as a "constructor" function and returns a new instance. In such cases, the value of this refers to a newly created instance.

// For example:

function Person(fn, ln) {
    this.first_name = fn;
    this.last_name = ln;
this.displayName = function() {
        console.log(`Name: ${this.first_name} ${this.last_name}`);
    }
}
let person = new Person("John", "Reed");
person.displayName(); // Prints Name: John Reed
let person2 = new Person("Paul", "Adams");
person2.displayName(); // Prints Name: Paul Adams



// “this” in object context
function bike() {
  console.log(this.name);
}

var obj1 = { name: "Pulsar", bike: bike };
var obj2 = { name: "Gixxer", bike: bike };

obj1.bike();      // "Pulsar"
obj2.bike();      // "Gixxer"

// here this will refer to object instance.


//------------------------------------------------------------------------------------------------


// Explicit Function Binding

// The call() and apply() methods are predefined JavaScript methods.

// They can both be used to call an object method with another object as argument.

// In the example below, when calling person1.fullName with person2 as argument, this will refer to person2, even if it is a method of person1:

var person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person2 = {
  firstName:"John",
  lastName: "Doe",
}
person1.fullName.call(person2);  // Will return "John Doe"


// Summary-

// So now you can figure out the value of this by following these simple rules:


// By default, this refers to a global object, which is global in the case of NodeJS and a window object in the case of a browser


// When a method is called as a property of an object, then this refers to the parent object

// When a function is called with the new operator, then this refers to the newly created instance

// When a function is called using the call and apply methods, then this refers to the value passed as the first argument of the call or apply method


//----------------------------------------------------------------

//"this" in arrow functions

// Arrow functions do not bind their own this, instead, they inherit the one from the parent scope, which is called "lexical scoping". 

// This makes arrow functions to be a great choice in some scenarios but a very bad one in others

// You don’t rebind the value of this when you use an arrow function inside of another function:

//value of this is inherited from the parent scope.

