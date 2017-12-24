import styled from 'styled-components';
import {getColor, getBgColor, getBorderColor} from './Statics';

const HeaderStyled = styled.div` 
             *{
               box-sizing: border-box;
              } 
                cursor:pointer;              
                background-color:${props => getBgColor(props)};               
                color: ${props => getColor(props)};  
                border-color: ${props => getBorderColor(props)};                
                display: block;
                font-weight: 400;
                text-decoration: none;
                position: relative;  
                padding: 10px;   
                direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };                            
                               
                &:after {
                font-family: 'FontAwesome';
                content: '\\f107';
                position: absolute;              
                top: 10px;
                display: block;
                transition: transform 300ms;
                 ${
  (props) => props.theme.rtl
    ? 'left : 10px'
    : 'right:10px'
  };           
              }

              &.is-open {
                &:after {
                  transform: rotateZ(180deg);
                }
              }

              &.is-disabled {
                opacity: 0.5;
                background-color: grey;
              }                    	
         `;

export default HeaderStyled;
