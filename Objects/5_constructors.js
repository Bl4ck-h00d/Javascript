//Constructors

// The regular {...} syntax allows to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.

// That can be done using constructor functions and the "new" operator.

// Constructor function
// Constructor functions technically are regular functions. There are two conventions though:

// 1. They are named with capital letter first. (Just a convention)
// 2. They should be executed only with "new" operator.

function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  let user = new User("Jack");

  

//  ** By the way, we can omit parentheses after new, if it has no arguments:
        let user = new User; // <-- no parentheses
        // same as
        let user = new User();


//When a function is invoked with the "new" keyword, then the "function" is known as a "constructor" function and returns a new instance. In such cases, the value of this refers to a newly created instance.

//   When a function is executed with "new", it does the following steps:

//   A new empty object is created and assigned to "this".
//   The function body executes. Usually it modifies this, adds new properties to it.
//   The value of this is returned.


function User(name) {
    // this = {};  (implicitly)
  
    // add properties to this
    this.name = name;
    this.isAdmin = false;
  
    // return this;  (implicitly)
  }


  
// NOTE
// Any function can be run with new, and it will execute the algorithm above. The “capital letter first” is a common agreement, to make it clear that a function is to be run with new.


//--------------------------------------------------------------------------------------------------------------------------------------------------------




// If we have many lines of code all about creation of a "single" complex object, we can wrap them in constructor function, like this:

let user = new function() {
  this.name = "John";
  this.isAdmin = false;

  // ...other code for user creation
  // maybe complex logic and statements
  // local variables etc
};
// The constructor "can’t" be called again, because it is not saved anywhere, just created and called. So this trick aims to encapsulate the code that constructs the single object, without future reuse.

//-----------------------------------------------------------------------------------------------------------------------------------

//IMPORTANT

// Return from constructors

// Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.

// But if there is a return statement, then the rule is simple:

// If return is called with an object, then the object is returned instead of this.
// If return is called with a primitive, it’s ignored.
// In other words, return with an object returns that object, in all other cases "this" is returned.

// For instance, here return "overrides" "this" by returning an object:

function BigUser() {

    this.name = "John";
  
    return { name: "Godzilla" };  // <-- returns this object
  }
  
  alert( new BigUser().name );  // Godzilla, got that object


  //--------------------------------------------------------------------------------------------------------------------------------

  //We can not add a new property to an existing object constructor:

  function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }

  Person.nationality = "English";// -> WRONG

  // To add a new property to a constructor, you must add it to the constructor function: