/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import {getDarkColor} from './Statics';

const TitleStyled = styled.div`
         font-family: ${(props) => props.theme.fontFamily};
         color:${(props) => getDarkColor(props)};
         margin:15px;
         font-size:24px;
         direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' }`;

export default TitleStyled;
