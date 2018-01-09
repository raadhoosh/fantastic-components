/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import {getColor, getBgColor} from './Statics';
import defaultTheme from '../../../defaultTheme';

const TrStyled = styled.tr`
                font-family: ${(props) => props.theme.fontFamily};
                color:${(props) => getColor(props)};  
                cursor: pointer; 
                background-color: ${(props) => getBgColor(props)}; 
                
                &:hover{
                   background-color: ${(props) => (Object.keys(props.theme).length > 0 && props.theme) ? props.theme.default.lightColor : defaultTheme.default.lightColor};
                }                                                     
    `;

export default TrStyled;
