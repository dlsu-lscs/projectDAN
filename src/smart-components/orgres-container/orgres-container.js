import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './orgres-container.css';

import { _setInputState } from '../../mixins/InputHandlerMixin';

import { auth } from '../../utils/firebase';

import { template } from './template';

import NumberInputComponent from '../../components/NumberInputComponent/NumberInputComponent';
// import { documents } from '../../utils/databse-sample';
import { documents } from './databse-sample';

class OrgresContainer extends Component {
    constructor() {
        super();
        this.state = {
            document: {},
            results: [],
            editable: false
        }
        this.getSurveyResults = this.getSurveyResults.bind(this)
        this.changeEditable = this.changeEditable.bind(this)
    }

    getSurveyResults (id) {
        let results = [];
        let ctr = 1;
        var field;
        let document = documents[id]
        var mostRecent = document.OrgresDetails[document.OrgresDetails.length - 1]
        // console.log(mostRecent);
        for (field in mostRecent) {
            let row = ["Question " + ctr]
            for (let i = 0; i < mostRecent[field].length; i++) {
                row.push(
                    <NumberInputComponent 
                    value = { mostRecent[field][i] }
                    min = "0"
                    max = {document.PostactsDetails.Anp}
                    // editable = {this.state.editable}
                    ></NumberInputComponent>);
            }
            results.push(row);
            ctr++;
        }
        // console.log(results)
        return results
    }

    componentDidMount(){
        let { id } = this.props;
        if( documents[id] != null){
            let data = this.getSurveyResults(id);
            this.setState({found: true, document: documents[id], results: data});
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
            /*
                insert questions to database
            */
            
        } else {

        }
        this.setState({editable: !this.state.editable})
    }

    render() {
        if(!this.state.found ){
            return(
                <div>Document not found</div>
            )
        }
        return (template(this));
    }
}

OrgresContainer.propTypes = {
    history: PropTypes.object.isRequired
};

export default withRouter(OrgresContainer);
