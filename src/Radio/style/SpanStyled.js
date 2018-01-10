/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import getColor from './Statics';
import defaultTheme from '../../defaultTheme';

const Span = styled.span` 
            position: relative;            
            padding-${(props) => props.theme.rtl
  ? `right`
  : `left`
  }:20px;
            color:  ${(props) => props.color ? props.color : (Object.keys(props.theme).length > 0 && props.theme)
  ? props.theme.window.lightTextColor : defaultTheme.window.lightTextColor};  
            display: block;
            
            &:after{
            content: '';
            width: 15px;
            height: 15px;
            border: 2px solid ${(props) => getColor(props)};
            position: absolute;
            left: 0;
            top: 1px;
            border-radius: 100%;            
            box-sizing: border-box;  
              }          
            
           ${(props) => props.disabled ? `
            color: ${(Object.keys(props.theme).length > 0 && props.theme) ? props.theme.fixColors.lightGray : defaultTheme.fixColors.lightGray};
            cursor: not-allowed;  
             
              &:after{                
                border: 2px solid ${(Object.keys(props.theme).length > 0 && props.theme) ? props.theme.fixColors.lightGray : defaultTheme.fixColors.lightGray};
                   }     
             
            ` : `
      
      `}
            
  }
              `;


export default Span;
