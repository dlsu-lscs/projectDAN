import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NumberInputComponent.css';

class NumberInputComponent extends Component {
    constructor(){
        
        super();

        this.state = {
           editable: false  
        }
        this.changeEditable = this.changeEditable.bind(this);
    }

    componentDidMount() {
        document.getElementById("ToggleUpdate").addEventListener('click', this.changeEditable, false);
        document.getElementById("Cancel").addEventListener('click', this.changeEditable, false);
    }

    changeEditable() {
        this.setState({editable: !this.state.editable})
    }

    render() {

        const { parent, value, min, max } = this.props;
        let disabled = !this.state.editable
        return (
        <div className="NumberInputComponent">
            <input 
                parent = {parent}
                defaultValue = { value } 
                type = "number"
                min = {min}
                max = {max}
                size= "3"
                className = "NumberInputField"
                disabled = { disabled }
            ></input>
        </div>
    );
  }
}

export default NumberInputComponent;
