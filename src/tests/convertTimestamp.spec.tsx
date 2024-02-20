import { Timestamp } from 'firebase/firestore';

import convertTimestamp from '@/helpers/convertTimestamp';

import '@testing-library/jest-dom';

describe('convertTimestamp', () => {
  it('should return time for today', () => {
    const now = Timestamp.now();
    const result = convertTimestamp(now);
    expect(result).toMatch(/\d{2}:\d{2} (AM|PM)/);
  });

  it('should return "Yesterday at time" for yesterday', () => {
    const yesterday = Timestamp.fromDate(
      new Date(Date.now() - 24 * 60 * 60 * 1000)
    );
    const result = convertTimestamp(yesterday);
    expect(result).toMatch(/^Yesterday at \d{2}:\d{2} (AM|PM)$/);
  });

  it('should return "N days ago" for N days ago', () => {
    const fiveDaysAgo = Timestamp.fromDate(
      new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
    );
    const result = convertTimestamp(fiveDaysAgo);
    expect(result).toBe('5 days ago');
  });
});
