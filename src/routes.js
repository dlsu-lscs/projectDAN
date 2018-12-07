import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBarContainer from './smart-components/nav-bar-container/nav-bar-container';
import PageLoading from './pages/page-loading/page-loading';
import PageLogin from './pages/page-login/page-login'; //replace this?
import PageSignup from './pages/page-signup/page-signup';
import PageNotfound from './pages/page-notfound/page-notfound';
import { GetKeys } from './actions/authentication';
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
        
        if(this.state.user){
            callback();
        }
        else{
            window.gapi.load("client", (user) => {
                this.props.initClient(callback)
                this.setState({user: user}) // I have no idea if this has an effect XD
            });
        }
        this.props.GetKeys();
        //loading is finished when all of google's promises are done
        //this.props.AuthenticateUser();
    }
    render() {
        if(this.state.loading){
            return(
                <PageLoading></PageLoading>
            );
        }
        else
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <NavBarContainer></NavBarContainer>
                        <Switch>
                            <Route path = "/" component = {PageLogin} exact></Route>
                            <Route path = "/signup" component = {PageSignup} exact></Route>
                            <Route component = {PageNotfound}></Route>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
export default connect(null, { GetKeys, initClient })(Routes);
