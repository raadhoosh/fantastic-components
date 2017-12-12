/**
 * Created by Programmer1 on 12/04/2017.
 */
import React from 'react';
import Icon from '../Icon/Icon';
import { SelectWrapper, Label, Alert, Important, Section } from './style';

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
        <SelectWrapper
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
        </SelectWrapper>
        {errorText && <Alert>{errorText}</Alert>}

      </Section>
    );
  }
}


export default SelectInput;
