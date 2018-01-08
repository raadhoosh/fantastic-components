import React, { Component } from 'react';
import LI from './style/LIStyled';
class TabLabel extends Component {



  render() {
    return (
      <LI
        onClick={()=>this.props.onTabChange(this.props.index)}
        {...this.props}
      >
        {this.props.title}
      </LI>
    );
  }
}
export default TabLabel;
