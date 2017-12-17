import React, {Component} from 'react';
import TheadWrapper from './style';

class Thead extends Component {
  render() {
    const {
      children
    } = this.props;

    return (
      <TheadWrapper
        {...this.props}
      >
        {
          children
        }
      </TheadWrapper>
    )
  }
}


export default Thead;
