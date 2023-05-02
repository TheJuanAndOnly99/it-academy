// Utilitzant com a base l'exercici Async / Await, crea tests que forcin errors de funcionament i verifiqui que els errors llançats són els esperats.

const { logEmployeeSalary } = require('../../1.4/1.4-nivel-1');
const { doubleAfter2Seconds, sumDoublesV2 } = require('../../1.4/1.4-nivel-2');

describe('logEmployeeSalary', () => {
  it('should log an error when passed a boolean', async () => {
    try {
      await logEmployeeSalary(true);
    } catch (error) {
      expect(error).toEqual(expect.any(Error));
    }
  });

  it('should log an error when passed a null value', async () => {
    try {
      await logEmployeeSalary(null);
    } catch (error) {
      expect(error).toEqual(expect.any(Error));
    }
  });

  it('should log an error when passed an undefined value', async () => {
    try {
      await logEmployeeSalary(undefined);
    } catch (error) {
      expect(error).toEqual(expect.any(Error));
    }
  });

  it('should log an error when passed a non-numeric string', async () => {
    try {
      await logEmployeeSalary("Thomas");
    } catch (error) {
      expect(error).toEqual(expect.any(Error));
    }
  });

  it('should log an error when the id is not found', async () => {
    try {
      await logEmployeeSalary(4);
    } catch (error) {
      expect(error).toEqual(expect.any(Error));
    }
  });
});

describe('doubleAfter2Seconds', () => {
  it('should reject when passed a non-numeric value', async () => {
    try {
      await logEmployeeSalary(4);
    } catch (error) {
      expect(error).toEqual(expect.any(Error));
    }
  });
});

describe('sumDoublesV2', () => {
  it('should reject when passed a non-numeric value', async () => {
    try {
      await logEmployeeSalary(4);
    } catch (error) {
      expect(error).toEqual(expect.any(Error));
    }
  });
});
