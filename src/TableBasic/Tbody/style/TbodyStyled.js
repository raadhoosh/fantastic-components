import styled from 'styled-components';
import getColor from './Statics';

const TbodyStyled = styled.tbody`
                font-family: ${(props) => props.theme.fontFamily};
                color:${(props) => getColor(props)};                                                
    `;

export default TbodyStyled;
