// Level 1
// Crea una funció que mostri per consola el nom d'usuari/ària en invocar-la passant-li el nom com a paràmetre.

const person = {
  firstName: "Juan",
  lastName: "Estrella",
  userName: "TheJuanAndOnly",
}

function showUsername(name) {
  if (name == person.firstName) {
    console.log("This persons username is: " + person.userName);
  }
}

showUsername("Juan");

