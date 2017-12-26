import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DateInputStyled from './style/DateInputStyled';

class DateInput extends Component {
  render() {
    const {inputValue, inputOnClick, inputClassName} = this.props;

    return <DateInputStyled type='text'
                            className={inputClassName}
                            value={inputValue.format('YYYY-MM-DD')}
                            onClick={inputOnClick}
    />;
  }
}

DateInput.propTypes = {
  inputValue: PropTypes.instanceOf(moment),
  inputOnClick: PropTypes.func,
  inputClassName: PropTypes.string
};

DateInput.defaultProps = {
  inputClassName: 'datepicker__input'
};

export default DateInput;
