import React, { Component } from 'react';
import './page-login.css';
import { withRouter } from 'react-router-dom';
class PageLogin extends Component {
  render() {
    return (
      <div className="page-login">
        <button onClick = {() => {this.props.history.push('/document/0')}}></button>
      </div>
    );
  }
}


export default withRouter(PageLogin);
