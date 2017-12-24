import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SpanStyled from './style/SpanStyled';

class Span extends Component {
  render() {
    const { children } = this.props;

    return (
      <SpanStyled {...this.props}>{children}</SpanStyled>
    );
  }
}

Span.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default Span;
