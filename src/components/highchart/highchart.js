
import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import { getOptions } from '../../utils/highchart';

const Highchart = ({ data = [] }) => {
  
  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={getOptions(data)}
        constructorType={'stockChart'}
      />
    </>
  );
};

export default Highchart;


