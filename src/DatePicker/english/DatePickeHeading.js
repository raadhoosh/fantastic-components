import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import CurrentMonth from './style/CurrentMonth';
import NavigationPrevious from './style/NavigationPrevious';
import NavigationNext from './style/NavigationNext';
import DatePickeHeadingStyled from './style/DatePickeHeadingStyled';
import WeekHeaderStyled from './style/WeekHeader';

class Heading extends Component {

  constructor(props) {
    super(props);
    this.state = {
      month: 0,
      date: this.props.date
    };
    this.nextMonth = this.nextMonth.bind(this);
    this.previousMonth = this.previousMonth.bind(this);
  }

  componentWillMount() {
    let NowDate = moment(this.state.date, 'YYYY/MM/DD');
    let month = NowDate.format('MMMM');
    let year = NowDate.format('YYYY');
    this.setState({
      month: month,
      year: year
    });
  }

  nextMonth() {
    let date = moment(this.state.date, 'YYYY/MM/DD');
    let nextDate = moment(date).add(1, 'months');
    let nextMonth = nextDate.format('MMMM');
    let nextYear = nextDate.format('YYYY');
    let nextDay = nextDate.format('dddd');
    let daysOfMonth = moment(date).daysInMonth();
    let endDate = moment(date).endOf('months');
    let dayOfWeek = moment(nextDate).day();
    let NowDated = moment(nextDate).format('YYYY/MM/DD');
    let dateFirstDay = moment().year(nextYear).month(nextMonth).date(1).format('YYYY/MM/DD');
    let firstDay = moment().year(nextYear).month(nextMonth).date(1).format('dd');
    /*let firstDayCode = moment().year(nextYear).month(nextMonth).date(1).day();
    let firstDayCode = moment().add('months', 1).date(0);*/
    let firstDayCode = moment().add('months', 1).date(1);


    /*let date = new Date(), y = date.getFullYear(), m = date.getMonth();
    let firstDay = new Date(y, m, 1);
    let lastDay = new Date(y, m + 1, 0);

    firstDay = moment(firstDay).format(yourFormat);
    lastDay = moment(lastDay).format(yourFormat);*/
    this.setState({
      month: nextMonth,
      date: dateFirstDay,
      year: firstDayCode
    });
  }

  previousMonth() {
    let date = moment(this.state.date, 'YYYY/MM/DD');
    let nextDate = moment(date).add(-1, 'months');
    let nextMonth = nextDate.format('MMMM');
    let nextYear = nextDate.format('YYYY');
    this.setState({
      month: nextMonth,
      date: nextDate,
      year: nextYear
    });
  }

  render() {

    const dayOfWeekCodes = {
      1: 'mon',
      2: 'tue',
      3: 'wed',
      4: 'thu',
      5: 'fri',
      6: 'sat',
      7: 'sun'
    }

    return (
      <DatePickeHeadingStyled>
        <div>
          <CurrentMonth>
            {`${this.state.month} ${this.state.year} ${this.state.date}`}
          </CurrentMonth>
          <NavigationNext
            onClick={this.nextMonth}
          />
          <NavigationPrevious
            onClick={this.previousMonth}
          />
        </div>
        <WeekHeaderStyled>
          <li>
            Su
          </li>
          <li>
            Mo
          </li>
          <li>
            Tu
          </li>
          <li>
            We
          </li>
          <li>
            Th
          </li>
          <li>
            Fr
          </li>
          <li>
            Sa
          </li>
        </WeekHeaderStyled>
      </DatePickeHeadingStyled>
    );
  }
}

Heading.propTypes = {
  styles: PropTypes.object,
  date: PropTypes.object,
};

export default Heading;
