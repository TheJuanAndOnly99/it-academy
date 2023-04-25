// Level 1
// Exercici 1
// Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.
function createPromise(bool) {
  return new Promise((resolve, reject ) => {
    setTimeout(() => {
      if (bool === true) {
        resolve('Result of asynchronous operation');
      } else {
        reject(new Error('Error'));
      }
    }, 1000);
  })
}

createPromise(true)
  .then(res => console.log(res))
  .catch(err => console.log(err.message));

createPromise(false)
  .then(res => console.log(res))
  .catch(err => console.log(err.message));

// Exercici 2 
// Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.

const voterStatus = vote => {
  vote ? console.log("You can vote!") : console.log("Sorry, you cannot vote :(")
}

const checkVoterStatus = (age, callBack) => {
  const canVote = age < 18 ? false : true;
  callBack(canVote);
}

checkVoterStatus(18, voterStatus)
checkVoterStatus(7, voterStatus)

