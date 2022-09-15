export const getTime = (t) => {
  const year = new Date(t).getUTCFullYear();
  let month = new Date(t).getUTCMonth();
  let day = new Date(t).getUTCDate();
  if (month < 10) { month = "0" + month };
  if (day < 10) { day = "0" + day };

  return day + '.' + month + '.' + year;
};