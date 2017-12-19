import React, {Component} from 'react';
import TheadStyled from './style/TheadStyled';

class Thead extends Component {
  render() {
    const {
      children
    } = this.props;

    return (
      <TheadStyled
        {...this.props}
      >
        {
          children
        }
      </TheadStyled>
    )
  }
}


export default Thead;
