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
        width: 25%;  
        font-size: 0.8em;
        line-height: 1.7rem;
        border-radius: 0.3rem;
        border: 1px solid transparent;
        
        border-color: ${props => props.isSelected ? `${props.theme.primaryColor}` : 'transparent'};
        background: ${props => props.isToday ? props.theme.primaryColor : 'transparent'};
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
