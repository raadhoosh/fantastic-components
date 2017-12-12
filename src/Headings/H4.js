import React, {Component} from 'react';
import {H4Wrapper} from './style'

class H4 extends Component {


  render() {
const{children}=this.props;

    return (
      <H4Wrapper
        {...this.props}
      >{children}</H4Wrapper>
    );
  }
}

export default H4;
