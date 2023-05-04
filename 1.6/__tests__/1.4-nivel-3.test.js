// Utilitzant com a base l'exercici Async / Await, crea tests que forcin errors de funcionament i verifiqui que els errors llançats són els esperats.

// The tests for the getEmployee and getSalary functions are in file ./1.3-nivel-2.test.js
// The tests for the doubleAfter2Seconds function are in file ./1.4-nivel-3.test.js


const { sumDoublesV2 } = require('../../1.4/1.4-nivel-2');

describe('sumDoublesV2', () => {
  it('should reject when passed a non-numeric value', async () => {
    try {
      await sumDoublesV2("hi");
    } catch (error) {
      expect(error.message).toEqual(`All parameters must be numbers.`);
    }
  });
});
