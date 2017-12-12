import React from 'react';
import {TextAriaWrapper, Label, Alert, Important, Section} from './style';
import Icon from '../Icon/Icon';

class TextAria extends React.Component {
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
        <TextAriaWrapper
          {...this.props}/>
        {errorText && <Alert >{errorText}</Alert>}
      </Section>
    );
  }
}

export default TextAria;
