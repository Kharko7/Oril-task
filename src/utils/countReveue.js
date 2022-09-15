export const countRevenue = (chartData) => {
  if(chartData){
    const getArrayRevenue = chartData.map(item => Number(item.curency));
    const filteringArrayRevenue = getArrayRevenue.filter(price => {
      if (!isNaN(price)) {
        return price
      };
    });
    const minRevenue = Math.round(Math.min(...filteringArrayRevenue));
   const  maxRevenue = Math.round(Math.max(...filteringArrayRevenue));
   const totalRevenue = Math.round(getArrayRevenue.reduce((pre, price) => {
      if (isNaN(price)) {
        price = 0
      };
      return pre + price;
    }, 0));
    const mediumRevenue = Math.round(totalRevenue / getArrayRevenue.length);

    return {
      minRevenue,
      maxRevenue,
      totalRevenue,
      mediumRevenue,
    };
  };
  return {};
};