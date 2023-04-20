// Nivell 3
// Força i captura tants errors com puguis dels nivells 1 i 2.

let employees = [{
  id: 1,
  name: 'Linus Torvalds'
}, {
  id: 2,
  name: 'Bill Gates'
},{
  id: 3,
  name: 'Jeff Bezos'
}];

let salaries = [{
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

const getSalary = (employee) => {  
  return new Promise((resolve, reject) => {
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

const logEmployeeSalary = async (id) => {
  try {
    // Throw error if the parameter passed to the logEmpployeeSalary is not of type 'number' or NaN
    if (typeof id !== 'number' || isNaN(id)) {
      throw new TypeError('Invalid argument: id must be a number');
    }

    const employee = await getEmployee(id);
    const salary = await getSalary(employee);

    console.log(salary);
  } catch (error) {
    console.error(error.message);
  }
};


logEmployeeSalary(true); 
logEmployeeSalary(5);
logEmployeeSalary(null);
logEmployeeSalary(undefined);
logEmployeeSalary("Thomas");
