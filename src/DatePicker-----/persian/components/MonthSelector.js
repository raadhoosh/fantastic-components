import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-jalali';
import MonthsViewHeading from './MonthsViewHeading';
import { persianNumber } from '../utils/persian';
import { leftArrow, rightArrow } from '../utils/assets';

// List of months
const months = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند'
];

export default class MonthSelector extends Component {

  constructor(props){
    super(props);
    this.state = {
      year: this.props.selectedMonth
    };
    this.handleClickOnDay = this.handleClickOnDay.bind(this);
  }

  nextYear() {
    this.setState({
      year: this.state.year.clone().add(1, 'year')
    });
  }

  prevYear() {
    this.setState({
      year: this.state.year.clone().subtract(1, 'year')
    });
  }

  handleClick(key) {
    const { setMonth, setCalendarMode } = this.context;
    setMonth(moment(key, 'jM-jYYYY'));
    setCalendarMode('days');
  }

  render() {
    const { year } = this.state;
    const { selectedMonth, styles } = this.props;

    return (
      <div className="month-selector">
        <MonthsViewHeading
          styles={styles}
          year={year}
          onNextYear={this.nextYear.bind(this) }
          onPrevYear={this.prevYear.bind(this) }
        />
        <div className={styles.monthsList}>
          {
            months.map((name, key) => {
              const buttonFingerprint = (key + 1) + '-' + year.format('jYYYY');
              const selectedMonthFingerprint = selectedMonth.format('jM-jYYYY');
              const isCurrent = selectedMonthFingerprint === buttonFingerprint;

             /* const className = classnames(styles.monthWrapper, {
                [styles.selected]: isCurrent
              });*/

              const className = (isCurrent) ? 'selected' : '';

              return (
                <div key={key} className={className}>
                  <button onClick={this.handleClick.bind(this, buttonFingerprint)}>
                    {name}
                  </button>
                </div>
              );
            })
          }
        </div>
      </div>);
  }
}


MonthSelector.propTypes = {
  styles: PropTypes.object,
  selectedMonth: PropTypes.object.isRequired
};

MonthSelector.contextTypes = {
  setCalendarMode: PropTypes.func.isRequired,
  setMonth: PropTypes.func.isRequired
};
