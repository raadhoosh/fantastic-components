import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Month from './Month';
import DatePickeHeading from './DatePickeHeading';
import DatePickerStyled from './style/DatePickerStyled';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DatePickerStyled>
        <DatePickeHeading month={'desumber'}
        />
        <div>
          <Month day={'desumber'}/>
        </div>
      </DatePickerStyled>
    );
  }
}

Calendar.propTypes = {};

export default Calendar
