import formatBirthDate from '@/helpers/formatBirthDate';

describe('formatBirthDate function', () => {
  it('should return a formatted date string for valid input', () => {
    expect(formatBirthDate(20, 'February', 1990)).toBe('20.02.1990');
  });

  it('should return a formatted date string for valid input', () => {
    expect(formatBirthDate(1, 'December', 2024)).toBe('01.12.2024');
  });

  it('should return "Invalid date" for invalid day', () => {
    expect(formatBirthDate(30, 'February', 2000)).toBe('Invalid date');
  });

  it('should return "Invalid date" for invalid month', () => {
    expect(formatBirthDate(15, 'NotAMonth', 2005)).toBe('Invalid date');
  });
});
