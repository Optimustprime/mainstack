import React from 'react';
import { Line } from 'react-chartjs-2';
import ChartJS, { ArcElement, Tooltip, Legend } from "chart.js/auto";

ChartJS.register(ArcElement, Tooltip, Legend);

const LineGraph = ({ xValues, yValues }) => {
    // Define the gradient color for the line
    const gradientColor = '#FF5403';

    // Define the gradient for the background color
    const ctx = document.createElement('canvas').getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(255,84,3,0.2)');
    gradient.addColorStop(0.5, 'rgba(255,84,3,0.1)');
    gradient.addColorStop(1, 'rgba(255,84,3,0)');

    // Define the data array for the line graph
    const data = {
        labels: xValues,
        datasets: [
            {
                label: '',
                data: yValues,
                fill: true,
                backgroundColor: gradient,
                borderColor: gradientColor,
                pointRadius: 0,
                spanGaps: true,
            },
        ],
    };

    // Define the options for the line graph
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    maxRotation: 0,
                    minRotation: 0,
                },
                grid: {
                    display: false, // hide the vertical grid lines
                },
            },
            y: {
                ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 10,
                },
                grid: {
                    borderDash: [5, 10], // make the horizontal grid lines dashed/broken
                },
            },
        },
        plugins: {
            legend: {
                display: false,
                labels: {
                    color: gradientColor,
                },
            },
            filler: {
                propagate: false,
            },
        },
    };
    const withGaps = [];
    yValues.forEach((value, i) => {
        if (value !== null) {
            withGaps.push(value);
        } else {
            withGaps.push(null);

            withGaps.push(null);
        }
    });

    data.datasets[0].data = withGaps;

    return (
        <div className='lineChart'>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineGraph;
