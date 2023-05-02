// Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode. dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i testeja que funcionen.
const { Person } = require('../../1.2/1.2-nivel-2');

jest.mock('../../1.2/1.2-nivel-2.js');

describe('Person', () => {
  it('should create a new person with the given name that can call the sayName function', () => {
    const person = new Person('Alice');

    expect(Person).toHaveBeenCalledWith('Alice');

    person.sayName();

    expect(person.sayName).toHaveBeenCalled();
  });
});
