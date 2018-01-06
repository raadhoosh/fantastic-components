import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-jalaali';
import Day from './Day';
import Month from './Month';
import DatePickerStyled from './style/DatePickerStyled';
import CurrentMonth from './style/CurrentMonth';
import NavigationPrevious from './style/NavigationPrevious';
import NavigationNext from './style/NavigationNext';
import DatePickeHeadingStyled from './style/DatePickeHeadingStyled';
import WeekHeaderStyled from './style/WeekHeader';
import TimePicker from './TimePicker';


class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.nextMonth = this.nextMonth.bind(this);
    this.previousMonth = this.previousMonth.bind(this);
    this.onDayClicked = this.onDayClicked.bind(this);
    this.isToday = this.isToday.bind(this);
    this.isSelectedDay = this.isSelectedDay.bind(this);
    this.onMonthClicked = this.onMonthClicked.bind(this);
  }


  nextMonth() {
    const { showDate, onShowDateChanged } = this.props;
    const next = moment(showDate).add(1, 'M');
    onShowDateChanged(next);
  }

  previousMonth() {
    const { showDate, onShowDateChanged } = this.props;
    const prev = moment(showDate).add(-1, 'M');
    if (onShowDateChanged) {
      onShowDateChanged(prev);
    }
  }

  onDayClicked(day) {
    const { showDate, onSelectedDateChanged, showTime} = this.props;
    const newDate = moment().date(day).month(showDate.month()).year(showDate.year());
    if (showTime) {
      newDate.hour(showDate.hour()).minute(showDate.minute());
    }
    if (onSelectedDateChanged) {
      onSelectedDateChanged(newDate);
    }
  }

  onMonthClicked(monthNumber) {

  }


  isSelectedDay(dayNumber) {
    const { selectedDate, showDate } = this.props;
    return (
      moment(selectedDate).date() === dayNumber &&
      moment(selectedDate).month() === moment(showDate).month() &&
      moment(selectedDate).year() === moment(showDate).year()
    );
  }

  isToday(dayNumber) {
    const { showDate } = this.props;
    const now = moment.now();
    return (
      moment(now).date() === dayNumber &&
      moment(now).month() === moment(showDate).month() &&
      moment(now).year() === moment(showDate).year()
    );
  }


  render() {
    const {
      showDate, onViewStyleChanged, viewStyle, onMonthChanged, showTime, onTimeSet
    } = this.props;
    // Calculate days

    const month = moment(showDate).month() + 1;
    const monthName = moment.months(month - 1);
    const year = moment(showDate).year();


    const weekDayIndex = [];
    // const weekStartDayIndex = moment().startOf('isoWeek').day();
    const weekStartDayIndex = 1;
    for (let i = 0; i < 7; i += 1) {
      weekDayIndex[i] = (weekStartDayIndex + i) % 7;
    }


    const startOfMonth = moment(showDate).startOf('month');
    let firstDayWeekNumber = startOfMonth.day() - weekStartDayIndex;
    if (firstDayWeekNumber < 0) {
      firstDayWeekNumber += 7;
    }

    const prevmonthDays = [];
    for (let i = 0; i < firstDayWeekNumber; i += 1) {
      prevmonthDays[i] = 0;
    }

    const monthDays = [];
    for (let i = 0; i < moment(showDate).daysInMonth(); i += 1) {
      monthDays[i] = (i + 1);
    }

    const monthNames = [];
    for (let i = 0; i < 12; i += 1) {
      monthNames[i] = moment(showDate).months(i).format('MMMM');
    }

    return (
      <DatePickerStyled>
        {viewStyle === 'DayView' &&
        <div>
          {showTime &&
            <TimePicker
              date={showDate}
              onTimeSet={onTimeSet}
            />
          }
          <DatePickeHeadingStyled>
            <div>
              <CurrentMonth
                onClick={() =>
                  onViewStyleChanged('MonthView')
                }
              >
                {`${monthName} ${year}`}
              </CurrentMonth>
              <NavigationNext
                onClick={this.nextMonth}
              />
              <NavigationPrevious
                onClick={this.previousMonth}
              />
            </div>

            <WeekHeaderStyled>
              {weekDayIndex.map((dayNumber, i) => {
                return (
                  <li key={i}>
                    {moment().day(dayNumber).format('ddd')}
                  </li>
                  );
                })}


            </WeekHeaderStyled>
          </DatePickeHeadingStyled>
          <div
            style={{ padding: '5px' }}
          >
            {prevmonthDays.map((dayNumber, i) => {
                return (
                  <Day
                    key={i}
                    day=" "
                    disabled
                  />
                );
              })}

            {monthDays.map((dayNumber, i) => {
                return (
                  <Day
                    key={i}
                    day={dayNumber}
                    isSelected={this.isSelectedDay(dayNumber)}
                    isToday={this.isToday(dayNumber)}
                    onDayClick={this.onDayClicked}
                  />
                );
              })}
          </div>
        </div>
        }
        {viewStyle === 'MonthView' &&
        <div>
          <DatePickeHeadingStyled>
            <div>
              <CurrentMonth>
                {year}
              </CurrentMonth>
              <NavigationNext
                onClick={() => this.props.onYearChanged(moment(showDate).year() + 1)}
              />
              <NavigationPrevious
                onClick={() => this.props.onYearChanged(moment(showDate).year() - 1)}
              />
            </div>
          </DatePickeHeadingStyled>
          {monthNames.map((mName, i) => {
            return (
              <Month
                id={i}
                name={mName}
                onClick={onMonthChanged}
              />
            );
            })}
        </div>
        }

      </DatePickerStyled>
    );
  }
}

Calendar.propTypes = {
  selectedDate: PropTypes.oneOfType([
    PropTypes.instanceOf(moment),
    PropTypes.instanceOf(Date)
  ]),
  showDate: PropTypes.oneOfType([
    PropTypes.instanceOf(moment),
    PropTypes.instanceOf(Date)
  ]),
  viewStyle: PropTypes.string,
  onShowDateChanged: PropTypes.func,
  onSelectedDateChanged: PropTypes.func,
  onViewStyleChanged: PropTypes.func,
  onMonthChanged: PropTypes.func,
  onYearChanged: PropTypes.func,
  onTimeSet: PropTypes.func,
  showTime: PropTypes.bool
};

Calendar.defaultProps = {
  selectedDate: null,
  showDate: null,
  viewStyle: null,
  onShowDateChanged: null,
  onSelectedDateChanged: null,
  onViewStyleChanged: null,
  onMonthChanged: null,
  onYearChanged: null,
  onTimeSet: null,
  showTime: false
};

export default Calendar;
