import React from 'react';
import CheckBoxStyled from './CheckBoxStyled';
import Label from './LabelStyled';
import Section from './SectionStyled';



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
