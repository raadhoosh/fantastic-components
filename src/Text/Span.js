import React from 'react';
import { SpanWrapper } from './style';

class Span extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <SpanWrapper {...this.props}>{children}</SpanWrapper>
    );
  }
}

export default Span;
