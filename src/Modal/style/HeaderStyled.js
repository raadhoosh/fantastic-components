import styled from 'styled-components';
import {getColor, getBgColor, getIconColor} from './Statics';
import defaultTheme from '../../defaultTheme';

const HeaderStyled = styled.header`
          color:${(props) => getColor(props)};
          padding:10px 15px 10px;
          background-color:${(props) => getBgColor(props)};  
          
          label {
           display: inline-block;  
           margin-bottom: 5px;                         
          }
          
          i{
           padding: 0;
           margin: 3px;   
           color:${(props) => getIconColor(props)}; 
           float: ${(props) => (props.rtl || props.theme.rtl || defaultTheme.rtl) ? 'left' : 'right' };          
          }
        `;

export default HeaderStyled;
