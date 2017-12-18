/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';

import {getColor, getBorderColor, getBgColor} from './statics';


const ContentStyled = styled.div`
     font-family: ${(props) => props.theme.fontFamily};
      border-radius: 4px;
      border: 1px solid  ${(props) => getBorderColor(props)};
      direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };
     `;

export default ContentStyled;


