import isLikedByUser from '@/helpers/isLikedByUser';

describe('isLikedByMe', () => {
  it('should return true when the email is in the likingUsers array', () => {
    const likingUsers = [
      'test1@example.com',
      'test2@example.com',
      'test3@example.com',
    ];
    const email = 'test2@example.com';
    expect(isLikedByUser(likingUsers, email)).toBe(true);
  });

  it('should return false when the email is not in the likingUsers array', () => {
    const likingUsers = [
      'test1@example.com',
      'test2@example.com',
      'test3@example.com',
    ];
    const email = 'test4@example.com';
    expect(isLikedByUser(likingUsers, email)).toBe(false);
  });

  it('should return false when the likingUsers array is empty', () => {
    const likingUsers: string[] = [];
    const email = 'test1@example.com';
    expect(isLikedByUser(likingUsers, email)).toBe(false);
  });
});
