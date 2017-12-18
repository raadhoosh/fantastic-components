import styled from 'styled-components';
import {getColor, getBgColor} from './Statics';
import defaultTheme from '../defaultTheme';

const FooterStyled = styled.footer`
         border-bottom: 2px solid ${(props) => getBgColor(props)}; 
         border-top: 1px solid ${(props) => getBgColor(props)};
         color:${(props) => getColor(props)};         
         padding:10px 15px;
         direction: ${(props) => (props.rtl || props.theme.rtl || defaultTheme.rtl) ? 'rtl' : 'ltr' };
        `;

export default FooterStyled;
