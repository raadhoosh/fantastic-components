import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MonthStyled from './style/MonthStyled';

class Month extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(event) {

    const { onClick, id } = this.props;

    if (onClick) {
      onClick(id);
    }
  }

  render() {
    const { name, isSelected, isToday ,disabled} = this.props;
    return (
      <MonthStyled
        onClick={this.handleClick}
        isSelected={isSelected}
        isToday={isToday}
        disabled={disabled}
      >
        {name}
      </MonthStyled>
    );
  }
}

Month.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  isToday: PropTypes.bool,
  disabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
};

export default Month;
