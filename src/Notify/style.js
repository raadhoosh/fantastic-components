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
    foreColor
  } = props;

  let ForeC;
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

  let bgC;
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

function getBorderC(props) {
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

  let BorderC;
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


const NotifyContainer = styled.div`    
 display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: flex-start;
  align-content: flex-start;
  position: absolute;
  top: 0;
  right: 0;
              `;
const NotifyItem = styled.div`    
             width: 250px;      
              margin: 5px 10px;
              color:${(props) => getColor(props)};
              background-color:${(props) => getBgColor(props)};    
              border: 1px solid ${(props) => getBorderC(props)};
              border-radius: 5px;
              &:hover{
                opacity: 0.8;
                box-shadow: 0 0 10px 0 #0f0f0f;
                cursor: pointer;
              };
              p{
               font-family: 'Lora', serif;
                margin: 10px;
                opacity: .8;
                direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };
              }
             
              `;

const NotifyTitle = styled.p`    
        font-weight: 700;`;


export { NotifyContainer, NotifyItem, NotifyTitle };
