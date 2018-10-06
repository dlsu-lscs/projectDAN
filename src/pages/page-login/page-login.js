import React, { Component } from 'react';
import './page-login.css';

import LoginContainer from '../../smart-components/login-container/login-container';
class PageLogin extends Component {
  render() {
    return (
      <div className="page-login">
        <LoginContainer></LoginContainer>
      </div>
    );
  }
}

export default PageLogin;
