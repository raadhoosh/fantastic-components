/**
 * Created by Programmer1 on 12/16/2017.
 */
import styled from 'styled-components';

import { getColor, getBgColor, getBorderColor } from './Statics';

const HeadingStyled = styled.div`    
  font-family: ${(props) => props.theme.fontFamily};
  direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr'};
  border-bottom: 1px solid transparent;
  border-top-left-radius: -1;
  border-top-right-radius: -1;
  padding: 8px 12px;
  box-sizing: border-box;
  color: ${(props) => getColor(props)};
  background-color:${(props) => getBgColor(props)};
  border-color:  ${(props) => getBorderColor(props)}; 
              `;

export default HeadingStyled;
