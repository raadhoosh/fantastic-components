import React, {Component} from 'react';
import ThWrapper from './style';

class Th extends Component {
  render() {
    const {
      children
    } = this.props;

    return (
      <ThWrapper
        {...this.props}
      >
        {
          children
        }
      </ThWrapper>
    );
  }
}

export default Th;
