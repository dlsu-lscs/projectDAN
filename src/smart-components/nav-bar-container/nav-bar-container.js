import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { template } from './template';
import './nav-bar-container.css';
import {handleSignInClick, handleSignOutClick} from '../../utils/google-auth';
//import { template } from './template';
class NavBarContainer extends Component {
    constructor(props){
        super(props);
        
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.state = {
            handleSignInClick: this.login,
            handleSignOutClick: this.logout,
        }
    }

    login(){
        handleSignInClick();
    }
    logout(){
        handleSignOutClick();
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
    return { user: state.authReducer.user };
}
export default connect(mapStateToProps, null)(withRouter(NavBarContainer));
