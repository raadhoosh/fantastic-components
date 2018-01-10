import styled, {keyframes} from 'styled-components';
import {getBgColor, getColor} from './Statics';

const fade = keyframes`
  0%,
  80%,
  100% {
  border-radius: 12px;
    height: 4em; 
    } 
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
`;
const ToolTipStyled = styled.div` 
      position: relative;
      display: inline-block;
      
      span{
      visibility: hidden;      
      display: inline-block;
      background-color: ${(props) => getBgColor(props)};
      color: ${(props) => getColor(props)};
      text-align: center;
      border-radius: 6px;
      padding: 5px 8px;
      position: absolute;
      z-index: 1;
      bottom: 125%;
      ${(props) => props.theme.rtl
    ? `
   right:0;`
    : `left:0;`
  }   ;      
      opacity: 0;
      transition: opacity 1s;
      
      &::after {
      content: "";
      position: absolute;
      top: 100%;
       ${(props) => props.theme.rtl
     ?`
       right:20px;`
      : `left:20px;`
  }   ;   
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: ${(props) => getBgColor(props)} transparent transparent transparent;    
  }      
      }
            
      &:hover span{
        visibility: visible;
        opacity: 1;
      }
    
  
      `;

export default ToolTipStyled;
