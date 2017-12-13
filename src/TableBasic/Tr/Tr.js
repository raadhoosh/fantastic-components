import React, {Component} from 'react';
import TrWrapper from './style';

class Tr extends Component {
  render() {
    const {
      children
    } = this.props;

    return (
      <TrWrapper
        {...this.props}
      >
        {
          children
        }
      </TrWrapper>
    )
  }
}

export default Tr;
