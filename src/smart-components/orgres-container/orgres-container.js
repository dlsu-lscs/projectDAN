import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './orgres-container.css';

import InputComponent from '../../components/InputComponent/InputComponent';
import TableComponent from '../../components/TableComponent/TableComponent';

import { _setInputState } from '../../mixins/InputHandlerMixin';

import { auth } from '../../utils/firebase';

import { template } from './template';

import { documents } from '../../utils/databse-sample';

class OrgresContainer extends Component {
    constructor(){
        super();
        this.state = {
            found = false,
            document: {}
        }
    }
    componentDidMount(){
        let { id } = this.props;
        if( documents[id] != null){
            this.setState({found: true});
            this.setState({document: documents[id]});
        }
        console.log(documents);
    }
    render() {
        if(!this.state.found ){
            return(
                <div>Document not found</div>
            )
            return (template(this));
        }
    }
}

OrgresContainer.propTypes = {
    history: PropTypes.object.isRequired
};

export default withRouter(OrgresContainer);
