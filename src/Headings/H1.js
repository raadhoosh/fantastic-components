import React, { Component } from 'react';
import H1Styled from './style/H1Styled';

class H1 extends Component {

  render() {
const{ children } = this.props;

    return (
      <H1Styled
        {...this.props}
      >{children}</H1Styled>
    );
  }
}

export default H1;
