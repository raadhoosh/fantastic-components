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

}

export default Week;
