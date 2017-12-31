import styled from 'styled-components';
import defaultTheme from '../../defaultTheme';

const BreadcrumbStyled = styled.div` 
         font-family: ${(props) => props.theme.fontFamily};
         background-color:#f6f6f6;  
         border-bottom: 1px solid #f7f7f7;
         margin: 20px 0;
          li{
               display: inline-block;
           }
         .breadcrumb {    
          margin-bottom: 0;       
            }
      `;

export default BreadcrumbStyled;
