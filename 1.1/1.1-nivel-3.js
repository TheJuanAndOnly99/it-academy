// Level 3
// Exercici 1
// Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola. Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.

let functions = [];

// Fill the array with functions that count from 0 to 9 in the console
for (let i = 0; i < 10; i++) {
  functions.push(() => {
    for (let j = 0; j < 10; j++) {
      console.log(j);
    }
  });
}

console.log(functions);

// Invoke each function in the array ten times iteratively
for (let i = 0; i < 10; i++) {
    functions[i]();
}

// Exercici 2
// Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari/ària a rebut com a paràmetre.

let mostrarNom = (function(nom) {
  console.log(`El nom de l'usuari/ària es ${nom}`);
})("Juan");
