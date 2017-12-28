import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Month from './Month';
import DatePickeHeading from './DatePickeHeading';
import DatePickerStyled from './style/DatePickerStyled';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {month, date} = this.props;
    return (
      <DatePickerStyled>
        <DatePickeHeading
          month={month}
          date={date}
        />
        <div>
          <Month day={'desumber'}/>
        </div>
      </DatePickerStyled>
    );
  }
}

Calendar.propTypes = {
  month: PropTypes.string,
  date: PropTypes.object,
};

export default Calendar
