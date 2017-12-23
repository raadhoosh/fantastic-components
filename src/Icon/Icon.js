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
      iconClass,
      rtl
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
  iconClass: PropTypes.string,
  className: PropTypes.string,
  devider: PropTypes.bool,
  onClick: PropTypes.func,
  theme: PropTypes.object,
  style: PropTypes.object,
  color: PropTypes.string,
  xxsmall: PropTypes.string,
  xsmall: PropTypes.string,
  small: PropTypes.string,
  medium: PropTypes.string,
  larg: PropTypes.string,
  xlarg: PropTypes.string,
  xxlarg: PropTypes.string,
  right: PropTypes.bool,
  left: PropTypes.bool,
};

export default Icon;
