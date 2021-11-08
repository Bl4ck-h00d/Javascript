//What is a block?
//Block is defined in as set/group of lines of code enlosed in {}

{
    let a=10;
    console.log(a);
}

// We use block to use multiple lines of code where it expects single statement.

//ex-

if(true) console.log("hfjkshad"); //Here, if needs a single statement, but if we want to use multiple lines then we use block

if(true)
{
    let a=10;
    console.log(a);
}

//Block Scope -> It is the accessiblity of variables and functions in a block.

{
    var a=10;
    let b=20;
    const c=30;
}

//Behind the scenes, 
// 'a' is stored in global memory and is attached to global object.
// 'b' and 'c' are stored in separate memory( which is reserved for this particular block) and are attached to block object.
 
// => Therefore, let/const are also called ==block scoped==


// Shadowing in JavaScript

var a =100;
{
    var a =10;
    console.log(a); //10
}
console.log(a); //10


//In the above example, variable 'a' which is outside the block scope is "Shadowed" by the 'a' in the Block and also this 'a' modifies the value of outter 'a' variable as they are pointing to same memory space.

//Shadowing works in similar way in a function (arrow func too)

// NOTE
// "var" has function level scope not block level scope.

var a =100;
console.log(a); //100

function task() {
    var a=200;
    console.log(a); //200  <--------

    if(true) {
        var a=300;  // <--------------  both "a" are same (no block scope)
        console.log(a); //300
    }

    console.log(a); //300
}

console.log(a); //100