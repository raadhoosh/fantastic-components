import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-jalaali';
import DateInputStyled from './style/DateInputStyled';
import IconStyled from './style/IconStyled';

class DateInput extends Component {
  constructor(props) {
    super(props);
    this.onEditorChange = this.onEditorChange.bind(this);
  }

  onEditorChange() {
  }

  render() {
    const {
      inputValue, inputOnClick, inputClassName, onFocus, onBlur, showTime
    } = this.props;
    return <div
      style={{position: 'relative', direction: 'ltr'}}
    >
      <DateInputStyled type='text'
                       className={inputClassName}
                       value={inputValue.format(showTime ? 'YYYY/MM/DD HH:mm' : 'YYYY/MM/DD')}
                       onChange={this.onEditorChange}
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
  inputClassName: PropTypes.string,
  showTime: PropTypes.bool
};

DateInput.defaultProps = {
  inputClassName: 'datepicker__input',
  showTime: false
};

export default DateInput;
