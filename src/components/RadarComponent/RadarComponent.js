import React from 'react'
import {Radar} from 'react-chartjs-2';

class RadarComponent extends React.Component {
    
    constructor(props) {
        super(props)   
        this.fetchData = this.fetchData.bind(this)
    }

    fetchData() {
        let docu = this.props.document
        let results = [];
        var field;
        var mostRecent = docu.OrgresDetails[docu.OrgresDetails.length - 1]
        // console.log(mostRecent);
        for (field in mostRecent) {
            let row = []
            for (let i = 0; i < mostRecent[field].length; i++) {
                row.push(mostRecent[field][i])
            }
            results.push(row);
        }
        var data = {
            labels: ['1', '2', '3', '4', '5'],
            datasets: [{
                label: "Question 1",
                backgroundColor: "rgba(255,0,0,0.2)",
                borderColor: "rgba(255,0,0,1)",
                pointBackgroundColor: "rgba(255,0,0,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255,0,0,1)",
                data: results[0]
            }, {
                label: "Question 2",
                backgroundColor: "rgba(255,255,0,0.2)",
                borderColor: "rgba(255,255,0,1)",
                pointBackgroundColor: "rgba(255,255,0,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255,255,0,1)",
                data: results[1]
            }, {
                label: "Question 3",
                backgroundColor: "rgba(0,0,255,0.2)",
                borderColor: "rgba(0,0,255,1)",
                pointBackgroundColor: "rgba(0,0,255,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(0,0,255,1)",
                data: results[2]
            }, {
                label: "Question 4",
                backgroundColor: "rgba(0,255,0,0.2)",
                borderColor: "rgba(0,255,0,1)",
                pointBackgroundColor: "rgba(0,255,0,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(0,255,0,1)",
                data: results[3]
            }, {
                label: "Question 5",
                backgroundColor: "rgba(0,255,255,0.2)",
                borderColor: "rgba(0,255,255,1)",
                pointBackgroundColor: "rgba(0,255,255,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(0,255,255,1)",
                data: results[4]
            },]
        }
        return data
    }
    
    render() {
        return (
            <Radar
                ref='chart'
                data = {this.fetchData()}
                options = {{
                    title: {
                        display: true,
                        text: 'Number of Respondents per ORGRES Score'
                    },

                    legend: {
                        position: 'left'
                    },
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
                }}
            >
            </Radar>
        )
    }
}

export default RadarComponent
