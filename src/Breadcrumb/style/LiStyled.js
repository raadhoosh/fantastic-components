import styled from 'styled-components';
import { getColor } from './Statics';

const LiStyled = styled.li` 
          font-family: ${(props) => props.theme.fontFamily};
          direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' }; 
           position: relative;
           padding: 5px 0;         
           &:after{
           content: "\\f104";           
           color: inherit;
           display: inline-block; 
           padding:0 10px;  
           cursor: pointer
           }
           
           &:last-child:after{
           content: "";         
           }
           
           &:first-child:before {      
           content: "\\f009";     
           padding-left: 10px;      
           color: ${props => getColor(props)};}                  
           &:before, &:after{
           font: normal normal normal 16px/1 FontAwesome;
           cursor: pointer
          }`;

export default LiStyled;
