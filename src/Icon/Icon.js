import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.css'
import I from './style'

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
      <I
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
