import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.css';
import SpinnerWrapper from './style/SpinnerStyled';


class Spinner extends Component {
  render() {
    const {icon, pulse} = this.props;

    return (
      <SpinnerWrapper
        {...this.props}
        className={`fa fa-${icon} fa-spin ${pulse && 'fa-pulse'} fa-3x fa-fw`}
        aria-hidden="true"
      />
    );
  }
}

Spinner.propTypes = {
  icon: PropTypes.string,
  pulse: PropTypes.string
};

export default Spinner;
