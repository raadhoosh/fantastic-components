import styled from 'styled-components';
import {getColor, getBorderColor} from './Statics';

const TdStyled = styled.td`
                font-family: ${(props) => props.theme.fontFamily};
                font-size: 13px;
                color:${(props) => getColor(props)};                                               
                border: 1px solid ${(props) => getBorderColor(props)} !important;
                text-align: center;
                padding: 0.6em;                               
                                                                       
    `;

export default TdStyled;
