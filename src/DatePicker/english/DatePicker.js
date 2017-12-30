import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DateInput from './DateInput';
import Calendar from './Calendar';
import OutsideAlerter from '../../OutsideAlerter/OutsideAlerter';

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
      currentWeekday: weekday,
      isOpen: false,
      focused: false,
      viewStyle: 'DayView' // DayView , monthView , YearView
    };
    this.onShowDateChanged = this.onShowDateChanged.bind(this);
    this.onSelectedDateChanged = this.onSelectedDateChanged.bind(this);
    this.onViewStyleChanged = this.onViewStyleChanged.bind(this);
    this.onMonthChanged = this.onMonthChanged.bind(this);
    this.onYearChanged = this.onYearChanged.bind(this);
  }


  onShowDateChanged(newDate) {
    this.setState({
      showDate: newDate
    });
  }

  onSelectedDateChanged(newDate){
    this.setState({
      selectedDate: newDate,
      isOpen:false
    });
  }

  onMonthChanged(newMonthNumber){
    const { showDate} = this.state;
    const newDate = moment().date(showDate.date()).month(newMonthNumber).year(showDate.year());
    this.setState({
      showDate: newDate
    });
    this.onViewStyleChanged('DayView');
  }

  onYearChanged(newYearNumber){
    const { showDate } = this.state;
    const newDate = moment().date(showDate.date()).month(showDate.month()).year(newYearNumber);
    this.setState({
      showDate: newDate
    });
  }

  onViewStyleChanged(newStyle){
    if (newStyle) {
      this.setState({
        viewStyle: newStyle
      });
    }
  }

  render() {
    return (
        <div style={{"position":"relative"}}>
          <DateInput inputValue={this.state.selectedDate}
                     inputOnClick={this.toggleCalendar}
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
              setTimeout(function () {
                if (!this.state.focused) {
                  this.setState({
                    isOpen: false
                  });
                }
              }.bind(this), 200);
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
              />
            }
          </OutsideAlerter>
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

