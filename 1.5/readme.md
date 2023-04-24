# Readme

## Description
This code contains a set of functions to encode, encrypt, and decrypt files in Node.js using the built-in `fs` module and the `crypto` module. The code demonstrates how to create encoded files in hexadecimal and base64 formats from an input file, encrypt the encoded files using the AES-192-CBC algorithm, and then decrypt and decode the encrypted files back to their original format.

## Installation
1. Install Node.js on your machine, if not already installed.
2. Clone or download the code from the repository.
3. Navigate to the directory containing the code in your terminal or command prompt.
4. Install the required dependencies by running the following command: `npm install dotenv`

## Usage
1. Modify (or create) the `.env` file in the root of the repository with your desired password for encryption. Make sure to keep the password secure as it will be used for encryption and decryption.
2. Open the `1.5-nivel-3.js` file in a code editor.
3. Update the `filePath` variable with the path to the input file that you want to encode, encrypt, and decrypt.
4. Run the code using the command `node 1.5-nivel-3.js` in your terminal or command prompt.
    - The first time the code is run it will create two new files encoded in Hex and Base64 respectively.
    - The second time the code is run it will encrypt the encoded files using the AES-192-CBC algorithm.
    - The third time the code is run it will decrypt and decode the files.
