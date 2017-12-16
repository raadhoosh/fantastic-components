/**
 * Created by Programmer1 on 12/16/2017.
 */
import styled from 'styled-components';

import { getColor, getBgColor, getBorderColor } from './statics';

const FooterStyled = styled.div`    
  font-family: ${(props) => props.theme.fontFamily};
  direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr'};
  border-top: 1px solid #dddddd;
  box-sizing: border-box;
  color: ${(props) => getColor(props)};
  background-color:${(props) => getBgColor(props)};
  border-color:  ${(props) => getBorderColor(props)}; 
  border-bottom-left-radius: -1;
  border-bottom-right-radius: -1;
  padding: 10px 15px; 
  
              `;

export default FooterStyled;
