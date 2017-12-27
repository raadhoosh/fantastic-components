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
      date: this.props.date,
    };
    this.nextMonth = this.nextMonth.bind(this);
    this.previousMonth = this.previousMonth.bind(this);
  }

  componentWillMount() {
    let check = moment(this.state.date, 'YYYY/MM/DD');
    let month = check.format('MMMM');
    this.setState({
      month: month
    });
  }

  nextMonth() {
    debugger;
    let dateNext = moment(this.state.date, 'YYYY/MM/DD');
    let nextDate = moment(dateNext).add(1, 'months');
    let nextMonth = nextDate.format('MMMM')
    debugger
    this.setState({
      month: nextMonth,
      date: nextDate

    });
  }

  previousMonth() {

  }

  render() {
    const {month, date} = this.props;

    return (
      <DatePickeHeadingStyled>
        <div>
          <CurrentMonth>
            {this.state.month}
          </CurrentMonth>
          <NavigationPrevious
            onClick={this.nextMonth}
          />
          <NavigationNext

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
