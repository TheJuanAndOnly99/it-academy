// Level 2
// Exercici 1
// Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id.

const { employees, salaries } = require('./data.json');

const getEmployee = (id) => {
  return new Promise((resolve, reject) => {
    // Throw error if the parameter passed to the getEmployee function is not of type 'number' or NaN
    if (typeof id !== 'number' || isNaN(id)) {
      throw new TypeError('Invalid argument: id must be a number');
    }
    console.log(employees);
    try {
      const employee = employees.find((employee) => employee.id === id);
      if (employee) {
        // spread syntax
        resolve({...employee});
      } else {
        reject(new Error(`Employee with ID: ${id} not found`));
      } 
    } catch (error) {
      reject(error);
    }
  })
}

// Exercici 2
// Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.

const getSalary = (employee) => {  
  return new Promise((resolve, reject) => {
    // Throw error if the parameter passed to the getSalary function is not an object with an id of type number and a name of type string.
    if (typeof employee.id !== 'number' && typeof employee.name !== 'string') {
      throw new TypeError('Invalid argument: id must be a number and name must be a string');
    }
    try {
      const id = employee.id;
      const salaryObj = salaries.find((salary => salary.id === id));

      if (salaryObj !== undefined) {
        let employeeSalaryObj = {...salaryObj, ...employee};
        resolve(employeeSalaryObj);
      } else {
        reject(new Error(`Employee ${employee.name} not found`));
      }
    } catch (error) {
      reject(error.message);
    }
  })
}

// Exercici 3
// Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises de manera que es retorni per la consola el nom de l'empleat/da i el seu salari.

function showEmployeeWithSalary(id) {
  getEmployee(id)
    .then(getSalary)
      .then(res => console.log(`Employee: ${res.name} has salary: $${res.salary}`))
      .catch(err => console.log(err.message))
    .catch(err => console.log(err.message));
}
  
// showEmployeeWithSalary(1);

// export functions
module.exports.getEmployee = getEmployee;
module.exports.getSalary = getSalary;