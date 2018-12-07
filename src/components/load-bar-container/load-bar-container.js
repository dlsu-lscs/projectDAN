import { Component } from 'react';
import { template } from './template';
import './load-bar-container.css';
//import { template } from './template';
class LoadBarContainer extends Component {

    render() {
        return ( template(this) );
    }

}

export default LoadBarContainer;
