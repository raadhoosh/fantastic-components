/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import {getColor, getBgColor, getBorderColor} from './Statics';

const DayStyled = styled.span`        
        color:${props => getColor(props)};  
        text-align: center;         
        box-sizing: border-box; 
        display: inline-block;
        width: 14.285714285714286%;  
        font-size: 0.8em;
        line-height: 1.7rem;
        border-radius: 0.3rem;
        border: 1px solid transparent;
        
        border-color: ${props => props.isSelected ? getBorderColor : 'transparent'};
        background: ${props => props.isToday ? getBgColor(props) : 'transparent'};
        ${
           props =>
             props.disabled ? '' : 
               `&:hover{      
                    background-color: #f0f0f0;
                    cursor: pointer;
                    border: 1px solid transparent;
                `
         }
        
        }
      `;

export default DayStyled;
