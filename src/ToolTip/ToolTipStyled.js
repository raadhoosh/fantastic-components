import styled, { keyframes } from 'styled-components';
import {  getBgColor } from './statics';

const fade = keyframes`
  0%,
  80%,
  100% {
  border-radius: 12px;
    height: 4em;
  4em"}
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
`;
const ToolTipStyled = styled.div` 
    position: relative;
   &.is-visible {
          span {
              padding: .5em;
              animation:${`${fade} 1s infinite ease`};
              animation-delay: 10s;
              opacity: 1;
              visibility: visible;
              background-color:  ${(props) => getBgColor(props)};   
              border-radius: 2px;
              box-shadow: 0 3px 16px rgba(black, 0.15);     
          }
      }
      &.is-hidden {
          span {
              transform: translateY(100%) translateX(-50%);
              opacity: 0;
              visibility: hidden;
              transition: transform $transTime ease, 
                          opacity $transTime, 
                          visibility $transTime $transTime;
              &:after {
                  top: 0;
              }
          }
      }
      `;

export default ToolTipStyled;
