// Nivel 1
// Exercici 1
// Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de l'empleat/da i el seu salari, usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.
const {getEmployee, getSalary} = require('../1.3/1.3-nivel-2');

const logEmployeeSalary = async (id) => {
  try {
    const employee = await getEmployee(id);
    const salary = await getSalary(employee);

    console.log(salary);
  } catch (error) {
    console.error(error.message);
  }
};

// logEmployeeSalary(1); 
// logEmployeeSalary(15); 


// Exercici 2
// Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

async function asyncFunction() {
  const res = await wait();
  console.log(res);
  return res;
}

function wait() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Resolve after 2 seconds');
    }, 2000);
  });
}

// asyncFunction();

module.exports.logEmployeeSalary = logEmployeeSalary;
module.exports.asyncFunction = asyncFunction;
module.exports.wait = wait;