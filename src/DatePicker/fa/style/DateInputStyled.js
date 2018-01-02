import styled from 'styled-components';
import { getColor, getBorderColor } from './Statics';

const DateInputStyled = styled.input`
      color:${props => getColor(props)};
      border:  1px solid ${props => getBorderColor(props)};
      border-radius:2px;
      outline: none; 
      transition:all 0.3s ease;
      font-family: ${props => props.theme.fontFamily};     
      box-shadow:0 1px 1px #e9e9e9 inset;        
      box-sizing: border-box; 
      padding:7px 20px;
      `;

export default DateInputStyled;
