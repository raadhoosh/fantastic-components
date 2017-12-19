import React, { Component } from 'react';
import InputStyled from './style/SelectInputStyled';
import Label from './style/LabelStyled';
import Section from './style/SectionStyled';
import Important from './style/ImportantStyled';
import Alert from './style/AlertStyled';
import Icon from '../Icon/Icon';

class Input extends Component {
  render() {
    const {
      label,
      errorText,
      style,
      important,
      icon
    } = this.props;
    return (
      <Section style={style} {...this.props}>
        {
        label &&
        <Label {...this.props}>
          {label}
          {
            important && <Important {...this.props}>*</Important>
          }
        </Label>
      }
        {
          icon && <Icon iconClass={icon} {...this.props}/>
        }
        <InputStyled {...this.props}/>
        {errorText && <Alert {...this.props}>{errorText}</Alert>}
      </Section>
    );
  }
}

export default Input;
