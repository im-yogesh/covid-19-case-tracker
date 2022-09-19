var ctx = document.getElementById('myChart1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            fill: 'start',
            label: 'My First dataset',
            backgroundColor: '#FBE0DE',
            borderColor: '#EC6E63',
            data: [0, 10, 10, 20, 20, 30, 50],
            pointRadius: 0
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        },
        scales: {
            yAxes: [{
                display: false,
                gridLines: {
                    display: false,
                    drawBorder: false
                },
            }],
            xAxes: [{
                display: false
            }]
        }
    }
});

