import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.css'
import IconStyled from './style/IconStyled';

class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      iconClass
    } = this.props;

    return (
      <IconStyled
        {...this.props}
        onClick={this.props.onClick}
        className={`fa fa-${iconClass}`}
        aria-hidden="true"
      />
    );
  }
}

Icon.propTypes = {
  devider: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  iconClass: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  theme: PropTypes.object,
  style: PropTypes.object,
  color: PropTypes.string,
  xxsmall: PropTypes.bool,
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  larg: PropTypes.bool,
  xlarg: PropTypes.bool,
  xxlarg: PropTypes.bool,
  right: PropTypes.bool,
  left: PropTypes.bool,

  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  inverse: PropTypes.bool,
};

export default Icon;
