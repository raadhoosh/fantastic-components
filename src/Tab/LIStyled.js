/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';

import {getBorderColor} from './Statics';

const LIStyled = styled.li`
      font-family: ${(props) => props.theme.fontFamily};    
       display: inline-block ;
       ${(props) => (props.currentTab === props.index) && `border-color: ${getBorderColor(props)};border-width: 4px 1px 0px 1px; border-style: solid; z-index: 1;background: white;  `}
      direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };
     `;

export default LIStyled;


