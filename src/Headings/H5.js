import React, {Component} from 'react';
import {H5Wrapper} from './style'

class H5 extends Component {


  render() {
const{children}=this.props;

    return (
      <H5Wrapper
        {...this.props}
      >{children}</H5Wrapper>
    );
  }
}

export default H5;
