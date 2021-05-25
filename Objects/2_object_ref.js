// Object references and copying

// One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

// Example-
let message = "Hello!";
let phrase = message;
// As a result we have two independent variables, each one storing the string "Hello!".

// Objects are not like that.

// A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.


// When an object variable is copied, the reference is copied, but the object itself is not duplicated.

let user = { name: "John" };

let admin = user; // copy the reference


// user--------> OBJECT <---------admin

// As you can see, there’s still one object, but now with two variables that reference it.

let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference


//----------------------------------------------------------------------------------------------


// So, copying an object variable creates one more reference to the same object.

// But what if we need to duplicate an object? Create an independent copy, a clone?


//if we really want that, then we need to create a new object and replicate the structure of the existing one by iterating over its properties and copying them on the primitive level.

let user = {
    name: "John",
    age: 30
  };
  
  let clone = {}; // the new empty object
  
  // let's copy all user properties into it
  for (let key in user) {
    clone[key] = user[key];
  }
  
  // now clone is a fully independent object with the same content
  clone.name = "Pete"; // changed the data in it
  
  alert( user.name ); // still John in the original object

//----------------------------------------------------------------

//   we can use the method "Object.assign" for that.

//   The syntax is:
  
//   Object.assign(dest, [src1, src2, src3...])

//   The first argument dest is a target object.

//   Further arguments src1, ..., srcN (can be as many as needed) are source objects.

//   It copies the properties of all source objects src1, ..., srcN into the target dest.

//  In other words, properties of all arguments starting from the second are copied into the first object.

//   The call returns dest.


let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }


let user = {
    name: "John",
    age: 30
  };
  
  let clone = Object.assign({}, user);