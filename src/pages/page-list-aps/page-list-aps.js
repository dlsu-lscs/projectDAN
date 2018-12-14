import React, { Component } from 'react';
import './page-list-aps.css';

import NavigationComponent from '../../components/navigation-component/navigation-component';
import OverviewComponent from '../../components/OverviewComponent/OverviewComponent';
import TableComponent from '../../smart-components/table-component/table-component';

import { get_general_data } from '../../apis/pull_general_data';

class PageListAPS extends Component {
    constructor({ match }) {
        super();
        this.state={
            overviewTitle: "APS Submissions", 
            overviewDescription: "Insert APS Submissions description here.", 
            submissionsValue: 0, 
            awaitingValue: 0, 
            statsData: {
                labels: ["Early Approved", "Late Approved", "Pended", "On Hold", "Processing"],
                datasets: [{
                    label: "My First dataset",
                    backgroundColor: ['rgb(43,229,213)', 'rgb(4,192,225)', 'rgb(8,152,216)', 'rgb(89,107,178)', 'rgb(200, 200, 200)'],
                    // borderColor: 'rgb(255, 99, 132)',
                    data: [0, 0, 0, 0, 0],
                }]
            }, 
            statsOptions: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: true,
                    position: 'left',
                }
            }, 
            tableHeaders: [ '', 'Last Updated', 'Title', 'Status', 'Remarks'],
            generalData: [],
        }
        this.generalDataToState = this.generalDataToState.bind(this);
    }

    generalDataToState(data){
        console.log("GEN DATA", data);
        this.setState({ generalData: data});

        this.setState({awaitingValue: this.state.statsData.datasets[0].data[4]});

        this.setState({submissionsValue: this.state.generalData.length});
        var count = 0;
        this.state.generalData.forEach( (item, index) => {
            var statsDataCopy = this.state.statsData;

            if(item.Status == "Early Approved") {
                statsDataCopy.datasets[0].data[0] += 1;
                this.setState({statsData: statsDataCopy});
            } else if(item.Status == "Late Approved") {
                statsDataCopy.datasets[0].data[1] += 1;
                this.setState({statsData: statsDataCopy});
            } else if(item.Status == "Pending" || item.Status == "Pended") {
                statsDataCopy.datasets[0].data[2] += 1;
                this.setState({statsData: statsDataCopy});
            } else if(item.Status == "On Hold") {
                statsDataCopy.datasets[0].data[3] += 1;
                this.setState({statsData: statsDataCopy});
            } else {
                statsDataCopy.datasets[0].data[4] += 1;
                this.setState({statsData: statsDataCopy});
            } 
            count++;
        });
        this.setState({awaitingValue: this.state.statsData.datasets[0].data[4]});
        this.setState({submissionsValue: count});
        console.log(this.state.statsData);
    }

    componentDidMount() {
        
        get_general_data(this.generalDataToState);
    }

    render() {
        return (
            <div>
                {/* <NavigationComponent /> */}
                <OverviewComponent overviewTitle={ this.state.overviewTitle }
                    overviewDescription={ this.state.overviewDescription} 
                    submissionsValue={ this.state.submissionsValue }
                    awaitingValue={ this.state.awaitingValue }
                    statsData={ this.state.statsData }
                    statsOptions={ this.state.statsOptions }/>
                <TableComponent tableName="Submitted APS"
                    tableHeads={ this.state.tableHeaders}
                    tableData={ this.state.generalData}
                    />
            </div>
        );
    }
}

export default PageListAPS;