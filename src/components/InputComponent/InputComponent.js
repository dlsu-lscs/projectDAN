import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InputComponent.css';

class InputComponent extends Component {
  
  render() {

    const { parent, name, value, type,  _setInputState, errorMessage, required} = this.props;
    return (
      <div className="InputComponent">
        <input 
            name = { name }
            value = { value } 
            type = { type || "text" }
            onChange = { (event) => { _setInputState(event, parent) } }
            className = "InputField"
            placeholder = { name }
            required = { required }
        >
        </input>
         <span className = "input_error">{ errorMessage || "sample error message" }</span>
      </div>
    );
  }
}

/*
  We use PropTypes to validate the props we give for this class,
  if there is a mistake in assigning a proptype this code would allow us to see the error in the console
*/
InputComponent.propTypes = {
    parent: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    _setInputState: PropTypes.func,
    errorMessage: PropTypes.string,
    required: PropTypes.bool,
};

export default InputComponent;
