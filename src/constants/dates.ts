const BEGIN_YEAR = 1960;

export const Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const Years = Array.from({ length: 65 }, (_, i) => BEGIN_YEAR + i + 1);

export const Days = Array.from({ length: 31 }, (_, i) => i + 1);
