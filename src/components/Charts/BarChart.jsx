import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';

const BarChart = () => {
  const [series] = useState([{
    name: 'Installations',
    data: [150,230,140,180,100]
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
        columnWidth: '73px',
        distributed: true,
        borderRadius: 16,
        colors: {
          backgroundBarColors: ['#faf2f2'],
          backgroundBarOpacity: 1,
          backgroundBarRadius: 16,
        }
      }
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    xaxis: {
      categories: [
        "Daily Check-in", "Emergency SOS", "Voice Recording", "Incident Reporting", "Gameplay"],
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
      axisBorder: { show: true },
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
      max: 250,
      axisBorder: { show: true },
      axisTicks: { show: false },
      labels: {
        show: true,
        style: {
            fontSize: '13.7px',
            colors: '#64748B',
            fontFamily: '"Inter", sans-serif',
            fontWeight: '600',
          },
        formatter: (val) => val.toFixed(0)
      }
    },
    grid: { show: true },
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
            { offset: 20, color: "#9A0000", opacity: 0.8 },
            { offset: 40, color: "#9A0000", opacity: 0.6 },
            { offset: 60, color: "#9A0000", opacity: 0.4 },
            { offset: 80, color: "#9A0000", opacity: 0.2 },
            { offset: 100, color: "#9A0000", opacity: 0 }
          ]
        }
      },
    responsive: [
      {
      breakpoint: 576,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 5,
            colors: {
              backgroundBarRadius: 5,
            },
            columnWidth: '25px'
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
            columnWidth: '50px'
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
            columnWidth: '50px'
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
            columnWidth: '50px'
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
      breakpoint: 1440,
      options: {
        plotOptions: {
          bar: {
            columnWidth: '50px'
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
    <div style={{ height: '350px' }}>
      <ApexCharts 
        options={options} 
        series={series} 
        type="bar" 
        height="100%"
      />
    </div>
  );
};

export default BarChart;