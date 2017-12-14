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
    foreColor,
    theme
  } = props;
  let ForeC = '#000';
  if (primary) {
    ForeC = theme.primaryColor;
  }
  else if (secondary) {
    ForeC = theme.secondaryColor;
  }
  else if (info) {
    ForeC = theme.infoColor;
  }
  else if (warning) {
    ForeC = theme.warningColor;
  }
  else if (danger) {
    ForeC = theme.dangerColor;
  }
  else if (success) {
    ForeC = theme.successColor;
  }
  else if (inverse) {
    ForeC = theme.inverseColor;
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


const UploadWrapper = styled.div`        
        border: 1px dashed ${(props) => getBorderColor(props)};
        border-radius: 5px;
        
        padding: 20px;
        background-image: linear-gradient(135deg,rgba(0,0,0,.03)25%,transparent 25%,transparent 50%,rgba(0,0,0,.03)50%,rgba(0,0,0,.03)75%,transparent 75%,transparent);
        background-size: 100%;
        width: 300px;
        height: 60px;
     
         direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr'};
      `;


const Input = styled.input`        
        border: 1px dashed  ${(props) => getBorderColor(props)};
        height: 2em;
        transition: all 0.5s;
        width: 80%;
      
      `;
const Label = styled.label` 
              box-sizing: border-box;  
              padding: .2em .6em .3em;
              font-size: 75%;
              font-weight: bold;
              line-height: 1;
              color:${(props) => getColor(props)};
              white-space: nowrap;
              vertical-align: baseline;
              border-radius: .25em;
              `;
const Alert = styled.div`    
         color: ${(props) => props.theme.danger.bgColor};
              `;
const Important = styled.span`    
       color: ${(props) => props.theme.danger.bgColor};
              `;

export { Input, UploadWrapper, Important, Alert, Label };
