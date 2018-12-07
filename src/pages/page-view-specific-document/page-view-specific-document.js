import React, { Component } from 'react';
import './page-view-specific-document.css';

import DocumentContainer from '../../smart-components/document-container/document-container';
class PageViewSpecificDocument extends Component {

  constructor({ match }){
    super();
    this.state = {
      id: match.params.id
    }
  }
  render() {
    return (
      <DocumentContainer id = { this.state.id }></DocumentContainer>
    );
  }
}

export default PageViewSpecificDocument;
