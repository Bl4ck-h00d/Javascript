// Losing “this”

// Once a method is passed somewhere separately from the object – this is lost.

let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
  };
  
  setTimeout(user.sayHi, 1000); // Hello, undefined!
//   As we can see, the output shows not “John” as this.firstName, but undefined!
  
//   That’s because setTimeout got the function user.sayHi, separately from the object. The last line can be rewritten as:
let f = user.sayHi;
setTimeout(f, 1000); // lost user context

//In this case this==window 


//Solution--------
// Functions provide a built-in method bind that allows to fix this.

// The basic syntax is:

// more complex syntax will come a little later
let boundFunc = func.bind(context);

// The result of func.bind(context) is a special function-like “exotic object”, that is callable as function and transparently passes the call to func setting this=context.

// In other words, calling boundFunc is like func with fixed this.

// For instance, here funcUser passes a call to func with this=user:

let user = {
  firstName: "John"
};

function func() {
  alert(this.firstName);
}

let funcUser = func.bind(user);
funcUser(); // John

//Checkout call.js for more 