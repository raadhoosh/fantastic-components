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


const Ul = styled.ul`
      list-style:none;
             li{
          float:right;
          cursor:pointer;         
          border-radius: 3px;
          box-shadow: rgba(0, 0, 0, 0.2) 0 0 0 1px;
          margin: 1px 2px;
          padding: 5px 10px;
          display: inline-block;
          border-top: 1px solid #fff;
          text-decoration: none;
          color: #717171;        
          text-shadow: white 0 1px 0;
          background-color: #f5f5f5;
          background-image: -webkit-gradient(linear, left top, left bottom, from(#f9f9f9), to(#eaeaea));
          background-image: -webkit-linear-gradient(top, #f9f9f9, #eaeaea);
         }        
         .active{
          box-shadow: rgba(0, 0, 0, 0.2) 0 0 0 1px;
          border-top: 1px solid ${(props) => getBorder(props)};
          background-color: ${(props) => getBgColor(props)};
          color:${(props) => getColor(props)};
          background-image: -webkit-linear-gradient(top,${(props) => getBgColor(props)},${(props) => getBgColor(props)});
         }
    `;


const PaginationWrapper = styled.nav`  
            direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr'};
            display: flex;
            padding-left: 0; 
            list-style: none; 
           
              `;



export { Ul, PaginationWrapper };
