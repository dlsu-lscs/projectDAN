import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SideDrawerComponent.css';

class SideDrawerComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      width: "600px",
      active: true,
    }
    if(this.props.active != null ){
      this.setState({active: this.props.active});
    }
    if(this.props.drawerwidth){
      this.setState({width: this.props.drawerwidth})
    }
    this.untoggle = this.props.untoggle;
  }
  render() {
    if(this.props.active){
      this.setState
    }
    return (
      <div className = {"DrawerHidden "+ (this.props.active? "DrawerWrapper": "")}>
        <div className = {"ShadowDrawerHidden "+ (this.props.active? "ShadowDrawer": "")} onClick = {this.untoggle}></div>
        <div className = {"SideDrawerHidden "+(this.props.active? "SideDrawer": "")} style = {{width: this.state.width}}>
            {this.props.children}
        </div>
      </div>
    );
  }
}

SideDrawerComponent.propTypes = {
    parent: PropTypes.object.isRequired,
};

export default SideDrawerComponent;
