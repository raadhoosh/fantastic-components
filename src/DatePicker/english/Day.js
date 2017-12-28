import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DayStyled from './style/DayStyled';

class Day extends Component {

  shouldComponentUpdate(nextProps) {
    return nextProps.selected !== this.props.selected ||
      nextProps.disabled !== this.props.disabled ||
      nextProps.isCurrentMonth !== this.props.isCurrentMonth;
  }

  handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    const { onClick, day } = this.props;

    if (onClick) {
      onClick(day);
    }
  }

  render() {
    const { day, disabled } = this.props;

    return (
      <DayStyled
        onClick={this.handleClick.bind(this) }
        disabled={disabled}
        {...this.props}
      >
        {day}
      </DayStyled>
    );
  }
}

Day.propTypes = {
  day: PropTypes.object.isRequired,
  isCurrentMonth: PropTypes.bool,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

export default Day;
