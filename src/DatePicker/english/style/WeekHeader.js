/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import {getColor, getBgColor, getBorderColor} from './Statics';

const WeekHeaderStyled = styled.ul`
      display: block;
      padding: 0 !important;       
      outline: none; 
      transition:all 0.3s ease;
      font-family: ${(props) => props.theme.fontFamily}; 
      box-sizing: border-box; 
      width: 100%;
      text-align: center; 
      margin: 5px 5px 0 auto !important; 
      clear: both;
       
       li{
        list-style: none;
        color:${(props) => getBgColor(props)};  
        text-align: center;         
        box-sizing: border-box; 
        display: inline-block;
        width: 14.285714285714286%;  
        font-size: 0.6em;         
       }
      
      `;

export default WeekHeaderStyled;
