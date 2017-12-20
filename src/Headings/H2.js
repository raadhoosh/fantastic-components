import React, { Component } from 'react';
import H2Styled from './style/H2Styled';

class H2 extends Component {
  render() {
    return (
      <H2Styled
        {...this.props}
      >{this.props.children}</H2Styled>
    );
  }
}

export default H2;
