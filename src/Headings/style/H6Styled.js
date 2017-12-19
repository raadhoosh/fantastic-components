/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import { getColor } from './Statics';

const H6Styled = styled.h6`
      font-family: ${(props) => props.theme.fontFamily};
      color:${(props) => getColor(props)};    
     direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };
    `;
export default H6Styled;
