import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const MixedChart = () => {
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);

  useEffect(() => {

    const chartData2 = {
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      activeUsers: [500, 800, 500, 1000, 780, 600, 800, 300, 1000, 600, 1000, 400],
      activeUsersTwo: [0, 0, 0, 0, 900, 0, 0, 0, 0, 0, 0, 0],
    };

    const config = {
      series: [
        {
          name: 'Active Users',
          type: 'line',
          data: chartData2.activeUsers,
          color: '#9F0C0C',
        },
        {
          name: 'Sessions',
          type: 'bar',
          data: chartData2.activeUsersTwo,
        }
      ],
      chart: {
        height: '100%',
        type: 'line',
        stacked: false,
        toolbar: { show: false },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 2000,
        },
        zoom: { enabled: false }
      },
      plotOptions: {
        bar: {
          columnWidth: '47px',
          distributed: true,
          dataLabels: { position: 'top' },
          borderRadius: 20,
          stroke: { show: false }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'vertical',
          gradientToColors: ['#9F0C0C'],
          inverseColors: false,
          colorStops: [
            { offset: 0, color: "#9F0C0C", opacity: 1 },
            { offset: 30, color: "#9F0C0C", opacity: 0.9 },
            { offset: 50, color: "#9F0C0C", opacity: 0.7 },
            { offset: 70, color: "#9F0C0C", opacity: 0.5 },
            { offset: 90, color: "#9F0C0C", opacity: 0.3 },
            { offset: 100, color: "#9F0C0C", opacity: 0 }
          ]
        }
      },
      dataLabels: { enabled: false },
      stroke: { width: 4, curve: 'smooth' },
      markers: {
        size: 6,
        hover: { sizeOffset: 2 },
        colors: ['#000000'],
        strokeColor: '#9F0C0C',
        strokeWidth: 3
      },
      xaxis: {
        categories: chartData2.months,
        labels: {
          style: {
            fontSize: '14px',
            colors: '#64748B',
            fontFamily: '"Urbanist", sans-serif',
            fontWeight: '500',
          }
        },
        axisTicks: { show: false }
      },
      yaxis: {
        show: true,
        max: 1000,
        min: 0,
        axisBorder: { show: true },
        axisTicks: { show: false },
        labels: {
          style: {
            fontSize: '14px',
            colors: '#64748B',
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '500',
          }
        }
      },
      colors: ['#9F0C0C'],
      legend: { show: false },
      annotations: {
        xaxis: [{
          x: chartData2.months[4],
          strokeDashArray: 0,
          borderColor: '#fff',
          label: {
            borderColor: '#fff',
            style: {
              color: '#000',
              background: '#fff',
            },
          }
        }],
        points: [{
          x: chartData2.months[4],
          y: chartData2.activeUsers[4],
          marker: {
            size: 6,
            fillColor: '#fff',
            strokeColor: '#fff',
            radius: 2,
            cssClass: 'apexcharts-custom-class'
          },
          label: {
            borderColor: '#fff',
            offsetY: 0,
            style: {
              color: '#fff',
              background: '#fff',
            }
          }
        }]
      }
    };

    // Set state with config
    setOptions(config);
    setSeries(config.series);
  }, []);

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={350}
      className="mt-5"
    />
  );
};

export default MixedChart;