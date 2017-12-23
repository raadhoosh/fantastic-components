import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import SelectInputStyled from './style/SelectInputStyled';
import Label from './style/LabelStyled';
import Section from './style/SectionStyled';
import Important from './style/ImportantStyled';
import Alert from './style/AlertStyled';

class SelectInput extends Component {
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
            return <option key={index} value={option.value}>{option.text}</option>;
          })
          }
        </SelectInputStyled>
        {errorText && <Alert {...this.props}>{errorText}</Alert>}

      </Section>
    );
  }
}

SelectInput.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string,
  defaultOption: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  errorText: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  inverse: PropTypes.bool,
  rtl: PropTypes.bool,
  borderColor: PropTypes.string,
  bgColor: PropTypes.string,
  foreColor: PropTypes.string,
  theme: PropTypes.object,
  important: PropTypes.bool,
  icon: PropTypes.string
};

export default SelectInput;
