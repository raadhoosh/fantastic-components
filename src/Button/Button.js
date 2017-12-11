import React, {Component} from 'react';
import ButtonWrapper from './style';
import Icon from '../Icon/Icon';

class Button extends Component {
  constructor(props, context) {
    super(props, context);
    this.spanClicked = false;
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  onBtnClick() {
    const {onClick, value, id} = this.props;
    if (value && id)
      onClick(id, value);
    else if (id)
      onClick(id);
    else if (value)
      onClick(value);
    else {
      onClick();
    }
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
        nativeOnClick={(e) => {
          if (!this.spanClicked)
            this.onBtnClick();
          this.spanClicked = false;
        }}
        style={style}
        value={value}
        disabled={disable}
        large
      >
        {spinner ?
          <Spinner/> :
          icon ?
            <Icon iconClass={icon} devider={icon && label}
                  nativeOnClick={(e) => {
                    this.spanClicked = true;
                    e.target.value = value;
                    this.onBtnClick();
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

