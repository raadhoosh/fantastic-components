import React, {Component} from 'react';
import ColStyled from './ColStyled';

class Col extends Component {

  render() {
    const {
      className, children, style
    } = this.props;

    return (
      <ColStyled
        className={className}
        style={style}
        {...this.props}
      >
        {children}
      </ColStyled>
    );
  }
}

export default Col;
