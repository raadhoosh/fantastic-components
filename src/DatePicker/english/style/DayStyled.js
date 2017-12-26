/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import {getColor, getBgColor, getBorderColor} from './Statics';

const DayStyled = styled.span`        
        color:${(props) => getColor(props)};  
        text-align: center;         
        box-sizing: border-box; 
        display: inline-block;
        width: 14.285714285714286%;  
        font-size: 0.6em;      
      
      `;

export default DayStyled;
