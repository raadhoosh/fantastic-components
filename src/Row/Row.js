import React, {Component} from 'react';
import PropTypes from 'prop-types';
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

Row.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Row;
