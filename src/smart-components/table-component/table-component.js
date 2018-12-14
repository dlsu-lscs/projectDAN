import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './table-component.css';
import { Link } from 'react-router-dom';
import Moment from 'moment';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCalendarAlt, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'


export default class TableComponent extends Component {
    constructor() {
        super();
        this.state={
            searchString: '',
            sortBy: 'Last Updated',
            sortAsc: false,
            showDateFilter: false,
            dateFilter: {
                startDate: new Date(2018,1,1,0,0,0),
                endDate: new Date(),
                key: 'selection',
            },
            filters: [],
        }

        this.handleSortChange = this.handleSortChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSortChange = (param) => {
        // TODO: un-brute force
        if(param == this.state.sortBy) {
            this.setState({ sortAsc: !this.state.sortAsc})
        } else {
            this.setState({ sortBy: param, sortAsc: true });
        }
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
        if(this.state.sortAsc) {
            if(prop == 'Last Updated') {
                return function(a, b) {
                    var dA = Moment(a[prop], 'DD/MM/YYYY HH:mm:ss');
                    var dB = Moment(b[prop], 'DD/MM/YYYY HH:mm:ss');
    
                    if( dA > dB){
                        return 1;
                    }else if( dA < dB ){
                        return -1;
                    }
                    return 0;
                }
            } else {
                return function(a,b){
                    if( a[prop] > b[prop]){
                        return 1;
                    }else if( a[prop] < b[prop] ){
                        return -1;
                    }
                    return 0;
                }
            } 
        } else {
            if(prop == 'Last Updated') {
                return function(a, b) {
                    var dA = Moment(a[prop], 'DD/MM/YYYY HH:mm:ss');
                    var dB = Moment(b[prop], 'DD/MM/YYYY HH:mm:ss');
    
                    if( dA > dB){
                        return -1;
                    }else if( dA < dB ){
                        return 1;
                    }
                    return 0;
                }
            } else {
                return function(a,b){
                    if( a[prop] > b[prop]){
                        return -1;
                    }else if( a[prop] < b[prop] ){
                        return 1;
                    }
                    return 0;
                }
            } 
        }
        
            
    }

    loadData(headers, data, sort, generalData) {
        // create JSX for table headers
        var tableHeaders = (<tr>
            { headers.map((colName) => {
                return <th className="label" 
                            onClick={() => { this.handleSortChange( colName ) } }>{colName}
                            {colName == this.state.sortBy && this.state.sortAsc ? <span className="th-sort"><FontAwesomeIcon icon={faCaretUp} /></span> : <span className="th-sort"></span> }
                            {colName == this.state.sortBy && !this.state.sortAsc ? <span className="th-sort"><FontAwesomeIcon icon={faCaretDown} /></span> : <span className="th-sort"></span> }
                    </th>; })}
        </tr>);

        // format table data
        var formattedData = [];
        data.forEach((item, i) => {
            var remarksCombined = '';
            if(item['Remarks'] != null) {
                Object.keys(item['Remarks']).map(function(key, index){
                    if(index > 0) {
                        remarksCombined = remarksCombined.concat(", ");
                    }
                    remarksCombined = remarksCombined.concat(item['Remarks'][key])
                });
            }

            var obj = {};
            obj[headers[1]] = item[headers[1]];
            obj[headers[2]] = item[headers[2]];
            obj[headers[3]] = item[headers[3]];
            obj[headers[4]] = remarksCombined;

            formattedData.push(obj);
        });

        // sort data
        formattedData.sort( this.predicateBy(this.state.sortBy) );

        // create JSX for table body 
        var tableBody = formattedData.map(function(row, i) {
            var trId = i;
            return (
            <tr className="row-data" >
                <td>
                    <Link className="link" to={ 'document/' + trId }>{ i + 1 }</Link>                
                </td>
                {Object.keys(row).map(function(key, index){
                    // TODO: Generalize to make it work for ADM
                    if(row[key] == "Remarks") {
                        return <td className="bold"> 
                            <Link className="link" to={ 'document/' + trId }>{ row[key]}</Link>
                        </td>;
                    } else if(key=="Status") {
                        if(row[key] == "Early Approved") {
                            return <td>
                                <Link className="link" to={ 'document/' + trId }>
                                    <div className="status-label status-ea">{ row[key] }</div>                                
                                </Link>
                            </td>;
                        } else if(row[key] == "Late Approved") {
                            return <td>
                                <Link className="link" to={ 'document/' + trId }>
                                    <div className="status-label status-la">{ row[key] }</div>                                
                                </Link>
                            </td>;
                        } else{
                            return <td>
                                <Link className="link" to={ 'document/' + trId }>{ row[key] }</Link>
                            </td>;
                        }
                    } else if(key!="id") {
                        return <td> 
                            <Link className="link" to={ 'document/' + trId }>{ row[key] }</Link>                        
                        </td>;
                    }
                        
                })}
            </tr>); 
        });

        return { tableHeaders, tableBody };
    }

    filterDate() {

    }

    render() {

        let { tableName, tableHeads, tableData, generalData } = this.props;

        var searchKey = this.state.searchString.trim().toLowerCase();
        if(searchKey.length > 0) {
            tableData = tableData.filter(function(i) {
                console.log(i);
                return i.Title.toLowerCase().match( searchKey );
            })
        }

        let { tableHeaders, tableBody } = this.loadData(tableHeads, tableData, 'Last Updated', generalData);

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
                        <thead>
                            { tableHeaders }
                        </thead>
                        <tbody>
                            { tableBody }
                        </tbody>
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
