import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Day from './Day';
import DatePickerStyled from './style/DatePickerStyled';
import CurrentMonth from './style/CurrentMonth';
import NavigationPrevious from './style/NavigationPrevious';
import NavigationNext from './style/NavigationNext';
import DatePickeHeadingStyled from './style/DatePickeHeadingStyled';
import WeekHeaderStyled from './style/WeekHeader';


class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.nextMonth = this.nextMonth.bind(this);
    this.previousMonth = this.previousMonth.bind(this);
    this.onDayClicked = this.onDayClicked.bind(this);
    this.isToday = this.isToday.bind(this);
    this.isSelectedDay = this.isSelectedDay.bind(this);
  }


  nextMonth() {
    const { showDate, onShowDateChanged } = this.props;
    const next = moment(showDate).add(1, 'M');
    onShowDateChanged(next);
  }

  previousMonth() {
    const { showDate, onShowDateChanged } = this.props;
    const prev = moment(showDate).add(-1, 'M');
    if (onShowDateChanged)
      onShowDateChanged(prev);
  }

  onDayClicked(day) {
    const { showDate, onShowDateChanged, onSelectedDateChanged} = this.props;
    let newDate = moment().date(day).month(showDate.month()).year(showDate.year());
    if(onSelectedDateChanged)
      onSelectedDateChanged(newDate);
  }

  isSelectedDay(dayNumber) {
    const { selectedDate, showDate } = this.props;
    // console.log('selectedDate.Month . showDate.Month', moment(selectedDate).month(), moment(showDate).month() );
    // console.log('selectedDate.year . showDate.year', moment(selectedDate).year(), moment(showDate).year() );
    const condition = moment(selectedDate).date() === dayNumber &&
      moment(selectedDate).month() === moment(showDate).month() &&
      moment(selectedDate).year() === moment(showDate).year();
    console.log('condition',condition);
    return condition;
  }

  isToday(dayNumber) {
    const { showDate } = this.props;
    const now = moment.now();
    if(
      moment(now).date() === dayNumber &&
      moment(now).month() === moment(showDate).month() &&
      moment(now).year() === moment(showDate).year()
    ){
      return true;
    }
    return false;
  }


  render() {
    const {selectedDate, showDate, currentDate, onShowDateChanged } = this.props;
    // Calculate days

    const month = moment(showDate).month() + 1;
    const monthName = moment.months(month - 1);
    const year = moment(showDate).year();


    const weekDayIndex=[];
    // const weekStartDayIndex = moment().startOf('isoWeek').day();
    const weekStartDayIndex = 1;
    for (let i = 0; i < 7; i++) {
      weekDayIndex[i] = (weekStartDayIndex + i) % 7;
    }


    const startOfMonth = moment(showDate).startOf('month');
    let firstDayWeekNumber = startOfMonth.day() - weekStartDayIndex;
    if (firstDayWeekNumber < 0) {
      firstDayWeekNumber += 7;
    }

    const prevmonthDays = [];
    for (let i = 0; i < firstDayWeekNumber; i++) {
      prevmonthDays[i] = 0;
    }

    const monthDays = [];
    for (let i = 0; i < moment(showDate).daysInMonth(); i++) {
      monthDays[i] = (i + 1);
    }

    return (
      <DatePickerStyled>
        <DatePickeHeadingStyled>
          <div>
            <CurrentMonth>
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
            {weekDayIndex.map(
              (dayNumber, i)=> {
                return (
                  <li key={i}>
                  {moment().day(dayNumber).format('ddd')}

                  </li>
                );
              }
            )}


          </WeekHeaderStyled>
        </DatePickeHeadingStyled>
        <div>
          <div>
            {prevmonthDays.map(
              (dayNumber, i)=> {
                return (
                  <Day day={' '} />
                );
              }
            )}

            {monthDays.map(
              (dayNumber, i)=> {

                return (
                  <Day
                    day={dayNumber}
                    isSelected={this.isSelectedDay(dayNumber)}
                    isToday={this.isToday(dayNumber)}
                    onDayClick={this.onDayClicked}
                  />
                );
              }
            )}
          </div>
        </div>
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
  currentDate: PropTypes.oneOfType([
    PropTypes.instanceOf(moment),
    PropTypes.instanceOf(Date)
  ]),
  onShowDateChanged:PropTypes.func,
  onSelectedDateChanged:PropTypes.func
};

export default Calendar;
