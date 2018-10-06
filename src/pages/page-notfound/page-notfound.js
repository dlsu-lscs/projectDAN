import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class PageNotfound extends Component {
  render() {
    return (
      <div>
        Page not found
        <br></br>
        <Link to = "/">Go back home</Link>
      </div>
    );
  }
}

export default PageNotfound;
