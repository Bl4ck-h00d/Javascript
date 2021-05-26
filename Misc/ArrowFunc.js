let func = (arg1, arg2, ... argN) => expression

// In other words, it’s the shorter version of:

let func = function(arg1, arg2, ... argN) {
  return expression;
};

// If we have only one argument, then parentheses around parameters can be omitted, making that even shorter
let double = n => n * 2;

// If there are no arguments, parentheses will be empty (but they should be present):

let sayHi = () => alert("Hello!");

sayHi();


// if we want to return an object using Arrow function we should wrap it in braces like:

let AF = () => ({name:"jack"})