// Nivell 1
// Exercici 1
// Crea una funció que, en executar-la, escrigui una frase en un fitxer.
const fs = require('fs');
const zlib = require('zlib');
const stream = require('stream')

function writeToFile(string) {
  fs.writeFile("./1.5/test.js", string, (err) => {
    if (err) throw err;
    console.log('File has been written successfully!');
  });
}

writeToFile("Testing");

// Exercici 2
// Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

function readFile(file) {
  fs.readFile(file, (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  })
}

const filePath = "./1.5/test.js"

readFile(filePath);

// Exercici 3
// Crea una funció que comprimeixi el fitxer del nivell 1.

function compressFile(input, output) {
  const gzip = zlib.createGzip();

  stream.pipeline(input, gzip, output, (err) => {
    if (err) {
      console.error('An error occurred:', err);
    } else {
      console.log(`the file: ${input.path} has been compressed successfully!`)
    }
  });
}

const input = fs.createReadStream('./1.5/test.js');
const output = fs.createWriteStream('./1.5/test.gz');
compressFile(input, output);

