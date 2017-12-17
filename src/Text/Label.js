import React from 'react';
import LabelStyled from './LabelStyled';

class Label extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <LabelStyled {...this.props}>{children}</LabelStyled>
    );
  }
}

export default Label;
