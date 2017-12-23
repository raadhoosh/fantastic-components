import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

H1.propTypes = {
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

export default H1;
