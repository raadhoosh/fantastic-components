/**
 * Created by Programmer1 on 12/04/2017.
 */
import React from 'react';
import Icon from '../Icon/Icon';

import SelectInputStyled from './SelectInputStyled';
import Label from './LabelStyled';
import Section from './SectionStyled';
import Important from './ImportantStyled';
import Alert from './AlertStyled';

class SelectInput extends React.Component {
  render() {
    const {
      options,
      label,
      name,
      value,
      onChange,
      defaultOption,
      errorText,
      style,
      important,
      defaultValue,
      icon,
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
          icon && <Icon iconClass={icon}/>
        }
        <SelectInputStyled
          name={name}
          value={value}
          onChange={onChange}
          {...this.props}
        >
          <option value={defaultValue}>{defaultOption}</option>
          {options.map((option, index) => {
            return <option key={ index } value={option.value}>{option.text}</option>;
          })
          }
        </SelectInputStyled>
        {errorText && <Alert {...this.props}>{errorText}</Alert>}

      </Section>
    );
  }
}


export default SelectInput;
