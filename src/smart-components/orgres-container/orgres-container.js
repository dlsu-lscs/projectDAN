import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './orgres-container.css';

import { _setInputState } from '../../helpers/InputHandlerHelper';

import { auth } from '../../utils/firebase';

import { template } from './template';

// import { documents } from '../../utils/databse-sample';
import { documents } from './databse-sample';

import Chart from 'chart.js';

class OrgresContainer extends Component {
    constructor() {
        super();
        this.state = {
            document: {},
            chart: "",
            data: [],
            editable: false
        }
        this.getSurveyData = this.getSurveyData.bind(this)
        this.changeEditable = this.changeEditable.bind(this)
    }

    getSurveyData (id) {
        let data = [];
        var field;
        let document = documents[id]
        var mostRecent = document.OrgresDetails[document.OrgresDetails.length - 1]
        // console.log(mostRecent);
        for (field in mostRecent) {
            let row = []
            for (let i = 0; i < mostRecent[field].length; i++) {
                row.push(mostRecent[field][i])
            }
            data.push(row);
        }
        // console.log(results)
        return data
    }
    
    componentDidMount(){
        let { id } = this.props;
        if( documents[id] != null){
            let data = this.getSurveyData(id);     
            this.setState({found: true, document: documents[id], data: data});
            // console.log(this.state.results)
        }

        // console.log(documents);
    }
    
    changeEditable() {
        if (this.state.editable) {
            var fields =  document.getElementsByClassName("NumberInputField")
            var questions = {}
            for (let i = 0; i < 5; i++) {
                var arr = []
                for (let j = 0; j < 5; j++) {
                    arr.push(fields[5 * i + j].value)
                }
                questions["Q" + (i + 1)] = arr
            }
            this.state.document.OrgresDetails.push(questions)
            /*
                insert questions to database
            */
            
        }
        
        this.setState({editable: !this.state.editable})
    }

    render() {
        if(!this.state.found ){
            return(
                <div>Document not found</div>
            )
        }
        // console.log('rendered.')
        return (template(this));
    }
}

OrgresContainer.propTypes = {
    history: PropTypes.object.isRequired
};

export default withRouter(OrgresContainer);
