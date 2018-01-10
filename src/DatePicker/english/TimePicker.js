import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import TimeInputStyled from './style/TimeInputStyled';
import DivWrapperTime from './style/DivWrapperTime';

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
    const { date, onTimeSet, primary, secondary, info, success, danger, warning } = this.props;
    const { editMode, hour, minute } = this.state;
    const colorProps = {primary, secondary, info, success, danger, warning};

    return (
      <DivWrapperTime
        {...colorProps}
      >
        {
          editMode ?
            <div>
              <div
                style={{width: '150px', display: 'inline-block'}}
              >
                <TimeInputStyled
                  onChange={this.onHourChange}
                  value={hour}
                  type={'number'}
                  min={'0'}
                  max={'23'}
                />
                {' : '}
                <TimeInputStyled
                  onChange={this.onMinuteChange}
                  value={minute}
                  type={'number'}
                  min={'0'}
                  max={'59'}
                />
              </div>
              <button
                {...this.props}
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
              >
                <i className="fa fa-check" aria-hidden="true"/>
              </button>
            </div>
            :
            <div>
             <label
               style={{width: '148px', display: 'inline-block'}}
             >
               {`${hour} : ${minute}`}
             </label>
              <button
                {...this.props}
                value="..."
                onClick={() => {
                  this.setState({ editMode: true });
                }}
              >
                <i className="fa fa-pencil" aria-hidden="true"/>
              </button>
            </div>
        }
      </DivWrapperTime>
    );
  }
}

TimePicker.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.instanceOf(moment),
    PropTypes.instanceOf(Date)
  ]),
  onTimeSet: PropTypes.func,

  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  inverse: PropTypes.bool,

};

TimePicker.defaultProps = {
  date: moment.now(),
  onTimeSet: null
};

export default TimePicker;
