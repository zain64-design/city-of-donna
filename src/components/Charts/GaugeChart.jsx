import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const GaugeChart = () => {

    const options = {
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
        },
        title: {
            text: 'Real-Time Data Gauge',
        },
        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
                borderWidth: 0,
                outerRadius: '109%',
                innerRadius: '101%',
            }],
        },
        yAxis: {
            min: 0,
            max: 100,
            minorTickInterval: 'auto',
            tickInterval: 10,
            title: {
                text: 'Value',
            },
            plotBands: [{
                from: 0,
                to: 60,
                color: '#55BF3B', // green
            }, {
                from: 60,
                to: 80,
                color: '#DDDF0D', // yellow
            }, {
                from: 80,
                to: 100,
                color: '#DF5353', // red
            }],
        },
        series: [{
            name: 'Current Value',
            data: [Math.floor(Math.random() * 100)], // Random value for demonstration
            tooltip: {
                valueSuffix: ' units',
            },
        }],
    };

    return (
        <>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </>
    )
}

export default GaugeChart