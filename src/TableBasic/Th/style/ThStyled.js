import styled from 'styled-components';
import {getColor, getBgColor, getBorderColor} from './Statics';

const ThStyled = styled.th`
                font-family: ${(props) => props.theme.fontFamily};
                font-size: 13px;
                color:${(props) => getColor(props)};   
                border: 1px solid ${(props) => getBorderColor(props)} !important;                    
                padding: 5px;
                background-color: ${(props) => getBgColor(props)};                                                
    `;

export default ThStyled;
