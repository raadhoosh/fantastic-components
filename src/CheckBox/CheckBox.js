import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import CheckBoxStyled from './style/CheckBoxStyled';
import Label from './style/LabelStyled';
import SectionStyled from './style/SectionStyled';

class CheckBox extends Component {
  render() {
    const {
      label,
      children
    } = this.props;
    return (
    <SectionStyled {...this.props}>
      <Label {...this.props}>
        <CheckBoxStyled
          type="checkbox"
          {...this.props}
        />
        {label}
        {children}
      </Label>
    </SectionStyled>
    );
  }
}

CheckBox.propTypes = {
  label: PropTypes.string,
  onCheck: PropTypes.func,
  name: PropTypes.string,
  className: PropTypes.string,
  checked: PropTypes.bool,
  inline: PropTypes.bool,

  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  inverse: PropTypes.bool
};

export default CheckBox;
