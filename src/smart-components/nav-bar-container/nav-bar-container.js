import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { template } from './template';
import './nav-bar-container.css';
import {login, logout} from '../../apis/google_login';
//import { template } from './template';
class NavBarContainer extends Component {
    constructor(props){
        super(props);
        
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.state = {
            login: this.login,
            logout: this.logout,
        }
    }

    login(){
        login();
    }
    logout(){
        logout();
        window.location.reload(); //lazies solution, prefer to reset states rather than reload
    }
    render() {
        return ( template(this) );
    }

}

NavBarContainer.propTypes = {
    history: PropTypes.object.isRequired
};
const mapStateToProps = state => {
    console.log("STAATE", state);
    return { user: state.authReducer.user };
}
export default connect(mapStateToProps, null)(withRouter(NavBarContainer));
