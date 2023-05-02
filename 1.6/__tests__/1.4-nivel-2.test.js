// Verifica mitjançant tests l'execució de l'exercici Async / Await N2 E1 utilitzant Jest Fake Timers.

const { doubleAfter2Seconds } = require('../../1.4/1.4-nivel-2')
jest.useFakeTimers();

describe('doubleAfter2Seconds function', () => {
  test('should double the number after 2 seconds', async () => {

    const promise = await doubleAfter2Seconds(2);
  
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
  
    jest.runOnlyPendingTimers();
  
    return promise.then(output => {
      expect(output).toBe(4);
    });
  });

  test('should throw an error if the argument is not a number', () => {
    const num = 'not a number';
    expect(() => doubleAfter2Seconds(num)).toThrow(TypeError);
  });
});