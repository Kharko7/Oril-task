import React, { useEffect, useState } from 'react';
import { useStyles } from './statistic.style';
import axios from 'axios';
import Highchart from '../../components/highchart'
import { countRevenue } from '../../utils/countReveue';
import { getArraysOfDateAndPrice } from '../../utils/get-arrays-date-price';
import StatsAndValue from '../../components/title-and-subtitle/stats-and-value';

const StatisticPage = () => {
  const style = useStyles();
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const idCoin = sessionStorage.getItem('IdCoin')
  const { minRevenue, maxRevenue, totalRevenue, mediumRevenue } = countRevenue(chartData)
  console.log(minRevenue)
  useEffect(() => {
    setLoading(true)
    axios.get(`https://oril-coins-test.herokuapp.com/item/${idCoin}`).then((response) => {
      if (response.data) {
        const sortedAsc = response.data.data.sort(
          (objA, objB) => Number(new Date(objA.date)) - Number(new Date(objB.date)),
        );
        setChartData(sortedAsc);
      };
    }).catch(error => setError(error.message)).finally(() => setLoading(false))
  }, []);

  if (loading) {
    return (
      <h1>Loading.... </h1>
    );
  };
  if (error) {
    return (
      <h1>{`An error occurred: ${error}`}</h1>
    );
  };

  return chartData ? (
    <div className={style.container}>
      <div className={style.body}>
        <Highchart data={getArraysOfDateAndPrice(chartData)} />
        <div className={style.statsTotal}>
          <p>Total</p>
          <h1>$ {totalRevenue}</h1>
        </div>
        <div className={style.statsRow}>
          <StatsAndValue title='Min' value={minRevenue} />
          <StatsAndValue title='Medium' value={mediumRevenue} />
          <StatsAndValue title='Max' value={maxRevenue} />
        </div>
      </div>
    </div>
  ) : <h2>no data</h2>;
};

export default StatisticPage;



