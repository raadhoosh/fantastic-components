import React, {Component} from 'react';
import {H6Wrapper} from './style'

class H6 extends Component {


  render() {
const{children}=this.props;

    return (
      <H6Wrapper
        {...this.props}
      >{children}</H6Wrapper>
    );
  }
}

export default H6;
