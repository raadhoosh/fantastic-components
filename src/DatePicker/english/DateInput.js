import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DateInputStyled from './style/DateInputStyled';
import IconStyled from './style/IconStyled';

class DateInput extends Component {
  render() {
    const {inputValue, inputOnClick, inputClassName, onFocus, onBlur} = this.props;

    return <div
      style={{position:'relative', direction:'ltr'}}
    >
      <DateInputStyled type='text'
                       className={inputClassName}
                       value={inputValue.format('YYYY/MM/DD')}
                       onClick={inputOnClick}
                       onFocus={onFocus}
                       onBlur={onBlur}
      />
      <IconStyled className="fa fa-calendar" aria-hidden="true"/>
    </div>
  }
}

DateInput.propTypes = {
  inputValue: PropTypes.instanceOf(moment),
  inputOnClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  inputClassName: PropTypes.string
};

DateInput.defaultProps = {
  inputClassName: 'datepicker__input',
};

export default DateInput;
