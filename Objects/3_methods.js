// Methods

// Here we’ve just used a Function Expression to create a function and assign it to the property user.sayHi of the object.

let user = {
    name: "John",
    age: 30
  };
  
  user.sayHi = function() {
    alert("Hello!");
  };
  
  user.sayHi(); // Hello!

//   A function that is a property of an object is called its method.

//Shorthand

// these objects do the same

user = {
    sayHi: function() {
      alert("Hello");
    }
  };
  
  // method shorthand looks better, right?
//   we can omit "function" and just write sayHi().

  user = {
    sayHi() { // same as "sayHi: function(){...}"
      alert("Hello");
    }
  };

//------------------------------------------------------------------------------

// “this” in methods

// It’s common that an object method needs to access the information stored in the object to do its job.

// For instance, the code inside user.sayHi() may need the name of the user.

// To access the object, a method can use the this keyword.

let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      // "this" is the "current object"
      alert(this.name);
    }
  
  };
  
  user.sayHi(); // John
//   Here during the execution of user.sayHi(), the "value" of "this" will be "user".

//IMPORTANT-
// Technically, it’s also possible to access the object without this, by referencing it via the outer variable:

let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert(user.name); // "user" instead of "this"
  }

};
// …But such code is unreliable. If we decide to copy user to another variable, e.g. admin = user and overwrite user with something else, then it will access the wrong object.




// The value of this is evaluated during the run-time, depending on the context.

// For instance, here the same function is assigned to two different objects and has different “this” in the calls:

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

//----------------------------------------------------------------------------------------------------------


// Calling without an object: this == undefined

// We can even call the function without an object at all:

function sayHi() {
  alert(this);
}

sayHi(); // undefined

// In this case "this" is "undefined" in "strict mode". If we try to access this.name, there will be an error.

// In "non-strict" mode the "value" of "this" in such case will be the "global object" (window in a browser). This is a historical behavior that "use strict" fixes.

// Usually such call is a programming error. If there’s this inside a function, it expects to be called in an object context.

//--------------------------------------------------------------------------

// Arrow functions have no “this”

// Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.

// For instance, here arrow() uses this from the outer user.sayHi() method:

let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya

