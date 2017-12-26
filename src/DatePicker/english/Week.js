import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Day from './Day';

class Week extends Component {
  render () {
    return (
    <div>
      <Day day={'1'}/>
      <Day day={'2'}/>
      <Day day={'3'}/>
      <Day day={'4'}/>
      <Day day={'5'}/>
      <Day day={'6'}/>
      <Day day={'1'}/>
      <Day day={'2'}/>
      <Day day={'3'}/>
      <Day day={'4'}/>
      <Day day={'5'}/>
      <Day day={'6'}/>
      <Day day={'6'}/>
      <Day day={'6'}/>
    </div>
    )
  }
}

Week.propTypes = {
  day: PropTypes.object.isRequired,
  dayClassName: PropTypes.func,
  endDate: PropTypes.object,
  excludeDates: PropTypes.array,
  filterDate: PropTypes.func,
  formatWeekNumber: PropTypes.func,
  highlightDates: PropTypes.instanceOf(Map),
  includeDates: PropTypes.array,
  inline: PropTypes.bool,
  maxDate: PropTypes.object,
  minDate: PropTypes.object,
  month: PropTypes.number,
  onDayClick: PropTypes.func,
  onDayMouseEnter: PropTypes.func,
  onWeekSelect: PropTypes.func,
  preSelection: PropTypes.object,
  selected: PropTypes.object,
  selectingDate: PropTypes.object,
  selectsEnd: PropTypes.bool,
  selectsStart: PropTypes.bool,
  showWeekNumber: PropTypes.bool,
  startDate: PropTypes.object,
  utcOffset: PropTypes.number
}

export default Week;
