import React, {Component} from 'react';
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
    const {onClick} = this.props;
    onClick && onClick(e);
  }


  render() {

    const {
      label,
      style,
      className,
      icon,
      value,
      spinner,
      children
    } = this.props;


    let disable = false;
    if (spinner !== null && spinner === true) {
      disable = true;
    }

    return (
      <ButtonStyled
        {...this.props}
        type="submit"
        className={className}
        onClick={(e) => {
          if (disable || this.props.disable) return;
          if (!this.spanClicked){
            this.onBtnClick(e);
          }
          this.spanClicked = false;
        }}
        style={style}
        value={value}
        disabled={disable || this.props.disable}
      >
        {spinner ?
          <Spinner icon="spinner" /> :
          icon ?
            <Icon
              iconClass={icon}
              devider={icon && label}
              onClick={(e) => {
                    this.spanClicked = true;
                    e.target.value = value;
                    this.onBtnClick(e);
              }}
            />
            : null
        }
        {label}
      </ButtonStyled>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  label: PropTypes.string,
  icon: PropTypes.string,
  spinner: PropTypes.bool,
  hover: PropTypes.bool,
  disable: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  inverse: PropTypes.bool,
  xSmall: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
  borderColor: PropTypes.string,
  bgColor: PropTypes.string,
  foreColor: PropTypes.string,
  theme: PropTypes.object
};

export default Button;

