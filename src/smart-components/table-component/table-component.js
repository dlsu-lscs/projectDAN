import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './table-component.css';
import { Link } from 'react-router-dom';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'


export default class TableComponent extends Component {
    constructor() {
        super();
        this.state={
            searchString: '',
            showDateFilter: false,
            dateFilter: {
                startDate: new Date(2018,1,1,0,0,0),
                endDate: new Date(),
                key: 'selection',
            },
            filters: [],
        }

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSearchChange = (e) => {
        this.setState({ searchString:e.target.value });
    }

    handleSelect(range){
        console.log(range);
        console.log(range.selection.startDate);
        this.setState({
            dateFilter: {
                startDate: range.selection.startDate,
                endDate: range.selection.endDate,
                key: 'selection',
            }
        });
    }
    
    predicateBy(prop){
        return function(a,b){
            if( a[prop] > b[prop]){
                return 1;
            }else if( a[prop] < b[prop] ){
                return -1;
            }
            return 0;
        }
    }

    loadData(headers, data, sort) {
        var tableHeaders = (<thead>
            { headers.map(function(colName) {
                return <th className="label">{colName}</th>; })}
        </thead>);

        if(sort !== null) {
            data.sort( this.predicateBy(sort) );
        }

        var tableBody = data.map(function(row, i) {
            return (
            <tr className="row-data" >
                <td>
                    <Link className="link" to={ 'document/' + row['id'] }>{ i + 1 }</Link>                
                </td>
                {Object.keys(row).map(function(key, index){
                    if(row[key] == "remarks") {
                        return <td className="bold"> 
                            <Link className="link" to={ 'document/' + row['id'] }>{ row[key] }</Link>
                        </td>;
                    } else if(key=="status") {
                        if(row[key] == "Early Approved") {
                            return <td>
                                <Link className="link" to={ 'document/' + row['id'] }>
                                    <div className="status-label status-ea">{ row[key] }</div>                                
                                </Link>
                            </td>;
                        } else {
                            return <td>
                                <Link className="link" to={ 'document/' + row['id'] }>{ row[key] }</Link>
                            </td>;
                        }
                    } else if(key!="id")
                        return <td> 
                            <Link className="link" to={ 'document/' + row['id'] }>{ row[key] }</Link>                        
                        </td>;
                })}
            </tr>); 
        });

        return { tableHeaders, tableBody };
    }

    filterDate() {

    }

    render() {

        let { tableName, tableHeads, tableData } = this.props;

        var searchKey = this.state.searchString.trim().toLowerCase();
        if(searchKey.length > 0) {
            tableData = tableData.filter(function(i) {
                console.log(i);
                return i.name.toLowerCase().match( searchKey );
            })
        }

        let { tableHeaders, tableBody } = this.loadData(tableHeads, tableData, 'name');

        return (
            <section id="table-content">
                <div id="table-name">
                    { tableName }
                </div>
                <div id="table-search-container">
                    <div id="table-search-container-l" className="table-search-container-item">
                    
                    </div>
                    <div id="table-search-container-r" className="table-search-container-item">
                        {this.state.showDateFilter == true &&
                            <div id="date-range-container">
                                <DateRangePicker
                                    ranges={[this.state.dateFilter]}
                                    showSelectionPreview={true}
                                    moveRangeOnFirstSelection={false}
                                    onChange={this.handleSelect}
                                    />
                            </div>
                        }
                        <div id="calendar-selected" onClick={() => { this.setState({showDateFilter: !this.state.showDateFilter}) } }>
                            <div className="input-icon">
                                <FontAwesomeIcon icon={faCalendarAlt} />
                            </div>
                            <p>{ this.state.dateFilter.startDate.toLocaleDateString() } - { this.state.dateFilter.endDate.toLocaleDateString() }</p>
                        </div>
                        <div className="input-container-icon">
                            <input type="text" value={this.state.searchString} onChange={this.handleSearchChange} placeholder="Search"/>                        
                            <div className="input-icon">
                                <FontAwesomeIcon icon={faSearch} />
                            </div>    
                        </div>
                        
                    </div>
                    
                    
                </div>
                <div id="table-filter-container">
                
                </div>
                <div id="table-container">
                    <table cellPadding="0" cellSpacing="0">
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

// export default TableComponent;