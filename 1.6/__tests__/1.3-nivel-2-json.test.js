// Refès els exercicis Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()) de manera que accedeixin a les dades d'un fitxer extern JSON. Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.

const { getEmployee, getSalary } = require('../../1.3/1.3-nivel-2');

jest.mock('../../1.3/data.json', () => ({
  employees: [
    {
      id: 1,
      name: 'Danny Davis'
    },
    {
      id: 2,
      name: 'Patrick Star'
    },
    {
      id: 3,
      name: 'Bob Sponge'
    }
  ],
  salaries: [
    {
      id: 1,
      salary: 40
    },
    {
      id: 2,
      salary: 100
    },
    {
      id: 3,
      salary: 20
    }
  ]
}));

describe('test using a mock data.json', () => {
  it('should get the correct employee object using data from the mocked JSON file', async () => {
    const id = 2;
    const expected = {
      id: 2,
      name: 'Patrick Star'
    };
    const result = await getEmployee(id);
    expect(result).toEqual(expected);
  });

  it('should get the correct salary object using data from the mocked JSON file', async () => {
    const id = 1;
    const employee = await getEmployee(id)
    const expected = {
      id: 1,
      salary: 40,
      name: 'Danny Davis'
    };
    const result = await getSalary(employee);
    expect(result).toEqual(expected);
  });
});
