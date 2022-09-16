export const sortByDate = (type, data, setData) => {
  const copyData = data.concat()
  setData(copyData.sort((a, b) => {
    if (type === 'asc') {
      return new Date(a.date) - new Date(b.date);
    };
    if (type === 'desc') {
      return new Date(b.date) - new Date(a.date);
    };
  }));
};