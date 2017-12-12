import React from 'react';
import { CheckBoxWrapper, Label, Section } from './style';


class CheckBox extends React.Component {
  render() {
    const {
      label,
      children
    } = this.props;
    return (
    <Section>
      <Label>
        <CheckBoxWrapper
          type="checkbox"
          {...this.props}
        />
        {label}
        {children}
      </Label>
    </Section>
    );
  }
}

export default CheckBox;
