import React, {Component} from 'react';
import ColWrapper from './style';

class Col extends Component {

  render() {
    const {
      className, children, style
    } = this.props;

    return (
      <ColWrapper
        className={className}
        style={style}
        {...this.props}
      >
        {children}
      </ColWrapper>
    );
  }
}

export default Col;
