import { Timestamp } from 'firebase/firestore';

const convertTimestamp = (dateString: Timestamp) => {
  const convertedDate = dateString.toDate();
  const now = new Date();

  const diffMilliseconds = now.getTime() - convertedDate.getTime();
  const diffDays = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));

  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
  };

  if (diffDays === 0) {
    return new Intl.DateTimeFormat('en-US', options).format(convertedDate);
  }
  if (diffDays === 1) {
    return `Yesterday at ${new Intl.DateTimeFormat('en-US', options).format(convertedDate)}`;
  }

  return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
};

export default convertTimestamp;
