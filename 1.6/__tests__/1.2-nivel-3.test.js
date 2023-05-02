// Verifica mitjançant tests la creació d'instàncies de la classe abstracta de l'exercici Classes & Arrow Functions N3 E1.
const { Person, Teacher } = require('../../1.2/1.2-nivel-3');

describe('Person', () => {
  it('should throw an error when instantiated directly', () => {
    expect(() => new Person('Patrick', 'Star', 21)).toThrowError('You can not create an instance of an Abstract Class.');
  });

  it('should allow creation of instances through a subclass', () => {
    const teacher = new Teacher('Bob', 'Sponge', 22);

    expect(teacher).toBeInstanceOf(Person);
    expect(teacher).toBeInstanceOf(Teacher);
    expect(teacher.fName).toBe('Bob');
    expect(teacher.lName).toBe('Sponge');
    expect(teacher.age).toBe(22);
  });
});
