// Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2

const { getEmployee, getSalary} = require('../../1.3/1.3-nivel-2');

describe('getEmployee', () => {
  test('should return an object', () => {
    expect(typeof getEmployee(1)).toBe('object');
  });

  test('should return an object that exists in the "employees" object array', async () => {
    const employee = await getEmployee(1);
    expect(employee).toEqual(expect.objectContaining({
      id: 1,
      name: 'Linus Torvalds'
    }));
  });

  test('should return an error if passed an id that is not in the employees object array ', async () => {
    expect.assertions(1);
    try {
      await getEmployee(4);
    } catch (error) {
      expect(error).toEqual(expect.any(Error));
    }
  });

  test('should return an error if passed an arguement that are not of type "number" ', async () => {
    expect.assertions(1);
    try {
      await getEmployee("test");
    } catch (error) {
      expect(error).toEqual(expect.any(Error));
    }
  });
  
  test('should return an error if passed no arguments ', async () => {
    expect.assertions(1);
    try {
      await getEmployee();
    } catch (error) {
      expect(error).toEqual(expect.any(Error));
    }
  }); 
});


describe('getSalary', () => {
  test('should return an object', () => {
    expect(typeof getSalary({id: 1, name: "Linus Torvalds"})).toBe('object');
  });

  test('should return an object that exists in the "Salarys" object array', async () => {
    const Salary = await getSalary({id: 1, name: "Linus Torvalds"});
    expect(Salary).toEqual(expect.objectContaining({
      id: 1,
      salary: 4000
    }));
  });

  test('should return an error if passed an id that is not in the Salarys object array ', async () => {
    expect.assertions(1);
    try {
      await getSalary({id: 5, name: "Tinus Lorvalds"});
    } catch (error) {
      expect(error).toEqual(expect.any(Error));
    }
  });

  test('should return an error if passed an arguement that are not of type object ', async () => {
    expect.assertions(1);
    try {
      await getSalary("test");
    } catch (error) {
      expect(error).toEqual(expect.any(Error));
    }
  });
  
  test('should return an error if passed no arguments ', async () => {
    expect.assertions(1);
    try {
      await getSalary();
    } catch (error) {
      expect(error).toEqual(expect.any(Error));
    }
  }); 
});