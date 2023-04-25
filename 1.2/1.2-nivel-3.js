// Level 3
// Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.

// Las clases abstractas se pueden definir como clases que no se pueden instanciar.
// No hay una palabra clave "abstract" en JavaScript para declarar una clase como una clase abstracta.

class Person  {
  constructor(fName, lName, age) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    
  if (this.constructor === Person) {
    throw new Error('You can not create an instance of an Abstract Class.'); 
    }
  }
    
  sayName(){
    throw new Error('Abstract method sayName() must be overridden in subclasses.');
  }

  check(){
    throw new Error('Abstract method check() must be overridden in subclasses.');
  }
}

class Teacher extends Person {
  constructor(fName, lName, age) {
    super(fName, lName, age)
  }

  sayName(){
    console.log(`Hello my name is ${this.fName}`)
  }

  check(){
    console.log(this instanceof Person)
    console.log(this instanceof Teacher)
  }
}

function createPersonObject(fName, lName, age) {
  return new Teacher(fName, lName, age)
}

const patrick = createPersonObject('Patrick', 'Star', 24);
const bob = createPersonObject('Spongebob', 'Squarepants', 22);

patrick.check();
patrick.sayName();

bob.check(); // returns true for both the Person & Teacher class
bob.sayName();


