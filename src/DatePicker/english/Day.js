import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DayStyled from './style/DayStyled';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    const { onDayClick, day } = this.props;

    if (onDayClick) {
      onDayClick(day);
    }
  }

  render() {
    const {
      day,
      isSelected,
      isToday,
      disabled,
      primary,
      secondary,
      info,
      success,
      danger,
      warning
    } = this.props;

    const colorProps = {
      primary,
      secondary,
      info,
      success,
      danger,
      warning
    };

    return (
      <DayStyled
        onClick={this.handleClick}
        isSelected={isSelected}
        isToday={isToday}
        disabled={disabled}
        {...colorProps}
      >
        {day}
      </DayStyled>
    );
  }
}

Day.propTypes = {
  day: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isToday: PropTypes.bool,
  disabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  onDayClick: PropTypes.func,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool
};

Day.defaultProps = {
  isToday: false,
  disabled: false,
  isSelected: false,
  onDayClick: null
};

export default Day;
