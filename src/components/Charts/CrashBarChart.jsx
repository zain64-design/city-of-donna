import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';

const CrashBarChart = () => {
  const [series] = useState([{
    name: 'crash',
    data: [100,110,120,100,110,220,190,230,100,100,110,320,100,330,130,100,110,120,100,110,220,190,230,100,100,110,320,100,330,130]
  }]);

  const [options] = useState({
    chart: {
      height: '100%',
      width: '100%',
      type: 'bar',
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 2000,
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '15px',
        distributed: true,
        borderRadius: 8,
        colors: {
          backgroundBarColors: ['#f5e5e5'],
          backgroundBarOpacity: 1,
          backgroundBarRadius: 8,
        }
      }
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    xaxis: {
      categories: ["","2","", "4","", "6","", "8","", "10","", "12","", "14","", "16","", "18","", "20","","22","", "24","", "26","", "28","", "30"],
      labels: {
        rotate: 0,
        trim: true,
        style: {
          fontSize: '14px',
          colors: '#64748B',
          fontFamily: '"Urbanist", sans-serif',
          fontWeight: '400',
        }
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
      crosshairs: {
        show: true,
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#faf2f2',
            colorTo: '#faf2f2',
            stops: [0, 100],
            opacityFrom: 1,
            opacityTo: 1,
          }
        }
      },
      tooltip: { enabled: true }
    },
    yaxis: {
      show: true,
      max: 400,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        show: true,
        style: {
            fontSize: '13.7px',
            colors: '#808080',
            fontFamily: '"Inter", sans-serif',
            fontWeight: '600',
          },
        formatter: (val) => val.toFixed(0)
      }
    },
    grid: { show: false },
    colors: ['#9A0000'],
    fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'vertical',
          gradientToColors: ['#9A0000'],
          inverseColors: false,
          colorStops: [
            { offset: 0, color: "#9A0000", opacity: 1 },
            { offset: 20, color: "#9A0000", opacity: 1 },
            { offset: 40, color: "#9A0000", opacity: 1 },
            { offset: 60, color: "#9A0000", opacity: 1 },
            { offset: 80, color: "#9A0000", opacity: 1 },
            { offset: 100, color: "#9A0000", opacity: 1 }
          ]
        }
      },
    responsive: [
      {
      breakpoint: 576,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 2,
            colors: {
              backgroundBarRadius: 2,
            },
            columnWidth: '4px'
          }
        },
        xaxis: {
          labels: {
            style: { fontSize: '8px' }
          }
        }
      }
    },
    {
      breakpoint: 768,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 4,
            columnWidth: '8px',
            colors: {
                backgroundBarRadius: 4,
              },
          }
        },
        xaxis: {
          labels: {
            style: { fontSize: '10px' }
          }
        }
      }
    },
    {
      breakpoint: 992,
      options: {
        plotOptions: {
          bar: {
            columnWidth: '15px'
          }
        },
        xaxis: {
          labels: {
            style: { fontSize: '14px' }
          }
        }
      }
    },
    {
      breakpoint: 1200,
      options: {
        plotOptions: {
          bar: {
            columnWidth: '15px',
          }
        },
        xaxis: {
          labels: {
            trim: true,
            style: { fontSize: '12px' }
          }
        }
      }
    },
    {
      breakpoint: 1400,
      options: {
        plotOptions: {
          bar: {
            columnWidth: '12px',
            borderRadius: 6,
            colors: {
              backgroundBarRadius: 6,
            },
          }
        },
        xaxis: {
          labels: {
            trim: true,
            style: { fontSize: '10px' }
          }
        }
      }
    },
    {
        breakpoint: 1600,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '15px'
            }
          },
          xaxis: {
            labels: {
              trim: true,
              style: { fontSize: '10px' }
            }
          }
        }
      }
  ]
  });

  return (
    <div style={{ height: '380px' }}>
      <ApexCharts
        options={options}
        series={series} 
        type="bar" 
        height="100%"
      />
    </div>
  );
};

export default CrashBarChart;