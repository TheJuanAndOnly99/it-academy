// Nivell 2
// Exercici 1
// Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.
const { spawn } = require('child_process');

// Recursive functions are functions that call themselves
function recursivelyPrintMessage(n) {
  if (n <= 0) {
    return;
  }
  console.log("Message " + n);
  setTimeout(function() {
    recursivelyPrintMessage(n - 1);
  }, 1000);
}

recursivelyPrintMessage(5);

// Exercici 2
// Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador utilizant Node Child Processes.

function listDirContents(path) {
  // spawn a new child process and execute the ls command with the -a flag and the provided path as arguments
  const ls = spawn('ls', ['-a', path]);

  // Attach an event handler function to the stdout stream of a spawned child process that listens for the emitted 'data' event
  ls.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  ls.stderr.on('error', (err) => {
    console.error(`Error: ${err.message}`);
  });

  // Listen for close event from the child process
  ls.on('close', (code) => {
    if (code === 0) {
      console.log(`Listed contents of directory: "${currentDirectory}" successfully.`);
    } else {
      console.error(`Failed to list contents of directory: "${currentDirectory}". Failed with exit code ${code}`);
    }
  });
}

const currentDirectory = process.cwd();
listDirContents(currentDirectory);

