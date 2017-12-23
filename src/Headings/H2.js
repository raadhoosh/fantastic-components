import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

H2.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  inverse: PropTypes.bool,
  color: PropTypes.string,
  theme: PropTypes.object
};

export default H2;
