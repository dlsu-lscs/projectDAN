import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './orgres-container.css';

import InputComponent from '../../components/InputComponent/InputComponent';
import TableComponent from '../../components/TableComponent/TableComponent';

import { _setInputState } from '../../mixins/InputHandlerMixin';

import { auth } from '../../utils/firebase';

class OrgresContainer extends Component {
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
            <div className = "formContainer">
                <form onSubmit = {this.login}>
                    <InputComponent 
                        parent = { this }
                        name = "email"
                        value = { this.state.email }
                        type = "text" 
                        _setInputState = { _setInputState }
                    >
                    </InputComponent>
                    <InputComponent 
                        parent = { this }
                        name = "password"
                        value = { this.state.password }
                        type = "password" 
                        _setInputState = { _setInputState }
                    >
                    </InputComponent>
                    <button type = "submit" className = "loginButton">Login</button>
                    <button type = "button" onClick = {() => {history.push('/signup')}} className = "loginButton" >No account yet?</button>
                </form>
            </div>
        </div>
        );
    }
    login(event){
        event.preventDefault();
        console.log("Logged in as: \n"+this.state.email+"\n"+this.state.password);
        auth.signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
        // Handle Errors here.
        console.warn(error);
        // ...
        });
    }
}

LoginContainer.propTypes = {
    history: PropTypes.object.isRequired
};

export default withRouter(LoginContainer);
