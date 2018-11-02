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
            tableHeader.push(<td key = {i}>{headers[i]}</td>)
        }
        table.push(<tr key = "0" className ="TableHeader">{tableHeader}</tr>);
        for (let i = 0; i < rows.length; i++) {
            let tableRow = [];
            for (let j = 0; j < rows[i].length; j++) {
                tableRow.push(<td key = {j}>{rows[i][j]}</td>)
            }
            table.push(<tr key = {i + 1} className = "TableRow">{tableRow}</tr>);
        }
        return table;
    }
    render() {
        return (
            <table className ="TableComponent">
                <tbody>
                    { this.createTable() }
                </tbody>
                
            </table>
        );
    }
}

export default TableComponent;