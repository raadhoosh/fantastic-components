/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import {getBorderColor, getBgColor, getColor} from './Statics';

const LIStyled = styled.li`
       padding: 5px 15px;
       cursor: pointer;
       background-color:${(props) => getBgColor(props)}; 
       color:${(props) => getColor(props)};
       border: 1px solid ${(props) => getBorderColor(props)};      
       border-top:2px solid ${(props) => getBgColor(props)};          
       font-family: ${(props) => props.theme.fontFamily};    
       display: inline-block ;
       box-sizing: border-box;  
       font-size: 14px;     
       
       ${(props) => (props.currentTab === props.index)
       && `
        border-color: ${getBorderColor(props)};        
        border-style: solid; z-index: 1;
        border-bottom :1px solid transparent;
        background-color:${getColor(props)};     
        color:${getBgColor(props)};     
        `}
       direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };
     `;

export default LIStyled;


