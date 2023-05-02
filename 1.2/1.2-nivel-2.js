// Level 2
// Exercici 1
// Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

const createPerson = name => ({ name: name });

const person1 = createPerson('Juan');

console.log(person1);

// Exercici 2
// Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.

class Person {
  constructor(name) {
    this.name = name;
  }
  
  sayName() {
    console.log(`Hola, em dic ${this.name}!`);
  }
}

// Create object 
const juan = new Person("Juan");

// Call dirNom() method on object juan
juan.sayName();

module.exports.Person = Person;
