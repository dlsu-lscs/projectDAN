import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoadBarContainer from './components/load-bar-container/load-bar-container';

import NavBarContainer from './smart-components/nav-bar-container/nav-bar-container';
// import PageLoading from './pages/page-loading/page-loading';
import PageLogin from './pages/page-login/page-login'; //replace this?
import PageViewSpecificDocument from './pages/page-view-specific-document/page-view-specific-document'
import PageSignup from './pages/page-signup/page-signup';
import PageNotfound from './pages/page-notfound/page-notfound';
import { GetKeys } from './actions/authentication';

import PageActivityOrgres from './pages/page-activity-orgres/page-activity-orgres';
import { AuthenticateUser } from './actions/authentication';
import PageListADM from './pages/page-list-adm/page-list-adm';
import { initClient } from '../src/utils/google-auth';
class Routes extends Component {
    constructor(){
        super();
        this.state = {
            loading: true,
            user: null,
        }
    }

    /*
        TODO: 
            - Method for getting auth user and loading necessary assets
            - Flag the loading variable once all the assets and ajax calls have been completed
    */
    componentDidMount(){
        const callback = () => {
            this.setState( { loading: false })
        }
        
        this.props.GetKeys();
        
        if(this.state.user){
            callback();
        }
        else{
            window.gapi.load("client", (user) => {
                this.props.initClient(callback)
                this.setState({user: user}) // I have no idea if this has an effect XD
            });
        }
        //loading is finished when all of google's promises are done
        //this.props.AuthenticateUser();
    }
    render() {
        // if(this.state.loading){
        //     return <LoadBarContainer></LoadBarContainer>
        // }
        // else
        return(
            <BrowserRouter>
                <div>
                    {String(this.state.loading) === 'true' ?
                        <LoadBarContainer></LoadBarContainer>:
                        <NavBarContainer></NavBarContainer>
                    }
                    <Switch>
                        <Route path = "/" component = {PageLogin} exact></Route>
                        <Route path = "/signup" component = {PageSignup} exact></Route>
                        <Route path = "/signup" component = {PageSignup} exact></Route>
                        <Route path = "/document/:id" component = {PageViewSpecificDocument}></Route>
                        <Route path = "/test-adm" component = {PageListADM} exact></Route>
                        <Route path = "/document/:id/orgres" component = {PageActivityOrgres} exact></Route> 
                        <Route component = {PageNotfound}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
export default connect(null, { GetKeys, initClient })(Routes);
