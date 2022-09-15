import Highcharts from 'highcharts/highstock';

export const getOptions = (data) => {
 
  return {
    title: {
      text: 'Revenue',
      align: 'left',
      y: 50,
      style: {
        fontWeight: 'bold',
        fontSize: '24px',
        fontFamily: 'Montserrat',
      },
    },
    rangeSelector: {
      labelStyle: {
        display: 'none'
      },
      buttonTheme: {
        fill: '#fff',
        width: 70,
        height: 30,
        style: {
          fontFamily: 'Montserrat',
          fill: '#aaa',
          fontSize: '14px',
        },
        states: {
          hover: {
            fill: '#F6F6F6',
          },
          select: {
            fill: '#fff',
          }
        }
      },
      buttonSpacing: 0,
      buttonPosition: {
        align: 'right',
        y: -20
      },
      buttons: [{
        type: 'week',
        count: 1,
        text: 'Week'
      }, {
        type: 'month',
        count: 1,
        text: 'Month'
      }, {
        type: 'year',
        count: 1,
        text: 'Year'
      }],
      selected: 0,
      inputEnabled: false,
    },
    yAxis: {
      opposite: false,
      labels: {
        align: 'right',
        style: {
          fontSize: '12px',
        },
        formatter: function () {
          return '$' + this.value + 'k';
        },
      },
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      series: {
        showInNavigator: true,
      }
    },
    scrollbar: {
      enabled: false
    },
    navigator: {
      enabled: false
    },
    series: [{
      name: '',
      data: data,
      type: 'areaspline',
      threshold: null,
      tooltip: {
        valueDecimals: 2
      },
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [
          [0, Highcharts.getOptions().colors[0]],
          [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
        ]
      }
    }]
  };
};