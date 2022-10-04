const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('', () => {
    expect(getOpeningHours()).toMatchObject({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
    expect(getOpeningHours('Tuesday', '9:00-AM')).toEqual('The zoo is open');
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError(new Error('The day must be valid. Example: Monday'));
    expect(() => getOpeningHours('Thursday', '-09:00-AM')).toThrow(new Error('The hour should represent a number'));
    expect(() => getOpeningHours('Thursday', '09:80-AM')).toThrow(new Error('The minutes must be between 0 and 59'));
    expect(() => getOpeningHours('Thursday', '13:10-AM')).toThrow(new Error('The hour must be between 0 and 12'));
    expect(() => getOpeningHours('Thursday', '09:10-ZZ')).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
});
