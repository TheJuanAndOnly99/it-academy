// Nivel 1
// Exercici 1
// Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de l'empleat/da i el seu salari, usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.
const getEmployeeInfo = require ('../1.3/1.3-nivel-2');

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

const logEmployeeSalary = async (id) => {
  try {
    const employee = await getEmployeeInfo.getEmployee(id);
    const salary = await getEmployeeInfo.getSalary(employee);
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