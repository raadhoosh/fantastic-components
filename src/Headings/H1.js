import React, {Component} from 'react';
import {H1Wrapper} from './style'

class H1 extends Component {


  render() {
const{children}=this.props;

    return (
      <H1Wrapper
        {...this.props}
      >{children}</H1Wrapper>
    );
  }
}

export default H1;
