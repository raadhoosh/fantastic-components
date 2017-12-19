/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';

import { getColor, getBgColor, getBorderColor } from './Statics';


const CheckBoxStyled = styled.input`
        margin: 10px 3px 10px 3px;
        width: 17px;
        height: 17px;   
        position: relative;
        top: 4px;
        margin-left:7px;
        cursor: pointer;
        background-color: ${(props) => getBgColor(props)};
        color:  ${(props) => getColor(props)};
        border-color:   ${(props) => getBorderColor(props)};
        `;



export default CheckBoxStyled;
