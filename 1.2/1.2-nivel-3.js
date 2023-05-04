// Level 3
// Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.

// Las clases abstractas se pueden definir como clases que no se pueden instanciar.
// No hay una palabra clave "abstract" en JavaScript para declarar una clase como una clase abstracta.

class Person  {
  constructor(firstName) {
    this.firstName = firstName;
    
  if (this.constructor === Person) {
    throw new Error('You can not create an instance of an Abstract Class.'); 
    }
  }

}

function createPersonObject(firstName) {
  const human = Object.create(Person.prototype);
  human.firstName = firstName;
  return human;
}

const patrick = createPersonObject('Patrick');
patrick instanceof Person
const bob = createPersonObject('Spongebob');
bob instanceof Person

module.exports.Person = Person;
module.exports.createPersonObject = createPersonObject;





