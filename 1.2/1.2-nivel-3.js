// Level 3
// Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.

// Las clases abstractas se pueden definir como clases que no se pueden instanciar.
// No hay una palabra clave "abstract" en JavaScript para declarar una clase como una clase abstracta.

function createPerson(fName, lName, age) {
  class Person  {
    constructor(fName, lName, age) {
      this.fName = fName;
      this.lName = lName;
      this.age = age;
      
    if (this.constructor === Person) {
      throw new Error('You can not create an instance of Abstract Class'); 
      }
    }
      
    sayName(){
      throw new Error('Abstract method makeSound() must be overridden in subclasses.');
    }
  }

  class Teacher extends Person {
    constructor(fName, lName, age) {
        super(fName, lName, age)
    }

    sayName(){
      console.log(`Hello my name is ${this.fName}`)
    }
  }

  return new Teacher(fName, lName, age);
  
}

const david = createPerson("Dave", "Stevenson", 25);
const steve = createPerson("Steve", "Davidson", 22);

console.log(david);
david.sayName();