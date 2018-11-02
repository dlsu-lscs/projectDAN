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
            results: []
        }
        this.toggleEditable = this.toggleEditable.bind(this)
        this.getSurveyResults = this.getSurveyResults.bind(this)
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
                    parent = {this}
                    value = { mostRecent[field][i] }
                    min = "0"
                    max = {document.PostactsDetails.Anp}
                    ></NumberInputComponent>);
            }
            results.push(row);
            ctr++;
        }
        console.log(results)
        return results
    }

    toggleEditable () {
        let results = this.state.results
        for (let i = 0; i < results.length; i++) {
            for (let j = 1; j < results[i].length; j++) {
                results[i][j].changeEditable();
            }
        }
    }
    componentDidMount(){
        let { id } = this.props;
        if( documents[id] != null){
            let data = this.getSurveyResults(id);
            this.setState({found: true, document: documents[id], results: data});
            console.log(this.state.results)
        }

        // console.log(documents);
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
