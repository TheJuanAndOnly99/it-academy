// Nivel 1
// Exercici 1
// Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de l'empleat/da i el seu salari, usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.

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
    const employee = employees.find((employee) => employee.id === id);
    const salary = salaries.find((salary) => salary.id === id);

    if (employee && salary) {
      // spread syntax
      resolve({...employee, ...salary});
    } else {
      reject(new Error(`Employee with ID: ${id} not found`));
    }
  })
}

const getSalary = (employee) => {  
  const id = employee.id;
  return new Promise((resolve, reject) => {
    const salaryObj = salaries.find(( salary => salary.id === id))
    if (salaryObj !== undefined) {
      let employeeSalary = {...salaryObj, ...employee}
      resolve(`Employee: ${employeeSalary.name} has salary: ${employeeSalary.salary}`);
    } else {
      reject(new Error(`Employee ${employee.name} not found`))
    }
  })
  
}

const logEmployeeSalary = async (id) => {
  try {
    const employee = await getEmployee(id);
    const salary = await getSalary(employee);
    console.log(salary);
  } catch (error) {
    console.error(error.message);
  }
};

logEmployeeSalary(1); 
logEmployeeSalary(5); 


// Exercici 2
// Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

async function asyncFunction() {
  const res = await wait();
  console.log(res);
}

function wait() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Resolve after 2 seconds');
    }, 2000);
  });
}

asyncFunction();