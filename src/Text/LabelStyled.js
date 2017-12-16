/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';


import {getColor, getBorderColor, getBgColor} from './statics';

const LabelStyled = styled.label`
        font-family: ${(props) => props.theme.fontFamily};
         color:${(props) => getColor(props)};
         direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };
         ${(props) => props.pointer ? 'cursor: pointer;' : ''}`;

export default LabelStyled;
