// A class is like a blueprint — a description of the object to be created. 

// In object-oriented programming, a class is an extensible program-code-template for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods).

// We know, "new function" can help with that.

// But in the modern JavaScript, there’s a more advanced “class” construct, that introduces great new features which are useful for object-oriented programming.

// A JavaScript class is not an object.

// It is a template for JavaScript objects.



// Syntax: 

// class MyClass {
//     // class methods
//     constructor() { ... }
//     method1() { ... }
//     method2() { ... }
//     method3() { ... }
//     ...
//   }

//   Then use new MyClass() to create a new object with all the listed methods.
  
//   The constructor() method is called automatically by new, so we can initialize the object there.
  
class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      alert(this.name);
    }
  
  }
  
  // Usage:
  let user = new User("John");
  user.sayHi();

  //No comma between class methods


  //------------------------------------------------------------------------------------

//   The Constructor Method

// The constructor method is a special method:

// It has to have the exact name "constructor"
// It is executed automatically when a new object is created
// It is used to initialize object properties
// If you do not define a constructor method, JavaScript will add an empty constructor method.

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);

//----------------------------------------------------------------------------------------------------------------------


class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

// What class User {...} construct really does is:

// -> Creates a function named User, that becomes the result of the class declaration. The function code is taken from the constructor method (assumed empty if we don’t write such method).

// -> Stores class methods, such as sayHi, in User.prototype.
