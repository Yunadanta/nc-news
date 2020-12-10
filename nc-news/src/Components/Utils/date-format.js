export const formatDate = (created_at) => {
  const monthNames = [
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

  const dayDate = new Date(created_at).getDate();
  const month = monthNames[new Date(created_at).getMonth()];
  const year = new Date(created_at).getFullYear();
  const readableDate = `${dayDate} ${month} ${year}`;

  return readableDate;
};
