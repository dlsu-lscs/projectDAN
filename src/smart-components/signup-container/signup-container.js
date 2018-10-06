import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './signup-container.css';

class SignupContainer extends Component {
    constructor(){
        super();
        this.state = {
            email: "",
            password: ""
        }
        this.login = this.login.bind(this);
    }
    render() {
        let { history } = this.props;
        return (
        <div className="page-login">
            <div class = "formContainer">
                There is no signup at the moment
                <button type = "button" onClick = {() => {history.push('/')}} class = "loginButton" >back to login</button>
            </div>
        </div>
        );
    }
    login(){
        console.log("Logged in as: \n"+this.state.email+"\n"+this.state.password);
    }
}

SignupContainer.propTypes = {
    history: PropTypes.object.isRequired
};

export default withRouter(SignupContainer);
