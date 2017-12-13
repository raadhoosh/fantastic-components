import React from 'react';
import TbodyWrapper from './style'

class Tbody extends React.Component {
  render() {
    const {
      children
    } = this.props;

    return (
      <TbodyWrapper
        {...this.props}
      >
        {
          children
        }
      </TbodyWrapper>
    )
  }
}

export default Tbody;
