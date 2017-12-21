
import styled from 'styled-components';

import getColor from './Statics';

const TheadStyled = styled.thead`
                font-family: ${(props) => props.theme.fontFamily};
                color:${(props) => getColor(props)}; 
                display: table-header-group;
                vertical-align: middle;                                  
    `;


export default TheadStyled;
