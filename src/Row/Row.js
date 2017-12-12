import React, {Component} from 'react';
import RowWrapper from './style';

class Row extends Component {

  render() {
    const {
      className,
      children,
      style
    } = this.props;

    return (
      <RowWrapper
        className={className}
        style={style}
        {...this.props}
      >
        {children}
      </RowWrapper>
    );
  }
}

export default Row;
