/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import {getColor, getBgColor, getBorderColor} from './Statics';

const DateInputStyled = styled.input`
      color:${(props) => getColor(props)};         
      border:  1px solid ${(props) => getBorderColor(props)};
      border-radius:2px;
      outline: none; 
      transition:all 0.3s ease;
      font-family: ${(props) => props.theme.fontFamily};     
      box-shadow: inset 0 2px 2px #e9e9e9;   
      padding: 5px;
      box-sizing: border-box; 
      `;

export default DateInputStyled;
