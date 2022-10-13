//The “extends” keyword

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} stands still.`);
  }
}

let animal = new Animal("My animal");

//Rabbit has access to the methods of Animal
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!

//---------------------------------------------------------------------------------------------------------------------------

//Overriding a method

class Rabbit extends Animal {
  stop() {
    // ...now this will be used for rabbit.stop()
    // instead of stop() from class Animal
  }
}

/** 
 however, we don’t want to totally replace a parent method, but rather to build on top of it to tweak or extend its functionality. We do something in our method, but call the parent method before/after it or in the process.

Classes provide "super" keyword for that.

super.method(...) to call a parent method.
super(...) to call a parent constructor (inside our constructor only).

** super() needs to be called before using "this" keyword in the constructor
*/

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}


//--------------------------------------------------------------------------------------------------------------------------

// Overriding constructor

//It is bit tricky

//Till now Rabbit didnot have its own constructor

//therefore, it looked as follows-

class Rabbit extends Animal {
  // generated for extending classes without own constructors
  constructor(...args) {
    super(...args);
  }
}

//  it basically calls the parent constructor passing it all the arguments. That happens if we don’t write a constructor of our own.

//If we decide to have a constructor in a child class then we need to call the parent constructor before using "this".

class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name); //call parent constructor
    this.earLength = earLength;
  }

  // ...
}

let rabbit = new Rabbit("White Rabbit", 10);


//------------------------------------------------------------------------------------------------------------------------------

//Overriding Data fields

//Edge case
class Animal {
  name = 'animal';

  constructor() {
    alert(this.name); // (*)
  }
}

class Rabbit extends Animal {
  name = 'rabbit';
}

new Animal(); // animal
new Rabbit(); // animal => bcoz constructor of Animal is called.



//NOTE-Arrow functions don’t have their own this or super, so they transparently fit into the surrounding context.

//NOTE- We can inherit from one class only.