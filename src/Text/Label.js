import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LabelStyled from './style/LabelStyled';

class Label extends Component {
  render() {
    const { children } = this.props;

    return (
      <LabelStyled {...this.props}>{children}</LabelStyled>
    );
  }
}

Label.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  inverse: PropTypes.bool,
  pointer: PropTypes.bool,
  color: PropTypes.string,
  onClick: PropTypes.func
};

export default Label;
