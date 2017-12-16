import React from 'react';
import SpanStyled from './SpanStyled';

class Span extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <SpanStyled {...this.props}>{children}</SpanStyled>
    );
  }
}

export default Span;
