import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { persianNumber } from '../utils/persian';

const styles = {
  wrapper: {},
  button: {
    outline: 'none',
    cursor: 'pointer'
  }
};

export default class Day extends Component {

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
    const { day, disabled, selected, isCurrentMonth, onClick, styles } = this.props;

   /* const className = classnames(styles.dayWrapper, {
      [styles.selected]: selected,
      [styles.currentMonth]: isCurrentMonth
    });*/

    const className = (selected) ? 'selected' : ((isCurrentMonth) ? 'currentMonth' : '');

    return (
      <div className={className}>
        <button
          type="button"
          onClick={this.handleClick.bind(this) }
          disabled={disabled}
          {...this.props}
        >
          { persianNumber(day.format('jD')) }
        </button>
      </div>
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