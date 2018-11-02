import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './table-component.css';

class TableComponent extends Component {
  
  render() {

    let { tableName, tableHeads, tableData } = this.props;

    let tableHeaders = (<thead>
            { tableHeads.map(function(colName) {
              return <th className="label">{colName}</th>; })}
      </thead>);

    let tableBody = tableData.map(function(row, i) {
      return (
        <tr className="row-data">
            <td>{ i + 1}</td>
            {Object.keys(row).map(function(key, index){
                if(index == 3) {
                    return <td className="bold"> { row[key] } </td>;
                } else if(key=="status") {
                    if(row[key] == "Early Approved") {
                        return <td>
                            <div class="status-label status-ea">{ row[key] }</div>
                        </td>;
                    } else {
                        return <td>
                            { row[key] }
                        </td>;
                    }
                } else
                    return <td> { row[key] } </td>;
            })}
        </tr>); });

    return (
        <section id="table-content">
            <div id="table-name">
                { tableName }
            </div>
            <div id="table-search-container"></div>
            <div id="table-filter-container"></div>
            <div id="table-container">
                <table cellpadding="0" cellspacing="0">
                    { tableHeaders }
                    { tableBody }
                </table>
            </div>
        </section>
    );
  }
}

/*
  We use PropTypes to validate the props we give for this class,
  if there is a mistake in assigning a proptype this code would allow us to see the error in the console
*/
TableComponent.propTypes = {
    tableName: PropTypes.string.isRequired, 
    tableHeads: PropTypes.array.isRequired, 
    tableData: PropTypes.array.isRequired,
};

export default TableComponent;
