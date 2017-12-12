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


const TextAriaWrapper = styled.textarea`    
             
              width: 100%;              
              padding: 6px 12px;
              font-size: 14px;
              line-height: 1.42857143;
              color: ${(props) => getColor(props)};   
              background-color:  ${(props) => getBgColor(props)};
              background-image: none;
              border: 1px solid  ${(props) => getBorder(props)};   
              border-radius: 4px;         
              box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
              height: auto;
              transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
               &:focus{
                border-color: ${(props) => getBorder(props)};   
                outline: 0;
                box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6); }
               }
              `;


const Label = styled.label`  
              padding: .2em .6em .3em;
              font-size: 75%;
              font-weight: bold;
              line-height: 1;
              color:  ${(props) => getColor(props)};             
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

const Section = styled.section`  
         position:relative;
         direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr'};
         
           i{                    
          color:${(props) => props.theme.danger.bgColor};
          position: absolute;
          left: ${(props) => props.theme.rtl ? 'auto' : '10px'}; 
          right: ${(props) => props.theme.rtl ? '10px' : 'auto'};          
          bottom: 6px;
          }       
           `;

export { TextAriaWrapper, Section, Important, Alert, Label };
