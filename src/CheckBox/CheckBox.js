import React ,{Component} from 'react';
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

export default CheckBox;
