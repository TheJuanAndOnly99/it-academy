// Crea els tests corresponents per verificar el funcionament de les dues funcions de l'exercici Promises i Callbacks N1 E2.

const { checkVoterStatus, voterStatus} = require('../../1.3/1.3-nivel-1');

describe('voterStatus', () => {
  test('should return "You can vote!" when vote is true', () => {
    const vote = true;
    const consoleSpy = jest.spyOn(console, 'log');

    voterStatus(vote);

    expect(consoleSpy).toHaveBeenCalledWith('You can vote!');
  });

  test('should return "Sorry, you cannot vote :(" when vote is false', () => {
    const vote = false;
    const consoleSpy = jest.spyOn(console, 'log');

    voterStatus(vote);

    expect(consoleSpy).toHaveBeenCalledWith('Sorry, you cannot vote :(');
  });
});

describe('checkVoterStatus', () => {
  test('should return true if the age is greater than or equal to 18', () => {
    const callBack = jest.fn();
    const result = checkVoterStatus(18, callBack);
    expect(result).toBe(true);
    expect(callBack).toHaveBeenCalledWith(true);
  });

  test('should return false if the age is less than 18', () => {
    const callBack = jest.fn();
    const result = checkVoterStatus(17, callBack);
    expect(result).toBe(false);
    expect(callBack).toHaveBeenCalledWith(false);
  });
});

