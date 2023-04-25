// Level 2
// Exercici 1
// Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id.

const employees = [{
  id: 1,
  name: 'Linus Torvalds'
}, {
  id: 2,
  name: 'Bill Gates'
},{
  id: 3,
  name: 'Jeff Bezos'
}];

const salaries = [{
  id: 1,
  salary: 4000
}, {
  id: 2,
  salary: 1000
}, {
  id: 3,
  salary: 2000
}];

const getEmployee = (id) => {
  return new Promise((resolve, reject) => {
    // Throw error if the parameter passed to the getEmployee function is not of type 'number' or NaN
    if (typeof id !== 'number' || isNaN(id)) {
      throw new TypeError('Invalid argument: id must be a number');
    }
    try {
      const employee = employees.find((employee) => employee.id === id);
      const salary = salaries.find((salary) => salary.id === id);
  
      if (employee && salary) {
        // spread syntax
        resolve({...employee, ...salary});
      } else {
        reject(new Error(`Employee with ID: ${id} not found`));
      } 
    } catch (error) {
      reject(error);
    }
  })
}

getEmployee(1)
  .then(res => console.log(res))
  .catch(err => console.log(err.message));

getEmployee(3)
  .then(res => console.log(res))
  .catch(err => console.log(err.message));

getEmployee(6)
  .then(res => console.log(res))
  .catch(err => console.log(err.message));

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
        let employeeSalary = {...salaryObj, ...employee};
        resolve(`Employee: ${employeeSalary.name} has salary: ${employeeSalary.salary}`);
      } else {
        reject(new Error(`Employee ${employee.name} not found`));
      }
    } catch (error) {
      reject(error);
    }
  })
}

getSalary({id: 3, name: 'Jeff Bezos'})
  .then(res => console.log(res))
  .catch(err => console.log(err.message));

getSalary({id: 5, name: 'Beff Jezos'})
  .then(res => console.log(res))
  .catch(err => console.log(err.message));

getSalary({id: 'Beff Jezos', name: 5})
  .then(res => console.log(res))
  .catch(err => console.log(err.message));

// Exercici 3
// Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises de manera que es retorni per la consola el nom de l'empleat/da i el seu salari.

getEmployee(1)
  .then(res => getSalary(res))
    .then(res => console.log(res))
    .catch(err => console.log(err.message))
  .catch(err => console.log(err.message));

getEmployee(7)
  .then(res => getSalary(res))
    .then(res => console.log(res))
    .catch(err => console.log(err.message))
  .catch(err => console.log(err.message));

// export functions
module.exports.getEmployee = getEmployee;
module.exports.getSalary = getSalary;