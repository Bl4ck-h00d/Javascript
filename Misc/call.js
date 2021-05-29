
//Call()

let obj1 = { 
    firstName: "Rohan",
    lastName: "Jha",
    printFullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
}

let obj2 = {
    firstName: "John",
    lastName: "Doe"
}

//function borrowing

//We want to use printFullName() for obj2

obj1.printFullName.call(obj2) //call(ref) ref-> with we want "this" to be binded with
//John Doe

//func.call(context, arg1, arg2, ...)
// It runs func providing the first argument as this, and the next as the arguments.

// To put it simply, these two calls do almost the same:

// func(1, 2, 3);
// func.call(obj, 1, 2, 3)
// They both call func with arguments 1, 2 and 3. The only difference is that func.call also sets this to obj.


//We generally dont borrow function from an object

//Rather

let obj1 = { 
    firstName: "Rohan",
    lastName: "Jha",
}

function printFullName(homeTown) {
    console.log(this.firstName + " " + this.lastName + " " + homeTown);
}

let obj2 = {
    firstName: "John",
    lastName: "Doe"
}

printFullName.call(obj2, "San Fran")// John Doe San Fran
printFullName.call(obj1, "Raigarh")//Rohan Jha Raigarh


//Apply()

//Only difference is how we pass the arguments
func.apply(obj, [1, 2, 3]);


//Bind()

//It basically creates a copy of the function and binds "this" to given object so that function can be called latter

let printMyName=printFullName.bind(obj2, "San Fran") //Not called yet
printMyName();