/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';

import { getColor, getSize } from './Statics';


const SpinnerStyled = styled.i`
         padding:5px;
         color:${(props) => getColor(props)};  
         font-size:${(props) => getSize(props)}px !important;          
         display: inline-block;  
         float: ${(props) => (props.rtl || props.theme.rtl) ? 'right' : 'left' };     
                 
        
     `;


export default SpinnerStyled;
