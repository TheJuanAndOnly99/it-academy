// Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.

const { add, subtract, multiply, divide } = require('../app/calculator');

// General validations

test.each([
  [['a', 3, 4, 5], 'Arguments must be numbers.'],
  [[false, 3, 4, 5], 'Arguments must be numbers.'],
  [[[1, 2], 3, 4, 5], 'Arguments must be numbers.'],
  [[{id: 5}, 3, 4, 5], 'Arguments must be numbers.']
])('expect all arguments to be numbers', (params, expected) => {
  expect(() => add(params)).toThrow(expected);
});

// Addition

describe('addition', () => {
  test.each([ 
    [[10, 2], 12],
    [[2, 3], 5],
  ])(`expect whole numbers %n to be added correctly and to equal %e`, (nums, expected) => {
    expect(add(nums)).toBe(expected);
  })
  
  test.each([    
    [[2.3, 2.7], 5.0],
    [[0.3, 0.8], 1.1],
    [[2.222, 2.222], 4.44],
  ])('expect decimals %n to be added correctly and to equal %e', (nums, expected) => {
    expect(add(nums)).toBe(expected);
  });
  
  test.each([    
    [[3, -2], 1],
    [[-3, -6, -2], -11],
    [[25, -50, 100], 75],
  ])('expect negative numbers %n to be added correctly and to equal %e', (nums, expected) => {
    expect(add(nums)).toBe(expected);
  });
});

// Testing a different way of structuring these tests
describe('subtraction', () => {
  test.each`
    a      | b      | expected
    ${2}   | ${1}   | ${1}
    ${3}   | ${1}   | ${2}
    ${4.4} | ${2.2} | ${2.2}
    ${0.4} | ${0.2} | ${0.2}
    ${2.222} | ${2.222} | ${0}
    ${2.444} | ${2.222} | ${0.22}
    ${3}   | ${-2}  | ${5}
    ${-3}  | ${-6}  | ${3}
    ${25}  | ${-50} | ${75}
  `('expect $a - $b to equal $expected', ({a, b, expected}) => {
    expect(subtract(a, b)).toBe(expected);
  });
});

// Multiply

describe('multiplication', () => {
  test.each([  
    [[2, 5], 10],
    [[2, 15], 30],
  ])('expect numbers %n to be multiplied correctly and to equal %e', (input, expected) => {
    expect(multiply(...input)).toBe(expected);
  });
  
  test.each([  
    [[4.4, 2.2], 9.68],
    [[0.4, 0.2], 0.08],
    [[2.222, 2.222], 4.94],
  ])('expect decimals %n to be multiplyed correctly and to equal %e', (input, expected) => {
    expect(multiply(...input)).toBe(expected);
  });
  
  test.each([  
    [[3, -2], -6],
    [[-3, -6, -2], -36],
    [[25, -50, 100], -125000],
  ])('expect negative numbers %n to be multiplyed correctly and to equal %e', (input, expected) => {
    expect(multiply(...input)).toBe(expected);
  });
}) 

// Divide

describe('Division', () => {
  test.each([
    [[10, 2], 5],
    [[10, 5], 2],
  ])('expect whole numbers %n to be divided correctly and to equal %e', (input, expected) => {
    expect(divide(...input)).toBe(expected);
  });

  test.each([
    [[4.4, 2.2], 2],
    [[0.7, 0.3], 2.33],
    [[2.222, 10], 0.22],
  ])('expect decimals %n to be divided correctly and to equal %e', (input, expected) => {
    expect(divide(...input)).toBe(expected);
  });

  test.each([
    [[3, -2], -1.5],
    [[-3, -6, -2], -0.25],
    [[25, -50, 100], -0.01],
  ])('expect negative numbers %n to be divided correctly and to equal %e', (input, expected) => {
    expect(divide(...input)).toBe(expected);
  });
});
