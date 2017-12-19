/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import {getColor, getBgColor} from './Statics';

const TrStyled = styled.tr`
                font-family: ${(props) => props.theme.fontFamily};
                color:${(props) => getColor(props)};  
                cursor: pointer; 
                background-color: ${(props) => getBgColor(props)};                                                      
    `;

export default TrStyled;
