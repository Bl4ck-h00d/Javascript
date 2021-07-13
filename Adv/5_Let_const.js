 //==Let & Const== are hoisted differently from ==Var==

//We know that we can access variables (var) before even initializing them, that is bcoz memory is allocated to them even before a single line is executed. (Hoisting)

//BUT, 

console.log(b); //undefined (this works fine)

console.log(a); //ref error => cant access this variable until it is initialized with a value.

let a=10;

console.log(a); //this works fine

var b=100;
 
//Behind the scenes,

//When we use debugger(before 1st line), we see that memory of b and a both are allocated but b is attached to global object whereas, a is attached to script object. 

// variables declared using let and const are also allocated memory before execution but they are stored in some other memory space than global space. and that space can be accessed only when these variables are initialized.
  
//Temporal Deadzone-
// It is the time since when this let/const var is hoisted and till it is initialized with some value.

//IMP

let a=10;
var b=100;

// 'var' declared variables are attached to global/window object

window.b; //100
this.b; //100

//but, let/const variables are stored in different memory space 

window.a; //undefined (not present in window object)


//Let & Const are stricter than var

//Redeclaration of "let" is not allowed in ==same scope==

let a=10;
let a=100; //syntax Error

var b=10;
var b=100; //works fine

//const has to be initialized at the same time of declaration;

const b;
b=100; //Error

const b=100; //fine
 