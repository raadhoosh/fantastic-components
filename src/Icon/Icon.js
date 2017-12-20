import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css'
import IconStyled from './style/IconStyled';
import PropTypes from 'prop-types';

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
  iconClass: PropTypes.string
};

export default Icon;
