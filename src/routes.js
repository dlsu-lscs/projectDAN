import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageLogin from './pages/page-login/page-login';
import PageSignup from './pages/page-signup/page-signup';
import PageListADM from './pages/page-list-adm/page-list-adm';
import PageNotfound from './pages/page-notfound/page-notfound';
import { AuthenticateUser } from './actions/authentication';

class Routes extends Component {
    constructor(){
        super();
        this.state = {
            loading: false
        }
    }

    /*
        TODO: 
            - Method for getting auth user and loading necessary assets
            - Flag the loading variable once all the assets and ajax calls have been completed
    */
    componentDidMount(){
        this.setState( { loading: false });
        this.props.AuthenticateUser();
    }
    render() {
        if(this.state.loading){
            return(
                <div>
                    Loading...
                </div>
            );
        }
        else
        return(
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path = "/" component = {PageLogin} exact></Route>
                        <Route path = "/signup" component = {PageSignup} exact></Route>
                        <Route path = "/test-adm" component = {PageListADM} exact></Route>
                        <Route component = {PageNotfound}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
export default connect(null, { AuthenticateUser })(Routes);
