// Level 2
// Exercici 1
// Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

createPerson = name => ({ name: name });

const person1 = createPerson('Juan');

console.log(person1);

// Exercici 2
// Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.

class Persona {
  constructor(nom) {
    this.nom = nom;
  }
  
  dirNom() {
    console.log(`Hola, em dic ${this.nom}!`);
  }
}

// Create object 
const juan = new Persona("Juan");

// Call dirNom() method on object juan
juan.dirNom();
