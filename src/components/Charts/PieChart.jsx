import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';

const PieChart = ({ series, labels }) => {
  const colors = ['#089BAB', '#FFBF3E', '#6347EB', '#F36068', '#01C5DB'];
  const [options, setOptions] = useState({
    chart: {
      type: 'pie',
      borderRadius: 0
    },
    stroke: {
      colors: colors,
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
        formatter: (value) => `${value.toFixed()}%`
      }
    },
    responsive: [
        {
          breakpoint: 576,
          options: {
            chart: {
              width: '100%',
            },
            legend: {
              position: 'bottom',
              fontSize: '14px',
              itemMargin: {
                horizontal: 1,
                vertical: 2,
              },
              markers: {
                size: 7,
              },
            },
            plotOptions: {
              pie: {
                customScale: 1.0
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
              fontSize: '16px',
              itemMargin: {
                horizontal: 1,
                vertical: 5,
              },
              markers: {
                size: 8,
              },
            },
            plotOptions: {
              pie: {
                customScale: 1.0
              }
            }
          },
        },
        {
          breakpoint: 992,
          options: {
            chart: {
              width: '100%',
            },
            legend: {
              position: 'bottom',
              horizontalAlign: 'start',
              fontSize: '16px',
              itemMargin: {
                horizontal: 1,
                vertical: 5,
              }
            },
            plotOptions: {
              pie: {
                customScale: 1.0
              }
            }
          },
        },
        {
          breakpoint: 1200,
          options: {
            chart: {
              width: '100%',
            },
            legend: {
              position: 'bottom',
            },
            plotOptions: {
              pie: {
                customScale: 1.0
              }
            }
          },
        },
        {
          breakpoint: 1440,
          options: {
            chart: {
              width: '100%',
            },
            legend: {
              position: 'bottom',
              fontSize: '16px',
              itemMargin: {
                horizontal: 1,
                vertical: 5,
              },
              markers: {
                size: 8,
              },
            },
            plotOptions: {
              pie: {
                customScale: 1.0
              }
            }
          },
        },
        {
          breakpoint: 5000,
          options: {
            chart: {
              width: '100%',
              height: '450px',
            },
            plotOptions: {
              pie: {
                customScale: 1.0
              }
            }
          },
        },
      ],
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '16px',
        fontFamily: 'Urbanist, sans-serif',
        fontWeight: 'medium',
        colors: ['#FFFFFF'],
      },
      dropShadow: {
        enabled: false
      }
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        customScale: 0.7,
        // labels: {
        //   show: true,
        //   value: {
        //     fontSize: '14px',
        //     fontFamily: 'Urbanist, sans-serif',
        //     fontWeight: '400',
        //     color: '#6E7D92',
        //     formatter: (val) => `$${val}`,
        //   }
        // }
      }
    },
    legend: { 
      position: 'bottom',
      horizontalAlign: 'start',
      verticalAlign: 'middle',
      fontSize: '14px',
      fontFamily: 'Urbanist, sans-serif',
      fontWeight: '400',
      colors: '#6E7D92',
      itemMargin: {
        horizontal: 1,
        vertical: 5,
      },
      markers: {
        size: 6,
        shape: 'rect',
        radius: 6,
        strokeWidth: 3,
        strokeColor: '#000',
      },
      formatter: (seriesName, opts) => {
        const total = opts.w.globals.series[opts.seriesIndex];
        return `${seriesName} <span>${total}%</span>`;
      }
    },
    title: { 
      text: 'Features Performance',
      align: 'left',
      style: {
        fontSize: '18px',
        fontFamily: 'Urbanist,sans-serif',
        fontWeight: '700',
        color: '#000',
      }
    },
    colors: ['#089BAB', '#FFBF3E', '#6347EB', '#F36068', '#01C5DB'],
  });

  useEffect(() => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      labels: labels,
    }));
  }, [labels]);

  return <ApexCharts className='pie-chart' options={options} series={series} type='pie' />;
};

export default PieChart;