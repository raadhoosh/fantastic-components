import React, {Component} from 'react';
import ButtonWrapper from './style';
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
    onClick(e);
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
      <ButtonWrapper
        {...this.props}
        type="submit"
        className={className}
        onClick={(e) => {
          if (!this.spanClicked)
            this.onBtnClick(e);
          this.spanClicked = false;
        }}
        style={style}
        value={value}
        disabled={disable}
        large
      >
        {spinner ?
          <Spinner spin="spinner" /> :
          icon ?
            <Icon iconClass={icon} devider={icon && label}

                  onClick={(e) => {
                    this.spanClicked = true;
                    e.target.value = value;
                    this.onBtnClick(e)
                  }}


            />
            : null
        }
        {label}
        {children}
      </ButtonWrapper>
    )
  }
}

export default Button;

