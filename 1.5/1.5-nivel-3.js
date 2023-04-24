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
  } catch (err) {
    console.log(err.message);
  }
};

const filePath = './1.5/1.5-nivel-1.js';
const fileName = filePath.split('/').pop().split('.').slice(0, -1).join('.');

createEncodedFiles(filePath)


// Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.


const encryptFile = (filePath, algorithm, key, iv) => {
  return new Promise((resolve, reject) => {
    const input = fs.createReadStream(filePath);
    const output = fs.createWriteStream(filePath + '.enc');

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
    console.log(err.message);
  }
};

const hexFilePath = './1.5/1.5-nivel-1-encoded-hex.txt';
const base64FilePath = './1.5/1.5-nivel-1-encoded-base64.txt';

// Encryption settings
const algorithm = 'aes-192-cbc';
const password = process.env.PASSWORD;
const key = crypto.scryptSync(password, 'salt', 24);
const iv = Buffer.alloc(16, 0);

encryptEncodedFiles(hexFilePath, base64FilePath, algorithm, key, iv);

// Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.


// Inclou un README amb instruccions per a l'execució de cada part.
