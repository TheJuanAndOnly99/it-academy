// Verifica mitjançant tests l'execució de l'exercici Async / Await N2 E1 utilitzant Jest Fake Timers.
const { doubleAfter2Seconds } = require('../../1.4/1.4-nivel-2')
jest.useFakeTimers();
const setTimeoutSpy = jest.spyOn(global, 'setTimeout');

test('doubleAfter2Seconds function should resolve with double the input value', () => {
  const input = 2;
  const expectedOutput = 4;

  const promise = doubleAfter2Seconds(input);

  jest.runAllTimers();

  return promise.then(output => {
    expect(setTimeoutSpy).toHaveBeenCalledTimes(1);
    expect(setTimeoutSpy).toHaveBeenLastCalledWith(expect.any(Function), 2000);

    expect(output).toEqual(expectedOutput);
  });
});

test('doubleAfter2Seconds function should reject with an error if the input is not a number', () => {
  jest.useFakeTimers();

  const input = 'not a number';

  expect(() => doubleAfter2Seconds(input)).toThrowError(TypeError);
});
