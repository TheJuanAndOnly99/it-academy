// Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.

const { add, subtract, multiply, divide } = require('../app/calculator');

// General validations

test('expect all params to be numbers', () => {
  expect(add(['a', 3, 4, 5])).toBe(NaN);
  expect(add([false, 3, 4, 5])).toBe(NaN);
  expect(add([[1, 2], 3, 4, 5])).toBe(NaN);
  expect(add([{id: 5}, 3, 4, 5])).toBe(NaN);
});

test('expect empty params to return 0', () => {
  expect(add()).toBe(0);
  expect(add([])).toBe(0);
});


// Addition

test('expect 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
  expect(add([1, 2])).toBe(3);
});

test('expect decimals to be added correctly', () => {
  expect(add([2.3, 2.7])).toBe(5.0);
  expect(add([0.3, 0.8])).toBe(1.1);
  expect(add([2.222, 2.222])).toBe(4.444);
});

test('expect negative numbers to be added correctly', () => {
  expect(add([3, -2])).toBe(1);
  expect(add([-3, -6, -2])).toBe(-11);
  expect(add([25, -50, 100])).toBe(75);
});

// Subtraction

test('expect 2 - 1 to equal 1', () => {
  expect(subtract(2, 1)).toBe(1);
  expect(subtract([2, 1])).toBe(1);
});

test('expect decimals to be subtracted correctly', () => {
  expect(subtract([4.4, 2.2])).toBe(2.2);
  expect(subtract([0.4, 0.2])).toBe(0.2);
  expect(subtract([2.222, 2.222])).toBe(0);
});

test('expect negative numbers to be subracted correctly', () => {
  expect(subtract([3, -2])).toBe(5);
  expect(subtract([-3, -6, -2])).toBe(5);
  expect(subtract([25, -50, 100])).toBe(-25);
});

// Multiply

test('multiplys 2 * 5 to equal 10', () => {
  expect(multiply(2, 5)).toBe(10);
  expect(multiply([2, 5])).toBe(10);
});

test('expect decimals to be multiplyed correctly', () => {
  expect(multiply([4.4, 2.2])).toBe(9.68);
  expect(multiply([0.4, 0.2])).toBe(0.08);
  expect(multiply([2.222, 2.222])).toBe(4.94);
});

test('expect negative numbers to be multiplyed correctly', () => {
  expect(multiply([3, -2])).toBe(-6);
  expect(multiply([-3, -6, -2])).toBe(-36);
  expect(multiply([25, -50, 100])).toBe(-125000);
});

// Divide

test('divides 10 / 2 to equal 5', () => {
  expect(divide(10, 2)).toBe(5);
  expect(divide([10, 2])).toBe(5);
});

test('expect decimals to be divided correctly', () => {
  expect(divide([4.4, 2.2])).toBe(2);
  expect(divide([0.7, 0.3])).toBe(2.33);
  expect(divide([2.222, 10])).toBe(0.22);
});

test('expect negative numbers to be divided correctly', () => {
  expect(divide([3, -2])).toBe(-1.5);
  expect(divide([-3, -6, -2])).toBe(-0.25);
  expect(divide([25, -50, 100])).toBe(-0.01);
});