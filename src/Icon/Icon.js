import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css'
import IconWrapper from './style'

class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      iconClass,
      style
    } = this.props;

    return (
      <IconWrapper
        {...this.props}
        onClick={this.props.onClick}
        className={`fa fa-${iconClass}`}
        aria-hidden="true"
        style={style}
      />
    );
  }
}

export default Icon;
