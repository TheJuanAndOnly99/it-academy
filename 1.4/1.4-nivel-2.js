// Nivell 2
// Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.

function doubleAfter2Seconds(num) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num * 2);
    }, 2000);
  });
}

doubleAfter2Seconds(2).then(res => console.log(res));

// Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.

async function sumDoubles(x, y, z) {
  const doubleX = await doubleAfter2Seconds(x);
  const doubleY = await doubleAfter2Seconds(y);
  const doubleZ = await doubleAfter2Seconds(z);
  return doubleX + doubleY + doubleZ;
}

sumDoubles(1, 2, 3).then(res => console.log(res));

// V2 - refactor sumDoubles function to remove repeated code
// Use spread syntax to create array called nums containing the input numbers.
// Use .map() method to iterate through the nums array and pass each number to the doubleAfter2Seconds function. 
// Use Promise.all to wait for all the promises to resolve

async function sumDoublesV2(...nums) {
  const doubles = await Promise.all(nums.map(num => doubleAfter2Seconds(num)));
  // return the sum of the doubles array using the .reduce() method
  return doubles.reduce((total, num) => total + num, 0);
}

sumDoublesV2(2, 3, 4).then(res => console.log(res));

module.exports.doubleAfter2Seconds = doubleAfter2Seconds;
module.exports.sumDoubles = sumDoubles;