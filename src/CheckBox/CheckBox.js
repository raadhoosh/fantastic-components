import React from 'react';
import CheckBoxStyled from './style/CheckBoxStyled';
import Label from './style/LabelStyled';
import Section from './style/SectionStyled';



class CheckBox extends React.Component {
  render() {
    const {
      label,
      children
    } = this.props;
    return (
    <Section {...this.props}>
      <Label {...this.props}>
        <CheckBoxStyled
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
