
//GETTER & SETTER

// There are two kinds of object properties.

// The first kind is data properties. We already know how to work with them. All properties that we’ve been using until now were data properties.

// The second type of properties is something new. It’s accessor properties. They are essentially functions that execute on getting and setting a value, but look like regular properties to an external code.

let obj = {
    get propName() {
      // getter, the code executed on getting obj.propName
    },
  
    set propName(value) {
      // setter, the code executed on setting obj.propName = value
    }
  };
//   The getter works when obj.propName is read, the setter – when it is assigned.


//Example-

let user = {
    name: "John",
    surname: "Smith"
  };
//   Now we want to add a fullName property, that should be "John Smith". Of course, we don’t want to copy-paste existing information, so we can implement it as an accessor:
  
  //Therefore,
  
let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  
  alert(user.fullName); // John Smith

//   From the outside, an accessor property looks like a regular one. That’s the idea of accessor properties. We don’t call user.fullName as a function, we read it normally: the getter runs behind the scenes.
  
//   As of now, fullName has only a getter. If we attempt to assign user.fullName=, there will be an error:
  
let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    }
  };
  
  // set fullName is executed with the given value.
  user.fullName = "Alice Cooper";
  
  alert(user.name); // Alice
  alert(user.surname); // Cooper