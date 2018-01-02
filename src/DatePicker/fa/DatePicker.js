import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-jalaali';
import DateInput from './DateInput';
import Calendar from './Calendar';
import OutsideAlerter from '../../OutsideAlerter/OutsideAlerter';

class DatePickerFa extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: moment(this.props.date),
      showDate: moment(this.props.date),
      isOpen: false,
      focused: false,
      viewStyle: 'DayView' // DayView , monthView , YearView
    };
    this.onShowDateChanged = this.onShowDateChanged.bind(this);
    this.onSelectedDateChanged = this.onSelectedDateChanged.bind(this);
    this.onViewStyleChanged = this.onViewStyleChanged.bind(this);
    this.onMonthChanged = this.onMonthChanged.bind(this);
    this.onYearChanged = this.onYearChanged.bind(this);
    this.onTimeSet = this.onTimeSet.bind(this);
  }


  onShowDateChanged(newDate) {
    this.setState({
      showDate: newDate
    });
  }

  onSelectedDateChanged(newDate) {
    this.setState({
      selectedDate: newDate,
      isOpen: false
    });
    if (this.props.onChange) {
      this.props.onChange(newDate);
    }
  }

  onMonthChanged(newMonthNumber) {
    const { showDate } = this.state;
    const newDate = moment().date(showDate.date()).month(newMonthNumber).year(showDate.year());
    this.setState({
      showDate: newDate
    });
    this.onViewStyleChanged('DayView');
  }

  onYearChanged(newYearNumber) {
    const { showDate } = this.state;
    const newDate = moment().date(showDate.date()).month(showDate.month()).year(newYearNumber);
    this.setState({
      showDate: newDate
    });
  }

  onViewStyleChanged(newStyle) {
    if (newStyle) {
      this.setState({
        viewStyle: newStyle
      });
    }
  }

  onTimeSet(newDateTime) {
    const newShowTime = this.state.showDate;
    const newSelectedDate = this.state.selectedDate;
    newShowTime.set('hour', newDateTime.hour());
    newShowTime.set('minute', newDateTime.minute());
    newSelectedDate.set('hour', newDateTime.hour());
    newSelectedDate.set('minute', newDateTime.minute());
    this.setState({
      showDate: newShowTime,
      selectedDate: newSelectedDate
    });
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <DateInput
          inputValue={this.state.selectedDate}
          showTime={this.props.showTime}
          onFocus={() => {
                     this.setState({
                       focused: true,
                       isOpen: true
                     });
                   }}
          onBlur={() => {
                     this.setState({
                       focused: false
                     });
                   }}
        />
        <OutsideAlerter
          onOutsideClick={() => {
            setTimeout(() => {
              if (!this.state.focused) {
                this.setState({
                  isOpen: false
                });
              }
            }, 200);
          }
          }
        >
          {this.state.isOpen &&
          <Calendar
            viewStyle={this.state.viewStyle}
            onShowDateChanged={this.onShowDateChanged}
            onSelectedDateChanged={this.onSelectedDateChanged}
            onViewStyleChanged={this.onViewStyleChanged}
            onMonthChanged={this.onMonthChanged}
            onYearChanged={this.onYearChanged}
            selectedDate={this.state.selectedDate}
            showDate={this.state.showDate}
            showTime={this.props.showTime}
            onTimeSet={this.onTimeSet}
          />
          }
        </OutsideAlerter>
      </div>

    );
  }
}

DatePickerFa.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.instanceOf(moment),
    PropTypes.instanceOf(Date)
  ]),
  onChange: PropTypes.func,
  showTime: PropTypes.bool
};

DatePickerFa.defaultProps = {
  date: moment.now(),
  onChange: null,
  showTime: false
};

export default DatePickerFa;

