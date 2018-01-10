import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MonthStyled from './style/MonthStyled';

class Month extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(event) {

    const { onClick, id } = this.props;

    if (onClick) {
      onClick(id);
    }
  }

  render() {
    const {
      name,
      isSelected,
      isCurrentMonth,
      disabled,
      primary,
      secondary,
      info,
      success,
      danger,
      warning
    } = this.props;

    const colorProps = {
      primary,
      secondary,
      info,
      success,
      danger,
      warning
    };

    return (
      <MonthStyled
        onClick={this.handleClick}
        isSelected={isSelected}
        isCurrentMonth={isCurrentMonth}
        disabled={disabled}
        {...colorProps}
      >
        {name}
      </MonthStyled>
    );
  }
}

Month.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  isCurrentMonth: PropTypes.bool,
  disabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool
};

export default Month;
