import styled from 'styled-components';
import {getColor, getBgColor} from './Statics';
import defaultTheme from '../../defaultTheme';

const FooterStyled = styled.footer`         
         border-top: 1px solid ${(props) => getBgColor(props)};         
         color:${(props) => props.color ? props.color : ((Object.keys(props.theme && props.theme).length > 0 ) ? props.theme.window.lightTextColor : defaultTheme.window.lightTextColor)};         
         padding:10px 15px;
         direction: ${(props) => (props.rtl || props.theme.rtl || defaultTheme.rtl) ? 'rtl' : 'ltr' };
        `;

export default FooterStyled;
