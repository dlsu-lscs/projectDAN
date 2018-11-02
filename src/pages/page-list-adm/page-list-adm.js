import React, { Component } from 'react';
import './page-list-adm.css';

import NavigationComponent from '../../components/navigation-component/navigation-component';
import OverviewComponent from '../../components/OverviewComponent/OverviewComponent';
import TableComponent from '../../components/table-component/table-component';

class PageListADM extends Component {

    constructor({ match }) {
        super();
        this.state={
            overviewTitle: "ADM Submissions", 
            overviewDescription: "Insert ADM Submissions description here.", 
            submissionsValue: "26", 
            awaitingValue: "4", 
            statsData: {
                labels: ["Early Approved", "Late Approved", "Pended", "On Hold",],
                datasets: [{
                    label: "My First dataset",
                    backgroundColor: ['rgb(43,229,213)', 'rgb(4,192,225)', 'rgb(8,152,216)', 'rgb(89,107,178)'],
                    // borderColor: 'rgb(255, 99, 132)',
                    data: [7, 10, 5, 2,],
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
            tableHeaders: [ '', 'Last Updated', 'Name', 'Status', 'Remarks'],
            // dataLabels: [ 'dateTime', 'Name', 'Status', 'Remarks'],
            tableData: [ {
                dateTime: '9/10/2018 13:50:06',
                name: 'Cat Feeding Around DLSU',
                status: 'Early Approved',
                remarks: '',
            },
            {
                dateTime: '9/10/2018 13:50:06',
                name: 'Junior Officer Extravaganza',
                status: '',
                remarks: 'No signature and name of person who submitted the documents',
            },
            ]
        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <NavigationComponent />
                <OverviewComponent overviewTitle={ this.state.overviewTitle }
                    overviewDescription={ this.state.overviewDescription} 
                    submissionsValue={ this.state.submissionsValue }
                    awaitingValue={ this.state.awaitingValue }
                    statsData={ this.state.statsData }
                    statsOptions={ this.state.statsOptions }/>
                <TableComponent tableName="Submitted APS"
                    tableHeads={ this.state.tableHeaders}
                    tableData={ this.state.tableData}
                    />
            </div>
        );
    }
}

export default PageListADM;