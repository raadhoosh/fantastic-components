/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import {getColor, getBgColor, getBorderColor, paddingX, paddingY, marginX, marginY} from './Statics';

const Button = styled.button`
      color:${(props) => props.inverse ? getBgColor(props) : getColor(props)};
      background-color:${(props) => props.inverse ? getColor(props) : getBgColor(props)};      
      cursor:pointer;
      border:  1px solid ${(props) => getBorderColor(props)};
      border-radius:4px;
      outline: none; 
      transition:all 0.3s ease;
      font-family: ${(props) => props.theme.fontFamily}; 
      padding: ${(props) => paddingY(props)} ${(props) => paddingX(props)};   
      margin: ${(props) => marginY(props)} ${(props) => marginX(props)};
      font-size: ${(props) => props.large ? '1.2rem' : (props.xSmall ? '0.5rem' : '1rem')};           
      
      ${(props) => props.inverse ? `
       &:hover{     
        background-color: ${getBgColor(props)};
        color:${getColor(props)};
      }  
      ` : `
      &:hover{     
        opacity: 0.8;
      }  
      `}
      `;

export default Button;
