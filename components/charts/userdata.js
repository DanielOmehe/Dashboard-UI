export const barChartData = {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30, 31],
    datasets: [{
        label: '# of income',
        data: [100, 120, 123, 121, 231, 127, 350, 252, 282, 209, 231, 320, 141, 234, 323, 232, 238, 235, 123, 133,232, 241, 251, 231, 341, 231, 256, 345, 241, 316],
        borderWidth: 1,
        min: 0,
        max: 1000,
        margin: 100,
        backgroundColor: 'rgba(123, 0,0, 0.1 )',
        borderColor: 'red'
    }]
};

export const lineChartData = {
    labels: ['1w', '2w', '3w', '4w'],
    datasets: [{
        label: '# total income per month',
        data: [11, 12, 9, 15, 30],
        // backgroundColor: 'rgba(0, 130, 0, 0.1)',
        borderColor: 'green'
    }]
}

export const barOptions = {
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                display: false
            },
            border: {
                display: false
            },
            ticks: {
                display: false
            }
        },
        x: {
            grid: {
                display: false
            },
            border: {
                display: false
            }
        }
    },
    plugins: {
        legend: {
            display: false,
            labels: {
                color: 'rgb(255, 99, 132)'
            }
        }
    }
}
export const lineOptions = {
    scales: {
        x: {
            border: {
                display: false
            },
        },
        y: {
            grid: {
                display: false
            },
            ticks: {
                display: false
            }
        },
    },
    plugins: {
        legend: {
            display: true,
            labels: {
                usePointStyle: true
            },
            title: {
                display: true
            }
        }
    }
};