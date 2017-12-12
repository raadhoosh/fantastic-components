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

  const H1Wrapper = styled.h1`
      font-family: ${(props) => props.theme.fontFamily};
      color:${(props) => getColor(props)};  
      direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };
    `;


const H2Wrapper = styled.h2`
      font-family: ${(props) => props.theme.fontFamily};
      color:${(props) => getColor(props)};
      direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };
    `;

const H3Wrapper = styled.h3`
      font-family: ${(props) => props.theme.fontFamily};
      color:${(props) => getColor(props)};   
      direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };
    `;


const H4Wrapper = styled.h4`
      font-family: ${(props) => props.theme.fontFamily};
      color:${(props) => getColor(props)};    
     direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };
    `;

const H5Wrapper = styled.h5`
      font-family: ${(props) => props.theme.fontFamily};
      color:${(props) => getColor(props)}; 
      direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };
    `;

const H6Wrapper = styled.h6`
      font-family: ${(props) => props.theme.fontFamily};
      color:${(props) => getColor(props)};    
     direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };
    `;
export { H1Wrapper, H2Wrapper, H3Wrapper, H4Wrapper, H5Wrapper, H6Wrapper };
