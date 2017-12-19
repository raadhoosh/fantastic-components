import React, {Component} from 'react';
import RowStyled from './style/RowStyled';

class Row extends Component {

  render() {
    const {
      className,
      children,
      style
    } = this.props;

    return (
      <RowStyled
        className={className}
        style={style}
        {...this.props}
      >
        {children}
      </RowStyled>
    );
  }
}

export default Row;
