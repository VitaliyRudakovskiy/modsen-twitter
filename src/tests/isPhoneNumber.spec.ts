import isPhoneNumber from '@/helpers/isPhoneNumber';

describe('isPhoneNumber function', () => {
  it('should return true for a valid phone number', () => {
    expect(isPhoneNumber('+375123456789')).toBe(true);
    expect(isPhoneNumber('+375290000000')).toBe(true);
    expect(isPhoneNumber('+375111111111')).toBe(true);
  });

  it('should return false for an invalid phone number', () => {
    expect(isPhoneNumber('123456789')).toBe(false);
    expect(isPhoneNumber('abc')).toBe(false);
    expect(isPhoneNumber('')).toBe(false);
  });
});
