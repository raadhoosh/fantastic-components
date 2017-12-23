import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.css';
import SpinnerWrapper from './style/SpinnerStyled';


class Spinner extends Component {
  render() {
    const {spin, plus} = this.props;

    return (
      <SpinnerWrapper
        {...this.props}
        className={`fa fa-${spin} fa-spin ${plus && 'fa-pulse'} fa-3x fa-fw`}
        aria-hidden="true"
      />
    );
  }
}

Spinner.propTypes = {
  spin: PropTypes.string,
  plus: PropTypes.string
};

export default Spinner;
