/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import {getColor, getBgColor, getBorderColor} from './Statics';
import defaultTheme from '../../defaultTheme';

const Span = styled.span` 
            position: absolute;
            top: 2px;
            left: 0;
            height: 15px;
            width: 15px;
            color:${(props) => props.inverse ? getBgColor(props) : getColor(props)};
            background-color:${(props) => props.inverse ? getColor(props) : getBgColor(props)};
            border:  1px solid ${(props) => getBorderColor(props)};
            border-radius: 2px;           
            
            &:after {
            content: '';
            position: absolute;
            display: none;
            left: 6px;
            top: 1px;
            width: 3px;
            height: 8px;
            border: solid ${(props) => props.inverse ? getBgColor(props) : getColor(props)};
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);}    
            
           ${(props) => props.disabled ? `
            color: ${(Object.keys(props.theme).length > 0 && props.theme) ? props.theme.fixColors.lightGray : defaultTheme.fixColors.lightGray};
            cursor: not-allowed;   
            ` : `      
      `}
           
              ${(props) => props.inverse ? `
               &:hover{     
        background-color: ${ getBgColor(props)
}
;
        color:${ getColor(props)
}
;
      }  
      ` : `
      &:hover{     
        opacity: 0.8;
      }  
      `}
      
       ${(props) => props.disable ? `
        border: 1px solid #ccc;
        background-color: #eee;
        color: #999;
        cursor: not-allowed;   
        &:hover{     
        background-color: #eee;
        opacity:1;
      }     
      ` : `
      
      `}
            
  }
              `;


export default Span;
