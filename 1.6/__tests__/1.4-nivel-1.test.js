// Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await N1 E2.
const { wait, asyncFunction} = require('../../1.4/1.4-nivel-1');

describe('asyncFunction()', () => {
  test('should return "Resolve after 2 seconds" when called', async () => {
    expect.assertions(1);
    const consoleSpy = jest.spyOn(console, 'log');
    await asyncFunction();
    expect(consoleSpy).toHaveBeenCalledWith('Resolve after 2 seconds');
  })
});

describe('wait()', () => {
  test('should return a resolved promise', () => {
    expect(wait()).resolves.toBeTruthy();;
  })

  test('should resolve after 2 seconds', async () => {
    expect.assertions(3);
    const start = Date.now();
    return wait().then(() => {
      const end = Date.now();
      const duration = end - start;
      expect(duration).toBeGreaterThanOrEqual(2000);
      expect(duration).toBeLessThanOrEqual(2100);
    });
  })
});

