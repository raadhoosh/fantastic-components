import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DayStyled from './style/DayStyled';

class Day extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(event) {

    const { onDayClick, day } = this.props;

    if (onDayClick) {
      onDayClick(day);
    }
  }

  render() {
    const { day, isSelected, isToday } = this.props;
    return (
      <DayStyled
        onClick={this.handleClick}
        isSelected={isSelected}
        isToday={isToday}
      >
        {day}
      </DayStyled>
    );
  }
}

Day.propTypes = {
  day: PropTypes.number.isRequired,
  isToday: PropTypes.bool,
  disabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  onDayClick: PropTypes.func
};

export default Day;
