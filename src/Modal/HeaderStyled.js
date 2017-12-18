import styled from 'styled-components';
import {getColor, getBgColor} from  './Statics';
import defaultTheme from '../defaultTheme';

const HeaderStyled = styled.header`
          color:${(props) => getColor(props)};
          padding:10px 20px 5px 10px;
          background-color:${(props) => getBgColor(props)};  
          
          label {
           display: inline-block;  
           margin-bottom: 5px;                         
          }
          
          i{
           padding: 0;
           margin: 3px;    
           float: ${(props) => (props.rtl || props.theme.rtl || defaultTheme.rtl) ? 'left' : 'right' };          
          }
        `;

export default HeaderStyled;
