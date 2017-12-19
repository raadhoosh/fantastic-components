import React, {Component} from 'react';
import TdStyled from './style/TdStyled';

class Td extends Component {
  render() {
    const {
      children
    } = this.props;

    return (
      <TdStyled
        {...this.props}
      >
        {
          children
        }
      </TdStyled>
    )
  }
}

export default Td;
