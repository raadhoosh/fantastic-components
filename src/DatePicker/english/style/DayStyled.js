/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import {getColor, getBgColor, getBorderColor} from './Statics';

const DayStyled = styled.span`       
        text-align: center;         
        box-sizing: border-box; 
        display: inline-block;
        width: 14.285714285714286%;  
        font-size: 0.8em;
        line-height: 1.7rem;
        border-radius: 0.3rem;      
        border:1px solid ${props => props.isToday ? getBorderColor(props) : 'transparent'};
        color:${props => props.isSelected ? getColor(props) : ''};       
        background: ${props => props.isSelected ? getBgColor(props) : 'transparent'};
        ${
           props =>
             props.disabled ? '' : 
               `&:hover{      
                    background-color: #eee;
                    cursor: pointer;
                    border: 1px solid transparent;   
                    color: #333;                 
                `
         }
        
        }
      `;

export default DayStyled;
