import { Months } from '@constants/dates';

const formatBirthDate = (day: number, month: string, year: number): string => {
  const monthIndex = Months.indexOf(month);
  const date = new Date(year, monthIndex, day);

  if (
    date.getDate() !== day ||
    date.getMonth() !== monthIndex ||
    date.getFullYear() !== year
  ) {
    return 'Invalid date';
  }

  const formattedDay = day.toString().padStart(2, '0');
  const formattedMonth = (monthIndex + 1).toString().padStart(2, '0');

  return `${formattedDay}.${formattedMonth}.${year}`;
};

export default formatBirthDate;
