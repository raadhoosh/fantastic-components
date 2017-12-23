import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import TextAriaStyled from './style/TextAriaStyled';
import Label from './style/LabelStyled';
import Section from './style/SectionStyled';
import Important from './style/ImportantStyled';
import Alert from './style/AlertStyled';

class TextAria extends Component {
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
              important && <Important>*</Important>
            }
          </Label>
        }
        {
          icon && <Icon iconClass={icon} />
        }
        <TextAriaStyled
          {...this.props}/>
        {errorText && <Alert {...this.props}>{errorText}</Alert>}
      </Section>
    );
  }
}

TextAria.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  errorText: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  labelClassName: PropTypes.string,
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
  icon: PropTypes.string,
  important: PropTypes.bool,
};

export default TextAria;
