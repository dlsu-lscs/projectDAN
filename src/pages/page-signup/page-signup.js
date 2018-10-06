import React, { Component } from 'react';
import './page-signup.css';

import SignupContainer from '../../smart-components/signup-container/signup-container';
class PageSignup extends Component {
  render() {
    return (
      <div className="page-signup">
        <SignupContainer></SignupContainer>
      </div>
    );
  }
}

export default PageSignup;
