export const sortByStatus = (data, type, setData) => {
  const copyData = data.concat();
  setData(copyData.sort((a, b) => {
    if (type === 'asc') {
      if (a.isActive < b.isActive) {
        return 1;
      };
      if (a.isActive > b.isActive) {
        return -1;
      };
      return 0;
    };
    if (type === 'desc') {
      if (a.isActive > b.isActive) {
        return 1;
      };
      if (a.isActive < b.isActive) {
        return -1;
      };
      return 0;
    };
  }));
};