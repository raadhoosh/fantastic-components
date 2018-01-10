/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';

import { getColor, getBgColor, getBorderColor } from './Statics';


const CheckBoxStyled = styled.input`        
        width: 17px;
        height: 17px;         
        top: 0;        
        cursor: pointer;
        background-color: ${(props) => getBgColor(props)};
        color:  ${(props) => getColor(props)};
        border-color:   ${(props) => getBorderColor(props)};        
        position: absolute;
        z-index: -1;
        opacity: 0;
        box-sizing: border-box;
        padding: 0;
    
    &:checked + span:after {
    display: block;
}
        
        `;



export default CheckBoxStyled;
