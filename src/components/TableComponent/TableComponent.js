import React, { Component } from 'react';
import './TableComponent.css';

/*
*    A table component.
*    Props:
*        headers - an array that will be the table's column headers.
*        rows - a 2D array that will be the table's content.
*/
class TableComponent extends Component {
    createTable = () => {
        const { headers, rows } = this.props;  
        let table = [];
        let tableHeader = [];
        for (let i = 0; i < headers.length; i++) {
            tableHeader.push(<th class="TableHeader">{headers[i]}</th>)
        }
        table.push(<tr> {tableHeader} </tr>);
        for (let i = 0; i < rows.length; i++) {
            let tableRow = [];
            for (let j = 0; j < rows[i].length; j++) {
                tableRow.push(<td>{rows[i][j]}</td>)
            }
            table.push(<tr class = "TableRow"> {tableRow} </tr>);
        }
        return table;
    }
    render() {
        return (
            <table class="TableComponent">
                { this.createTable() }
            </table>
        );
    }
}

export default TableComponent;