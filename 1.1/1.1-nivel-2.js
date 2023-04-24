// Level 2
// Exercici 1
// Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge.

const firstName = "Juan"
const lastName = "Estrella"

console.log(`Hello my name is ${firstName} ${lastName}`)

function showFullName() {
  console.log(`Hola el meu nom és ${firstName} y el meu cognome es ${lastName}`)
}

showFullName();

// Exercici 1 V2 

function showFullNameV2(firstName, lastName) {
  const firstNameUpperCase = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  const lastNameUpperCase = lastName.charAt(0).toUpperCase() + lastName.slice(1);
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
