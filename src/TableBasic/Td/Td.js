import React, {Component} from 'react';
import TdWrrapper from './style';

class Td extends Component {
  render() {
    const {
      children
    } = this.props;

    return (
      <TdWrrapper
        {...this.props}
      >
        {
          children
        }
      </TdWrrapper>
    )
  }
}

export default Td;
