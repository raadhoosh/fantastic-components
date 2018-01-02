import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-jalaali';
import TimeInputStyled from './style/TimeInputStyled';

class TimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      hour: moment(props.date).hour(),
      minute: moment(props.date).minute()
    };
    this.onMinuteChange = this.onMinuteChange.bind(this);
    this.onHourChange = this.onHourChange.bind(this);
  }


  onMinuteChange(e) {
    this.setState({ minute: e.target.value });
  }


  onHourChange(e) {
    this.setState({ hour: e.target.value });
  }


  render() {
    const { date, onTimeSet } = this.props;
    const { editMode, hour, minute } = this.state;
    return (
      editMode ?
        <div>
          <TimeInputStyled
            onChange={this.onHourChange}
            value={hour}
          />
          {' : '}
          <TimeInputStyled
            onChange={this.onMinuteChange}
            value={minute}
          />
          <button
            value="..."
            onClick={() => {
              const newDateTime = moment(date);
              newDateTime.set('hour', hour);
              newDateTime.set('minute', minute);
              if (onTimeSet) {
                onTimeSet(newDateTime);
              }
              this.setState({ editMode: false });
            }}
          />
        </div>
        :
        <div>
          {`${hour} : ${minute}`}
          <button
            value="..."
            onClick={() => {
              this.setState({ editMode: true });
            }}
          />
        </div>
    );
  }
}

TimePicker.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.instanceOf(moment),
    PropTypes.instanceOf(Date)
  ]),
  onTimeSet: PropTypes.func
};

TimePicker.defaultProps = {
  date: moment.now(),
  onTimeSet: null
};

export default TimePicker;
