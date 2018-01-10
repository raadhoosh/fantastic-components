import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Input from '../../Input/Input';

class DateInput extends Component {
  constructor(props) {
    super(props);
    this.onEditorChange = this.onEditorChange.bind(this);
  }

  onEditorChange() {
  }

  render() {
    const {
      inputValue,
      inputOnClick,
      onFocus,
      onBlur,
      showTime,
      primary,
      secondary,
      info,
      success,
      danger,
      warning

    } = this.props;
    return <div
      style={{position: 'relative', direction: 'ltr'}}
    >
      <Input
        value={inputValue.format(showTime ? 'YYYY/MM/DD HH:mm' : 'YYYY/MM/DD')}
        onChange={this.onEditorChange}
        onClick={inputOnClick}
        onFocus={onFocus}
        onBlur={onBlur}
        icon={'calendar'}
        {...this.props}
      />
    </div>
  }
}

DateInput.propTypes = {
  inputValue: PropTypes.instanceOf(moment),
  inputOnClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  inputClassName: PropTypes.string,
  showTime: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool
};

DateInput.defaultProps = {
  inputClassName: 'datepicker__input',
  showTime: false
};

export default DateInput;
