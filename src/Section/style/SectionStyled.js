/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';


import {getColor, getBorderColor, getBgColor} from './Statics';

const SectionStyled = styled.section` 
            font-family: ${(props) => props.theme.fontFamily};  
            background-color: ${(props) => getBgColor(props)};
            color: ${(props) => getColor(props)};  
            border-color:  ${(props) => getBorderColor(props)};
            direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };     
           `;

export default SectionStyled;
