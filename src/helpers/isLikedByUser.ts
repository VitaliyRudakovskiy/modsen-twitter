const isLikedByUser = (userdsLikedBy: string[], userId: string) =>
  userdsLikedBy.includes(userId);

export default isLikedByUser;
