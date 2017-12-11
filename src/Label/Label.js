import React from 'react';
import LabelWrapper from './style';

class Label extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <LabelWrapper {...this.props}>{children}</LabelWrapper>
    );
  }
}

export default Label;
