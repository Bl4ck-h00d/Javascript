//Static properties and methods

class User {
  static property = "Hi there";

  static staticMethod() {
    alert(this === User);
  }
}

User.staticMethod(); // true


//Static methods aren’t available for individual objects
// Static methods are callable on classes, not on individual objects.

//Static properties and methods are inherited.

//We cant use static data members in non-static methods.