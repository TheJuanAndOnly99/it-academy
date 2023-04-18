// Nivel 3
// Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.
const module = require ('./1.3-nivel-2');

module.getEmployee(6)
  .then(res => getSalary(res))
    .then(res => console.log(res))
    .catch(err => console.log(err.message))
  .catch(err => console.log(err.message));
