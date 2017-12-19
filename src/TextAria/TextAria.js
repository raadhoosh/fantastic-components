import React ,{Component} from 'react';
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

export default TextAria;
