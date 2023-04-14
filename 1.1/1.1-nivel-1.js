// Level 1
// Crea una funció que mostri per consola el nom d'usuari/ària en invocar-la passant-li el nom com a paràmetre.

function showUsername(name) {
  console.log(name)
}

showUsername("juan");

const person = {
  firstName: "Juan",
  lastName: "Estrella",
  userName: "TheJuanAndOnly",
}

function showUsernameV2(name) {
  if (name == person.firstName) {
    console.log("This persons username is: " + person.userName);
  }
}

showUsernameV2("Juan");

