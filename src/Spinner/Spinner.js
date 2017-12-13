import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import SpinnerWrapper from './style';


class Spinner extends Component {


  render() {
    const { spin, plus } = this.props;

    return (
      <SpinnerWrapper
        {...this.props}
        className={`fa fa-${spin} fa-spin ${plus && 'fa-pulse'} fa-3x fa-fw`}
        aria-hidden="true"
      />
    );
  }
}

export default Spinner;
