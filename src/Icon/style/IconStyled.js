/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import defaultTheme from '../../defaultTheme';
import {getColor, getSize} from './Statics';

const IconStyled = styled.i`
         padding:5px;
         color:${(props) => getColor(props)};  
         font-size:${(props) => getSize(props)}px !important;          
         display: inline-block;  
         float: ${(props) => (props.rtl || props.theme.rtl || defaultTheme.rtl) ? 'right' : 'left' };     
         ${
  props => props.devider ?
    ` border-${(props.theme.rtl || defaultTheme.rtl) ? 'left' : 'right'}: 1px solid #fff;
          padding-${(props.theme.rtl || defaultTheme.rtl) ? 'left' : 'right'}: 5px;
          margin-${(props.theme.rtl || defaultTheme.rtl) ? 'left' : 'right'}: 10px;`
    : ``
  }         
        
     `;


export default IconStyled;
