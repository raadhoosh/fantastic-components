/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';


function getColor(props) {
  const {
    primary,
    secondary,
    info,
    warning,
    danger,
    success,
    inverse,
    theme,
    color
  } = props;

  let C;
  if (color)
    C = color;
  else {
    C = theme.darkForeColor;
    if (primary) {
      C = theme.primaryColor;
    }
    else if (secondary) {
      C = theme.secondaryColor;
    }
    else if (info) {
      C = theme.infoColor;
    }
    else if (warning) {
      C = theme.warningColor;
    }
    else if (danger) {
      C = theme.dangerColor;
    }
    else if (success) {
      C = theme.successColor;
    }
    else if (inverse) {
      C = theme.inverseColor;
    }
    return C;
  }
}

const ULWrapper = styled.ul`
      font-family: ${(props) => props.theme.fontFamily};
      color:${(props) => getColor(props)};  
      direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };
       ${(props) => props.inLine ? 'display: inline-block;' : 'block'};
    `;

const LIWrapper = styled.li`
      font-family: ${(props) => props.theme.fontFamily};
      color:${(props) => getColor(props)};  
      direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };
       ${(props) => props.inLine ? 'display: inline-block;' : 'block'};
    `;

export { ULWrapper, LIWrapper };
