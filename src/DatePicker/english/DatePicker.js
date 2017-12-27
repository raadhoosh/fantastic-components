import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DateInput from './DateInput';
import Calendar from './Calendar';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(this.props.date),
    };
    this.CurrentMonth = this.CurrentMonth.bind(this);
  }

  CurrentMonth() {
    let check = moment(this.state.date, 'YYYY/MM/DD');
    let month = check.format('MMMM');
    let day = check.format('D');
    let year = check.format('YYYY');
    return `${month} ${year}`;
  }

  render() {
    return (
      <div>
        <div>
          <DateInput inputValue={this.state.date}
                     inputOnClick={this.toggleCalendar}
          />
          <Calendar
            month={this.CurrentMonth()}
            date={this.state.date}
          />
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

