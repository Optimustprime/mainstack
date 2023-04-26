import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ labels, data, label }) => {
    const chartData = {
        datasets: [
            {
                label: label,
                data: data,
                backgroundColor: [
                    '#599EEA',
                    '#844FF6',
                    '#0FB77A',
                    '#FAB70A',
                    '#F09468'
                ],
                hoverOffset: 4,
                borderColor: '#fff'
            }
        ],
        labels: labels
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'left',
                labels: {
                    usePointStyle: true,
                    padding: 70,
                    generateLabels: function(chart) {
                        const data = chart.data;
                        if (data.labels.length && data.datasets.length) {
                            return data.labels.map((label, index) => ({
                                text: ` `,
                                fillStyle: data.datasets[0].backgroundColor[index],
                                strokeStyle: '#fff',
                                lineWidth: 2,
                                pointStyle: 'circle',
                                pointRadius: 8,
                            }));
                        }
                        return [];
                    }
                }
            },
            title: {
                display: true,
            }
        }
    };

    return (
        <div>
            <Doughnut data={chartData} options={options} />
        </div>
    );
}

export default DoughnutChart;
