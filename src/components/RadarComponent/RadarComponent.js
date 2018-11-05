import React from 'react'
import {Radar} from 'react-chartjs-2';

class RadarComponent extends React.Component {
    
    constructor(props) {
        super(props)
        this.updateChart = this.updateChart.bind(this)
    }

    updateChart(chart) {
    //     chart.data.dataset[0].data[2] = '4'
    //     chart.update()
    }
    
    componentDidMount() {
        // console.log(this.refs.chart)
        // document.getElementById("SaveChanges").addEventListener('click', this.updateChart(this.refs.chart), false)
    }
    
    render() {
        let { data } = this.props;
        console.log(data)
        return (
            <Radar
                ref='chart'
                data = {{
                    labels: ['1', '2', '3', '4', '5'],
                    datasets: [{
                        label: "Question 1",
                        backgroundColor: "rgba(179,181,198,0.2)",
                        borderColor: "rgba(179,181,198,1)",
                        pointBackgroundColor: "rgba(179,181,198,1)",
                        pointBorderColor: "#fff",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(179,181,198,1)",
                        data: data[0]
                    }, {
                        label: "Question 2",
                        backgroundColor: "rgba(255,99,132,0.2)",
                        borderColor: "rgba(255,99,132,1)",
                        pointBackgroundColor: "rgba(255,99,132,1)",
                        pointBorderColor: "#fff",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(255,99,132,1)",
                        data: data[1]
                    }, {
                        label: "Question 3",
                        backgroundColor: "rgba(255,99,132,0.2)",
                        borderColor: "rgba(255,99,132,1)",
                        pointBackgroundColor: "rgba(255,99,132,1)",
                        pointBorderColor: "#fff",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(255,99,132,1)",
                        data: data[2]
                    }, {
                        label: "Question 4",
                        backgroundColor: "rgba(255,99,132,0.2)",
                        borderColor: "rgba(255,99,132,1)",
                        pointBackgroundColor: "rgba(255,99,132,1)",
                        pointBorderColor: "#fff",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(255,99,132,1)",
                        data: data[3]
                    }, {
                        label: "Question 5",
                        backgroundColor: "rgba(255,99,132,0.2)",
                        borderColor: "rgba(255,99,132,1)",
                        pointBackgroundColor: "rgba(255,99,132,1)",
                        pointBorderColor: "#fff",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(255,99,132,1)",
                        data: data[4]
                    },]
                }}
                options = {{
                    scale: {
                        ticks: {
                            display: false
                        }
                    },
                    animation: {
                        duration: 500,
                        easing: "easeOutQuart",
                        onComplete: function() {
                            var ctx = this.chart.ctx;
                            // ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
                            ctx.textAlign = 'center';
                            ctx.fillStyle = 'black';
            
                            this.data.datasets.forEach(function(dataset) {
                                for (var i = 0; i < dataset.data.length; i++) {
                                    var model = dataset._meta[0].data[i]._model;
                                    ctx.fillText(dataset.data[i], model.x, model.y);
                                }
                            });
                        }
                    }
                }
                }
            >
                
            </Radar>
        )
    }
}

export default RadarComponent
