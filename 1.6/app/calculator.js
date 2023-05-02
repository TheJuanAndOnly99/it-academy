// Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.

function flatten(arr) {
  return [].concat(...arr);
}

function add(...nums) {
  return calculate('add', ...flatten(nums));
}

function subtract(...nums) {
  return calculate('subtract', ...flatten(nums));
}

function multiply(...nums) {
  return calculate('multiply', ...flatten(nums));
}

function divide(...nums) {
  return calculate('divide', ...flatten(nums));
}

function calculate(operation, ...nums) {
  if (!nums.every(num => typeof(num) === 'number')) {
    return NaN;
  }
  let result;
  switch (operation) {
    case 'add':
      result = nums.reduce((total, num) => total + num, 0);
      break;
    case 'subtract':
      result = nums[0];
      for (let i = 1; i < nums.length; i++) {
        result -= nums[i];
      }
      break;
    case 'multiply':
      result = nums.reduce((total, num) => total * num, 1);
      result = parseFloat(result.toFixed(2))
      break;
    case 'divide':
      result = nums[0];
      for (let i = 1; i < nums.length; i++) {
        result /= nums[i];
      }
      result = parseFloat(result.toFixed(2)); // Round to 2 decimal places
      break;
    default:
      return NaN;
  }
  
  return result;
}

// Example usage:
console.log(add(2.5, 2.5));      
console.log(subtract(10, 2)); 
console.log(multiply(2, 3));   
console.log(divide(10, 2));    


module.exports = { add, subtract, multiply, divide };