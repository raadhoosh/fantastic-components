/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';

import { getColor } from './Statics';

const H3Styled = styled.h3`
      font-family: ${(props) => props.theme.fontFamily};
      color:${(props) => getColor(props)};   
      direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };
    `;


export default H3Styled;
