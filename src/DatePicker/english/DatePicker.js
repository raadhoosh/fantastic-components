import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DateInput from './DateInput';
import Calendar from './Calendar';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    let initialDate;

    try {
      initialDate = moment(this.state.date, 'YYYY-MM-DD');
    } catch (e) {
      initialDate = moment.now();
    }

    const initialDay = moment(initialDate).date();
    const initialMonth = moment(initialDate).month() + 1;
    const initialYear = moment(initialDate).year();
    const weekday = moment(initialDate).day();
    this.state = {
      selectedDate: moment(this.props.date),
      showDate: moment(this.props.date),
      year: initialYear,
      month: initialMonth,
      day: initialDay,
      weekDay: weekday,
      currentYear: initialYear,
      currentMonth: initialMonth,
      currentDay: initialDay,
      currentWeekday: weekday
    };
    this.onShowDateChanged = this.onShowDateChanged.bind(this);
    this.onSelectedDateChanged = this.onSelectedDateChanged.bind(this);
  }


  onShowDateChanged(newDate) {
    this.setState({
      showDate: newDate
    });
  }

  onSelectedDateChanged(newDate){
    this.setState({
      selectedDate: newDate
    });
  }

  render() {
    return (
      <div>
        <div>
          <DateInput inputValue={this.state.selectedDate}
                     inputOnClick={this.toggleCalendar}
          />
          <Calendar
            year={this.state.year}
            month={this.state.month}
            day={this.state.day}
            weekDay={this.state.weekDay}
            currentYear={this.state.currentYear}
            currentMonth={this.state.currentMonth}
            currentDay={this.state.currentDay}
            currentWeekday={this.state.currentWeekday}

            onShowDateChanged={this.onShowDateChanged}
            onSelectedDateChanged={this.onSelectedDateChanged}

            selectedDate={this.state.selectedDate}
            showDate={this.state.showDate}
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
  inputClassName: PropTypes.string
};

export default DatePicker;

