// Exercici 1
// Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const dotenv = require('dotenv');

dotenv.config(); // Load the .env file

// Function to encode a file to hexadecimal
const encodeToHex = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) reject(err);
      else {
        const hexEncoded = data.toString('hex');
        const encodedFileName = fileName + '-encoded-hex.txt'
        const hexFilePath = path.join(path.dirname(filePath), encodedFileName);
        fs.writeFile(hexFilePath, hexEncoded, (err) => {
          if (err) reject(err);
          else resolve(hexFilePath);
        });
      }
    });
  });
};

// Function to encode a file to base64
const encodeToBase64 = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) reject(err);
      else {
        const base64Encoded = data.toString('base64');
        const encodedFileName = fileName + '-encoded-base64.txt'
        const base64FilePath = path.join(path.dirname(filePath), encodedFileName);
        fs.writeFile(base64FilePath, base64Encoded, (err) => {
          if (err) reject(err);
          else resolve(base64FilePath);
        });
      }
    });
  });
};

// Function to create encoded files in hexadecimal and base64
const createEncodedFiles = async (filePath) => {
  try {
    await fs.promises.access(filePath, fs.constants.F_OK);
    const hexFilePath = await encodeToHex(filePath);
    if (hexFilePath) {
      console.log(`File encoded in hexadecimal: ${hexFilePath}`);
    }
    const base64FilePath = await encodeToBase64(filePath);
    if (base64FilePath) {
      console.log(`File encoded in base64: ${base64FilePath}`);;
    }
    await fs.promises.unlink(filePath); // Delete the original file
  } catch (err) {
    console.log(`File ${filePath} does not exist`);
  }
};

const filePath = './1.5/test.js';
const fileName = filePath.split('/').pop().split('.').slice(0, -1).join('.');
console.log(fileName);
createEncodedFiles(filePath)


// Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.

// Encryption settings
const algorithm = 'aes-192-cbc';
const password = process.env.PASSWORD;
const key = crypto.scryptSync(password, 'salt', 24);
const iv = Buffer.alloc(16, 0);

const encryptFile = (filePath, algorithm, key, iv) => {
  return new Promise((resolve, reject) => {
    const fileName = filePath.split(/\.txt$/)[0];
    const input = fs.createReadStream(filePath);
    const output = fs.createWriteStream(fileName + '.enc');

    const cipher = crypto.createCipheriv(algorithm, key, iv);
    input.pipe(cipher).pipe(output);

    output.on('finish', () => {
      fs.unlink(filePath, (err) => {
        if (err) reject(err);
        else resolve(output.path);
      });
    });

    cipher.on('error', (err) => {
      reject(err);
    });
  });
};

const hexFilePath = `./1.5/${fileName}-encoded-hex.txt`;
const base64FilePath = `./1.5/${fileName}-encoded-base64.txt`;

const encryptEncodedFiles = async (hexFilePath, base64FilePath, algorithm, key, iv) => {
  try {
    await fs.promises.access(hexFilePath, fs.constants.F_OK);
    await fs.promises.access(base64FilePath, fs.constants.F_OK);

    const encryptedHexFilePath = await encryptFile(hexFilePath, algorithm, key, iv);
    if (encryptedHexFilePath) {
      console.log(`File: ${encryptedHexFilePath} encrypted!`);
    }

    const encryptedBase64FilePath = await encryptFile(base64FilePath, algorithm, key, iv);
    if (encryptedBase64FilePath) {
      console.log(`File ${encryptedBase64FilePath} encrypted!`);
    }
  } catch (err) {
    console.log('Encoded files not found, cannot encrypt');
  }
};

encryptEncodedFiles(hexFilePath, base64FilePath, algorithm, key, iv);

// Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.

const decryptFile = (filePath, algorithm, key, iv) => {
  return new Promise((resolve, reject) => {
    const fileName = filePath.split(/\.enc$/)[0];
    const input = fs.createReadStream(filePath);
    const output = fs.createWriteStream(fileName + '.txt');

    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    input.pipe(decipher).pipe(output);

    output.on('finish', () => {
      fs.unlink(filePath, (err) => {
        if (err) reject(err);
        else resolve(output.path);
      });
    });

    decipher.on('error', (err) => {
      reject(err);
    });
  });
};

// Decode Hex file
const inputFilePathHex = `./1.5/${fileName}-encoded-hex.txt`; 
const outputFilePathHex = `./1.5/${fileName}-hex-decoded.js`;

function decodeHexFile(inputFilePathHex, outputFilePathHex) {
  fs.access(inputFilePathHex, fs.constants.F_OK, (err) => {
    if (err) {
      console.log(`File ${inputFilePathHex} does not exist`);
    } else {
      fs.readFile(inputFilePathHex, (err, data) => {
        if (err) throw err;
      
        // Decode hexadecimal data
        const decodedData = Buffer.from(data.toString(), 'hex');
      
        fs.writeFile(outputFilePathHex, decodedData, (err) => {
          if (err) throw err;
          console.log('File successfully decoded and written to', outputFilePathHex);
        });
      
        // Delete input file
        fs.unlink(inputFilePathHex, (err) => {
          if (err) throw err;
          console.log('Input file', inputFilePathHex, 'deleted successfully');
        });
      });
    }
  });
}

// Decode base64 file
const inputFilePathBase64 = `./1.5/${fileName}-encoded-base64.txt`; 
const outputFilePathBase64 = `./1.5/${fileName}-base64-decoded.js`;

function decodeBase64File(inputFilePathBase64, outputFilePathBase64) {
  fs.access(inputFilePathBase64, fs.constants.F_OK, (err) => {
    if (err) {
      console.log(`File ${inputFilePathBase64} does not exist`);
    } else {
      fs.readFile(inputFilePathBase64, (err, data) => {
        if (err) throw err;
      
       // Decode base64 data
        const decodedData = Buffer.from(data.toString(), 'base64');
      
        fs.writeFile(outputFilePathBase64, decodedData, (err) => {
          if (err) throw err;
          console.log('File successfully decoded and written to', outputFilePathBase64);
        });
      
       // Delete input file
        fs.unlink(inputFilePathBase64, (err) => {
          if (err) throw err;
          console.log('Input file', inputFilePathBase64, 'deleted successfully');
        });
      });
    }
  });
}  

const decryptEncodedFiles = async (encryptedHexFilePath, encryptedBase64FilePath, algorithm, key, iv) => {
  try {
    await fs.promises.access(encryptedHexFilePath, fs.constants.F_OK);
    await fs.promises.access(encryptedBase64FilePath, fs.constants.F_OK);

    const decryptedHexFilePath = await decryptFile(encryptedHexFilePath, algorithm, key, iv);
    if (decryptedHexFilePath) {
      decodeHexFile(inputFilePathHex, outputFilePathHex);
      console.log(`File: ${decryptedHexFilePath} decrypted!`);
    }

    const decryptedBase64FilePath = await decryptFile(encryptedBase64FilePath, algorithm, key, iv);
    if (decryptedBase64FilePath) {
      decodeBase64File(inputFilePathBase64, outputFilePathBase64);
      console.log(`File: ${decryptedBase64FilePath} decrypted!`);
    }
  } catch (err) {
    console.log('Encoded files not found, cannot decrypt');
  }
};

const encryptedHexFilePath = `./1.5/${fileName}-encoded-hex.enc`;
const encryptedBase64FilePath = `./1.5/${fileName}-encoded-base64.enc`;

decryptEncodedFiles(encryptedHexFilePath, encryptedBase64FilePath, algorithm, key, iv);

// Inclou un README amb instruccions per a l'execució de cada part.
