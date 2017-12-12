import React, {Component} from 'react';
import {H3Wrapper} from './style'

class H3 extends Component {


  render() {
const{children}=this.props;

    return (
      <H3Wrapper
        {...this.props}
      >{children}</H3Wrapper>
    );
  }
}

export default H3;
