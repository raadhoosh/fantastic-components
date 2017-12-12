import React, { Component } from 'react';
import { H2Wrapper } from './style';

class H2 extends Component {
  render() {
    return (
      <H2Wrapper
        {...this.props}
      >{this.props.children}</H2Wrapper>
    );
  }
}

export default H2;
