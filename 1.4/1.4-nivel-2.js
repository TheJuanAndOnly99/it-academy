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
  const double1 = await doubleAfter2Seconds(x);
  const double2 = await doubleAfter2Seconds(y);
  const double3 = await doubleAfter2Seconds(z);
  return double1 + double2 + double3;
}

sumDoubles(1, 2, 3).then(res => console.log(res));


// V2 - refactor sumDoubles function
// Use spread syntax to create array of input numbers and Promise.all to wait for all the promises to resolve

async function sumDoublesV2(...nums) {
  const doubles = await Promise.all(nums.map(num => doubleAfter2Seconds(num)));
  // return the sum of the doubles array
  return doubles.reduce((total, num) => total + num, 0);
}

sumDoublesV2(2, 3, 4).then(res => console.log(res));