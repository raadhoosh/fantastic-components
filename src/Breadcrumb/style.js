/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';


const BreadcrumbWrapper = styled.div` 
         font-family: ${(props) => props.theme.fontFamily};
         background-color:#f6f6f6;  
         border-bottom: 1px solid #f7f7f7;
         margin: 20px 0;
          li{
               display: inline-block;
           }
         .breadcrumb {    
          margin-bottom: 0; 
           direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };   
                    
    }
      `;
const Li = styled.li` 
          font-family: ${(props) => props.theme.fontFamily};
          direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' }; 
           position: relative;
           padding: 5px 0;         
           &:after{
           content: "\\f104";           
           color: inherit;
           display: inline-block; 
           padding:0 10px;  
           cursor: pointer
           }
           
           &:last-child:after{
           content: "";         
           }
           
           &:first-child:before {      
           content: "\\f009";     
           padding-left: 10px;      
           color: ${props => props.theme.primaryColor};}                  
           &:before, &:after{
           font: normal normal normal 16px/1 FontAwesome;
           cursor: pointer
          }
      `;

const Ol = styled.ol` 
        font-family: ${(props) => props.theme.fontFamily};
        direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' }; 
        background:${props => props.theme.bgColor};
        color:${props => props.theme.fontColor};       
      `;

export { BreadcrumbWrapper, Li, Ol };
