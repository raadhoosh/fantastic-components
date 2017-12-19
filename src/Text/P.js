import React from 'react';
import PStyled from './style/PStyled';

class P extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <PStyled {...this.props}>{children}</PStyled>
    );
  }
}

export default P;
