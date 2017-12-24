import styled from 'styled-components';
import {getColor, getBgColor, getBorderColor} from './Statics';

const CollapsibleStyled = styled.div` 
        direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };                           	
         `;

export default CollapsibleStyled;
