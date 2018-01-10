import styled from 'styled-components';
import {getColor} from './Statics';

const LiStyled = styled.li` 
          font-family: ${(props) => props.theme.fontFamily};
          direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' }; 
           position: relative;
           padding: 5px 0;         
           &:after{
           content:${(props) => (props.rtl || props.theme.rtl) ? '"\\f104"' : '"\\f105"' };          
           color: inherit;
           display: inline-block; 
           padding:0 10px; 
          
           }
           a{
            text-decoration: none;
             &:hover{
               text-decoration:underline;
             }
           }
           
           &:last-child:after{
           content: "";         
           }
           &:first-child:before {      
           content: "\\f009";     
           padding-${(props) => (props.rtl || props.theme.rtl) ? 'left' : 'right' }: 10px;      
           color: ${props => getColor(props)};}                  
           &:before, &:after{
           font: normal normal normal 16px/1 FontAwesome;   
           box-sizing: border-box; 
           display: inline-block;       
          }`;

export default LiStyled;
