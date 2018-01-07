import styled from 'styled-components';
import {getColor, getBgColor, getBorderColor} from './Statics';


const BreadcrumbStyled = styled.div` 
         font-family: ${(props) => props.theme.fontFamily};
          color:${(props) => getColor(props)};
          background-color:${(props) => props.bgColor ? props.bgColor : 'transparent'};
          border:  1px solid ${(props) => props.bgColor ? props.Color : 'transparent'};
          margin: 20px 0;
          
          li{
               display: inline-block;
           }
           
         .breadcrumb {    
          margin-bottom: 0;       
            }
      `;

export default BreadcrumbStyled;
