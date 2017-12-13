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

const Div = styled.div` 
      padding: 0.6rem;    
      border-color:  ${(props) => getBorder(props)} !important;
      direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr'};
              `;

const TableWrapper = styled.table` 
      
       width: 100%;
        max-width: 100%;
        margin-bottom: 20px;
        border-collapse: collapse;
        min-width:${(props) => props.minWidth}px; 
        ${(props) => props.hover && ` tr {&:hover{ cursor: pointer; background-color: #eceeef; } }`}; 
         ${(props) => props.striped && ` tr:nth-child(even) {background-color: #f2f2f2;`};     
        td{
        border-top: 1px solid #eceeef;
        border:1px solid #eee !important;
        }
              `;

const Th = styled.th` 
         color: ${(props) => getColor(props)} !important;
          background-color:  ${(props) => getBgColor(props)} !important;
          border-top: 1px solid #fff !important;      
          padding:5px 0;
          height:35px
              `;

const Tr = styled.tr`  
          color: ${(props) => getColor(props)} !important;
          background-color:  ${(props) => getBgColor(props)} !important;
          border-top: 1px solid #fff !important;
          border-bottom: 2px solid ${(props) => getBorder(props)} !important;  
              `;
const Thead = styled.thead` 
          display: table-header-group;
          vertical-align: middle;
          border-color: ${(props) => getBorder(props)};
          direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr'};
              `;

const Td = styled.td` 
      overflow-x:auto;
      overflow-y: hidden; 
      direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr'};
              `;

export {Th, Tr, Thead, Td, Div, TableWrapper};
