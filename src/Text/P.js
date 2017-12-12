import React from 'react';
import { PWrapper } from './style';

class P extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <PWrapper {...this.props}>{children}</PWrapper>
    );
  }
}

export default P;
