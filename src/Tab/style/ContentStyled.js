/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';

import {getBorderColor} from './Statics';


const ContentStyled = styled.div`
      font-family: ${(props) => props.theme.fontFamily};      
      border: 1px solid  ${(props) => getBorderColor(props)};
      direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };
      padding: 20px;
     `;

export default ContentStyled;


