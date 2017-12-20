import React, {Component} from 'react';
import ThStyled from './style/ThStyled';

class Th extends Component {
  render() {
    const {
      children
    } = this.props;

    return (
      <ThStyled
        {...this.props}
      >
        {
          children
        }
      </ThStyled>
    );
  }
}

export default Th;
