import React, { Component } from 'react';
import './page-activity-orgres.css';

// import DocumentContainer from '../../smart-components/document-container/document-container';
import OrgresContainer from '../../smart-components/orgres-container/orgres-container';
class PageActivityOrgres extends Component {

  constructor({ match }){
    super();
    this.state = {
      id: match.params.id
    }
  }
  render() {
    return (
      <OrgresContainer id = { this.state.id }></OrgresContainer>
    );
  }
}

export default PageActivityOrgres;
