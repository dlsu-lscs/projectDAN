import React from 'react'
import Chart from 'chart.js';

class ChartComponent extends React.Component {
    componentDidMount() {
        let {type, data } = this.props;
        console.log(type)
        var ctx = document.getElementById("chart");
        console.log(ctx)
        if (ctx != null) {
            var orgresChart = new Chart(ctx, {
                type: "radar",
                data: {
                    labels: ['1', '2', '3', '4', '5'],
                    datasets: [{
                        data: [3, 2, 4, 5, 6]
                    }]
                },
                // options: {
                //     scales: {
                //         yAxes: [{
                //             ticks: {
                //             }
                //         }]
                //     }
                // }
            })
        }
    }
    
    render() {
        // let {document} = this.props;
        return (
        <canvas id="chart"></canvas>
        )
    }
}

export default ChartComponent
