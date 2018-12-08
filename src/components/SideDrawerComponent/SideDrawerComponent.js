import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SideDrawerComponent.css';

class SideDrawerComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      width: "600px",
      childs: <div></div>,
      active: true,
    }
    if(this.props.drawerwidth){
      this.setState({width: this.props.drawerwidth})
    }
    if(this.props.drawerComponents){
      this.setState({childs: this.props.drawerComponents})
    }
    this.untoggle = this.untoggle.bind(this);
  }
  untoggle(){
    this.setState({active: false});
  }
  render() {

    return (
      <div className = {"DrawerHidden "+ (this.state.active? "DrawerWrapper": "")} onClick = {this.untoggle}>
        <div className = {"SideDrawerHidden "+(this.state.active? "SideDrawer": "")} style = {{width: this.state.width}}>
            {this.props.childs}
        </div>
      </div>
    );
  }
}

SideDrawerComponent.propTypes = {
    parent: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired,
};

export default SideDrawerComponent;
