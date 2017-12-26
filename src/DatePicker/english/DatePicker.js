import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DateInput from './DateInput';
import Calendar from './Calendar';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(props.date),
    };
  }

  render() {

    const {inputClassName} = this.props;

    return (
      <div>
        <div>
          <DateInput inputValue={this.state.date}
                     inputOnClick={this.toggleCalendar}
                     inputClassName={inputClassName}
          />
          <Calendar/>
        </div>
      </div>
    );
  }
}

DatePicker.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  date: PropTypes.oneOfType([
    PropTypes.instanceOf(moment),
    PropTypes.instanceOf(Date)
  ]),
  inputClassName: PropTypes.string,
};

export default DatePicker;

