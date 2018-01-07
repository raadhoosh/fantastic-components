/**
 * Created by Programmer1 on 12/16/2017.
 */
import styled from 'styled-components';
import { getColor, getBgColor, getBorderColor } from './Statics';

const FooterStyled = styled.div`    
  font-family: ${(props) => props.theme.fontFamily};
  direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr'};
  border-top: 1px solid #dddddd;
  box-sizing: border-box;
  color: ${(props) => props.foreColor ? props.foreColor : (props.theme.fixColors.darkGray) };
  background-color:${(props) => props.bgColor ? props.bgColor : 'transparent' };
  border-color:  ${(props) => getBorderColor(props)}; 
  border-bottom-left-radius: -1;
  border-bottom-right-radius: -1;
  padding: 10px 15px; 
  
              `;

export default FooterStyled;
