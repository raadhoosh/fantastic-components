/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';


function getBgColor(props) {
  const {
    primary,
    secondary,
    info,
    warning,
    danger,
    success,
    inverse,
    theme,
    bgColor
  } = props;
  let bgC = theme.default.primaryForeColor;


  if (primary) {
    bgC = theme.primary.bgColor;
  }
  else if (secondary) {
    bgC = theme.secondary.bgColor;
  }
  else if (info) {
    bgC = theme.info.bgColor;
  }
  else if (warning) {
    bgC = theme.warning.bgColor;
  }
  else if (danger) {
    bgC = theme.danger.bgColor;
  }
  else if (success) {
    bgC = theme.success.bgColor;
  }
  else if (inverse) {
    bgC = theme.inverse.bgColor;
  }

  if (bgColor) {
    bgC = bgColor;
  }

  return bgC;
}

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
    foreColor
  } = props;
  let ForeC = theme.default.foreColor;
  if (primary) {
    ForeC = theme.primary.foreColor;
  }
  else if (secondary) {
    ForeC = theme.secondary.foreColor;
  }
  else if (info) {
    ForeC = theme.info.foreColor;
  }
  else if (warning) {
    ForeC = theme.warning.foreColor;
  }
  else if (danger) {
    ForeC = theme.danger.foreColor;
  }
  else if (success) {
    ForeC = theme.success.foreColor;
  }
  else if (inverse) {
    ForeC = theme.inverse.foreColor;
  }

  if (foreColor) {
    ForeC = foreColor;
  }

  return ForeC;
}

function getBorder(props) {
  const {
    primary,
    secondary,
    info,
    warning,
    danger,
    success,
    inverse,
    theme,
    borderColor
  } = props;
  let BorderC = theme.default.borderColor;


  if (primary) {
    BorderC = theme.primary.borderColor;
  }
  else if (secondary) {
    BorderC = theme.secondary.borderColor;
  }
  else if (info) {
    BorderC = theme.info.borderColor;
  }
  else if (warning) {
    BorderC = theme.warning.borderColor;
  }
  else if (danger) {
    BorderC = theme.danger.borderColor;
  }
  else if (success) {
    BorderC = theme.success.borderColor;
  }
  else if (inverse) {
    BorderC = theme.inverse.borderColor;
  }

  if (borderColor) {
    BorderC = borderColor;
  }

  return BorderC;
}


const Wrapper = styled.div`    
  background-color: #ffffff;
  border: 1px solid ${(props) => getBorder(props)};
  border-radius: 0;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05)`;



const Heading = styled.div`  
  font-family: ${(props) => props.theme.fontFamily};
  direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr'};
  border-bottom: 1px solid transparent;
  border-top-left-radius: -1;
  border-top-right-radius: -1;
  padding: 8px 12px;
  color: ${(props) => getColor(props)};
  background-color:${(props) => getBgColor(props)};
  border-color:  ${(props) => getBorder(props)}; 
              `;
const Footer = styled.div` 
  font-family: ${(props) => props.theme.fontFamily};
  direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr'};
  border-top: 1px solid #dddddd;
  color: ${(props) => getColor(props)};
  background-color:${(props) => getBgColor(props)};
  border-color:  ${(props) => getBorder(props)}; 
  border-bottom-left-radius: -1;
  border-bottom-right-radius: -1;
  padding: 10px 15px; 
  
              `;

const Body = styled.div`  
       font-family: ${(props) => props.theme.fontFamily};
      direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr'};
      padding: 15px;       
           `;

export { Wrapper, Body, Footer, Heading };
