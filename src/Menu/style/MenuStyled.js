import styled from 'styled-components';
import {getBgColor, getColor, getBorderColor} from './StaticsMenu';

const Div = styled.div`           
             
            position:relative;  
            *{
              box-sizing: border-box;
             }     
                         
             ul {
                 list-style: none;
                 margin: 0;
                 padding: 0;                   
               }   
             
              li{
                position:relative;
                padding: 0;
                
                 > ul {
                    position: absolute;                    
                    top: 100%;
                      ${
  (props) => props.theme.rtl
    ? 'right : 0'
    : 'left:0'
  };           
                    z-index: 99;
                    padding: 0;
                    margin: 0;
                    min-width: 12em;
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
                    transition: all 0.2s ease-in-out;
                    background: transparent; 
                    visibility: hidden;
                    opacity: 0;  
                    
                    a{
                    border-bottom:1px solid ${(props) => getBorderColor(props)}; 
                    }                           
                   }                                     
              
                   &:hover > ul {  
                     visibility: visible;
                     opacity: 1;              
                       }  
                                                          
               }
             
             nav > ul > li {
                float: ${(props) => (props.theme.rtl) ? 'right' : 'left' } !important;  
                
                a{
                 border-left:1px solid ${(props) => getBorderColor(props)}; 
                }             	
             }
          
          	a {
               	padding:8px 15px;
               	display: block;
               	position: relative;
               	text-decoration: none;
               	color:${(props) => getColor(props)};
               	background-color:${(props) => getBgColor(props)}; 
               	transition:all 0.2s ease-in;
              	white-space: nowrap;
                box-sizing: border-box;
                transition: all 0.2s ease-in; 
                
                &:hover {
                  opacity: 0.8;
                  transition: all 0.2s ease-in-out;
                  }             	              
               	
               	i{
               	${
  (props) => props.theme.rtl
    ? 'float : left'
    : 'float : right'
  }; 
               	color:${(props) => getColor(props)} !important;         
               	}
               	} 
           `;


export default Div;
