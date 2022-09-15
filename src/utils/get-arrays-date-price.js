export const getArraysOfDateAndPrice = (chartData) => {
  return chartData.map(item => {
     return [+new Date(item.date), Number(item.curency) ? Number(item.curency) : 0];
   });
 };