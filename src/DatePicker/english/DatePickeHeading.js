import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CurrentMonth from './style/CurrentMonth';
import NavigationPrevious from './style/NavigationPrevious';
import NavigationNext from './style/NavigationNext';
import DatePickeHeadingStyled from './style/DatePickeHeadingStyled';
import WeekHeaderStyled from './style/WeekHeader';

class Heading extends Component {


  render() {
    const {month, styles} = this.props;

    return (
      <DatePickeHeadingStyled>
       <div>
         <CurrentMonth>
           desumber
         </CurrentMonth>
         <NavigationPrevious
           title="ماه قبل"
         />
         <NavigationNext
           title="ماه بعد"
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
};

export default Heading;
