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
    let dateNext = moment(this.state.date, 'YYYY/MM/DD');
    let nextDate = moment(dateNext).add(1, 'months');
    let nextMonth = nextDate.format('MMMM');
    let nextYear = nextDate.format('YYYY');
    let daysOfMonth = moment(dateNext).daysInMonth();
    let endDate = moment(dateNext).endOf('months');
    let dow = moment(dateNext).day();
    this.setState({
      month: nextMonth,
      date: nextDate,
      year: dow
    });
  }

  previousMonth() {
    let dateNext = moment(this.state.date, 'YYYY/MM/DD');
    let nextDate = moment(dateNext).add(-1, 'months');
    let nextMonth = nextDate.format('MMMM');
    let nextYear = nextDate.format('YYYY');
    this.setState({
      month: nextMonth,
      date: nextDate,
      year: nextYear
    });
  }

  render() {
    const {month, date} = this.props;
    const dayOfWeekCodes = [{
      1: 'mon',
      2: 'tue',
      3: 'wed',
      4: 'thu',
      5: 'fri',
      6: 'sat',
      7: 'sun'
    }]

    return (
      <DatePickeHeadingStyled>
        <div>
          <CurrentMonth>
            {`${this.state.month} ${this.state.year}`}
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
  month: PropTypes.object.isRequired,
  styles: PropTypes.object,
  date: PropTypes.object,
};

export default Heading;
