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

function getforColor(props) {
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

function getBorderColor(props) {
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


const DivWrapper = styled.div`        
          font-family: ${(props) => props.theme.fontFamily};             
          background-color:  ${(props) => getBgColor(props)};
          color:  ${(props) => getforColor(props)};
          border-color:  ${(props) => getBorderColor(props)};        
        ${(props) => props.inLine ? 'display: inline-block;' : 'block'}`;


const SectionWrapper = styled.section` 
            font-family: ${(props) => props.theme.fontFamily};  
            background-color: ${(props) => getBgColor(props)};
            color: ${(props) => getforColor(props)};  
            border-color:  ${(props) => getBorderColor(props)};
            direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };     
           `;


const ArticleWrapper = styled.article`        
          font-family: ${(props) => props.theme.fontFamily};               
          background-color: ${(props) => getBgColor(props)};
          color: ${(props) => getforColor(props)};  
          border-color:  ${(props) => getBorderColor(props)};
          ${(props) => props.inLine ? 'display: inline-block;' : 'block'}`;

export { DivWrapper, SectionWrapper, ArticleWrapper };
