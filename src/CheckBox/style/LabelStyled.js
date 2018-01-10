/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import defaultTheme from '../../defaultTheme';

const Label = styled.label` 
              box-sizing: border-box;              
              font-size: 75%;
              font-weight: bold;
              line-height: 1;
              color:  ${(props) => props.color ? props.color : (Object.keys(props.theme).length > 0 && props.theme)
  ? props.theme.window.lightTextColor : defaultTheme.window.lightTextColor};            
              white-space: nowrap;
              vertical-align: baseline;
              border-radius: .25em;
              cursor: pointer;               
              display: block;
              position: relative;  
              padding-top: 5px;           
              padding-${(props) => props.theme.rtl
  ? `right`
  : `left`
  }:25px;
              margin-bottom: 15px;            
                   
              `;


export default Label;
