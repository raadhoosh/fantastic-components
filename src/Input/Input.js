import React from 'react';
import {InputWrapper, Label, Alert, Important, Section} from './style';
import Icon from '../Icon/Icon';

class Input extends React.Component {
  render() {
    const {
      label,
      errorText,
      style,
      important,
      icon
    } = this.props;
    return (
      <Section style={style}>
        {
        label &&
        <Label>
          {label}
          {
            important && <Important>*</Important>
          }
        </Label>
      }
        {
          icon && <Icon iconClass={icon}/>
        }
        <InputWrapper {...this.props}/>
        {errorText && <Alert>{errorText}</Alert>}
      </Section>
    );
  }
}

export default Input;
