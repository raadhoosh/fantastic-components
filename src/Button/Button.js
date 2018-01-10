import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonStyled from './style/ButtonStyled';
import Icon from '../Icon/Icon';
import Spinner from '../Spinner/Spinner';

class Button extends Component {
  constructor(props, context) {
    super(props, context);
    this.spanClicked = false;
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  onBtnClick(e) {
    const { onClick } = this.props;
    onClick && onClick(e);
  }


  render() {
    const {
      label, icon, value, spinner, children
    } = this.props;
    let disable = false;
    if (spinner !== null && spinner === true) {
      disable = true;
    }

    return (
      <ButtonStyled
        {...this.props}
        type="submit"
        onClick={(e) => {
          if (disable || this.props.disable) return;
          if (!this.spanClicked) {
            this.onBtnClick(e);
          }
          this.spanClicked = false;
        }}
        value={value}
        disabled={disable || this.props.disable}
      >
        { spinner ?
          <Spinner icon="spinner" /> :
          icon &&
            <Icon
              iconClass={icon}
              devider={icon && label}
              onClick={(e) => {
                    this.spanClicked = true;
                    e.target.value = value;
                    this.onBtnClick(e);
              }}
            />
        }
        {label}
        {children}
      </ButtonStyled>
    );
  }
}

Button.propTypes = {
  /** function to be called when the button is clicked. */
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  /** function to be called when the button is clicked. */
  onClick: PropTypes.func,
  /** The value of the button. */
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  /** Text to display inside the button. */
  label: PropTypes.string,
  /** function to be called when the button is clicked. */
  icon: PropTypes.string,
  /** function to be called when the button is clicked. */
  spinner: PropTypes.bool,
  /** function to be called when the button is clicked. */
  disable: PropTypes.bool,
  /** function to be called when the button is clicked. */
  inverse: PropTypes.bool,
  /** function to be called when the button is clicked. */
  xSmall: PropTypes.bool,
  /** function to be called when the button is clicked. */
  small: PropTypes.bool,
  /** function to be called when the button is clicked. */
  large: PropTypes.bool,
  /** rtl is true component show  in right side of the window, default is false (from left side). */
  rtl: PropTypes.bool,
  /** Boolean indicating whether the component renders with Theme.primary color */
  primary: PropTypes.bool,
  /** Boolean indicating whether the component renders with Theme.secondary color */
  secondary: PropTypes.bool,
  /** Boolean indicating whether the component renders with Theme.info color */
  info: PropTypes.bool,
  /** Boolean indicating whether the component renders with Theme.warning color  */
  warning: PropTypes.bool,
  /** Boolean indicating whether the component renders with Theme.danger color  */
  danger: PropTypes.bool,
  /** Boolean indicating whether the component renders with Theme.success color */
  success: PropTypes.bool,
  /** The inline-styles for the root element. */
  style: PropTypes.object,
  /** The className for the root element. */
  className: PropTypes.string,
  /** The color renders with Theme.foreColor . */
  foreColor: PropTypes.string,
  /** The border color renders with Theme.foreColor .. */
  borderColor: PropTypes.string,
  /** The background color renders with Theme.foreColor . */
  bgColor: PropTypes.string,
};
Button.defaultProps = {
  children:{},
  rtl: false,
  primary: false,
  secondary: false,
  info: false,
  warning: false,
  danger: false,
  success: false,
  style: {},
  borderColor: {},
  bgColor: {},
  inverse: false,
  disable: false,
  spinner: false,
  onClick: () => {},
  label: '',
  icon: null,
  value: '',
  xSmall: false,
  large: false,
  small: false,
  className: '',
  foreColor: ''
};
export default Button;

