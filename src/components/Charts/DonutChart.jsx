import React, { useState,useEffect } from 'react'
import ApexCharts from 'react-apexcharts';

const DonutChart = ({series,labels}) => {

  const [options, setOptions] = useState({
    chart: {
      type: 'donut',
    },
    stroke: {
      width: 0
  },
    labels: labels,
    tooltip: {
      enabled: true,
      style: {
        fontSize: '12px',
        fontFamily: 'Inter, sans-serif',
      },
      y: {
        formatter: (value) => {
          return `${value.toFixed()}%`;
        }
      }
  
    },
    responsive: [
      {
        breakpoint: 576,
        options: {
          chart: {
            width: '100%',
            height: 300
          },
          legend: {
            position: 'bottom',
            fontSize: '14px',
            itemMargin: {
              horizontal: 2,
              vertical: 2,
            },
            markers: {
              size: 7,
            },
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  total: { 
                    fontSize: '10px',
                   },
                  value: {
                    fontSize: '16px',
                  },
                }
              }
            }
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            width: '100%',
          },
          legend: {
            position: 'bottom',
            fontSize: '18px',
            itemMargin: {
              horizontal: 5,
              vertical: 5,
            },
            markers: {
              size: 8,
            },
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            width: '100%',
            height: 500
          },
          legend: {
            position: 'right',
            horizontalAlign: 'center',
            fontSize: '20px',
            itemMargin: {
              horizontal: 5,
              vertical: 5,
            }
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            width: '100%',
          },
          legend: {
            position: 'right',
          },
        },
      },
      {
        breakpoint: 1440,
        options: {
          chart: {
            width: '100%',
          },
          legend: {
            position: 'right',
            fontSize: '16px',
            itemMargin: {
              horizontal: 1,
              vertical: 10,
            },
            markers: {
              size: 8,
            },
          },
        },
      },
      {
        breakpoint: 5000,
        options: {
          chart: {
            width: '75%',
          }
        },
      },
    ],
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '16px',
        fontFamily: 'Urbanist, sans-serif',
        fontWeight: '700',
        colors: ['#FFFFFF'],
      },
      dropShadow: {
        enabled: false
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: "55%",
          startAngle: 0,
          endAngle: 360,
          labels: {
            show: false,
            total: { 
              show: true,
              fontSize: '20px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '400',
              color: '#67677A',
              label: 'Portfolio Value',
              formatter: (w) => {
                const totalValue = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                return `$${totalValue.toFixed()}`;
              }
             },
             name: {
              color: '#67677A',
            },
            value: {
              fontSize: '30px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '700',
              color: '#000',
              formatter: (val) => `$${val}`,
            },
          }
        }
      }
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      verticalAlign: 'middle',
      fontSize: '16px',
      fontFamily: 'Urbanist,sans-serif',
      fontWeight: '400',
      colors: '#000',
      itemMargin: {
        horizontal: 1,
        vertical: 3,
      },
      markers: {
        size: 6,
        shape: 'circle',
        radius: 6,
        strokeWidth: 2,
        strokeColor: '#000',
      },
      formatter: (seriesName, opts) => {
        const total = opts.w.globals.series[opts.seriesIndex];
        return `${seriesName} <span className='value-total'>${total}K</span>`;
      }
    },
    // title: {
    //   text: 'Statistics',
    //   align: 'left',
    //   style: {
    //     fontSize: '22px',
    //     fontFamily: 'Inter,sans-serif',
    //     fontWeight: '700',
    //     color: '#04091E',
    //   }
    // },
    colors: ['#089BAB', '#9A0000'],
  });

  useEffect(() => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      labels: labels,
    }));
  }, [labels]); 

  return (
    <>
    <ApexCharts className='donut-chart' options={options} series={series} type='donut'/>
    </>
  )
}

export default DonutChart