import styled from 'styled-components';
import {getColor, getBgColor}  from './Statics';

const TableStyled = styled.table`
                font-family: ${(props) => props.theme.fontFamily};
                color:${(props) => getColor(props)};
                background-color:${(props) => getBgColor(props)};
                width: 100%;
                max-width: 100%;
                margin-bottom: 20px;
                border-collapse: collapse;
                min-width: 360px;                   
    `;

export default TableStyled;
