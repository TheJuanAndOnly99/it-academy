// Level 2
// Exercici 1
// Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge.

let nom = "Juan"
let cognom = "Estrella"

console.log(`Hello my name is ${nom} ${cognom}`)

const fName = "Juan"
const lName = "Estrella"

function showFullName() {
  console.log(`Hola el meu nom és ${fName} y el meu cognome es ${lName}`)
}

showFullName();

// Exercici 1 V2 

function showFullNameV2(firstName, lastName) {
  let firstNameUpperCase = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  let lastNameUpperCase = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  console.log(`Hola el meu nom és ${firstNameUpperCase} y el meu cognome es ${lastNameUpperCase}`)
}

showFullNameV2("juan", "estrella");
showFullNameV2("john", "star");

// Exercici 2
// Invoca una funció que retorni un valor des de dins d'una template literal.

function showNum(x) {
  console.log(`The number is ${x}`)
}

showNum(10);

//V2

function getCountry(city, country) {
  return `${city} is the capital of ${country}`;
}

const travel = `${getCountry("Paris", "France")}, if you go there you should visit the Louvre`;

console.log(travel); 