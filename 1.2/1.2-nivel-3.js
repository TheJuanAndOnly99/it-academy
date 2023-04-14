// Level 3
// Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.

function createPerson(fName, lName, age) {
  class Person  {
    constructor(fName, lName, age) {
      this.fName = fName;
      this.lName = lName;
      this.age = age;
    }
  }

  let person = new Person(fName, lName, age);
  console.log(person);
}

createPerson("Dave", "Stevenson", 25);
createPerson("Steve", "Davidson", 22);
