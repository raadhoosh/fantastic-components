import styled from 'styled-components';
import {getFloat, getColor, getBgColor, getBorderC} from './StaticsMenuResponsive';
import defaultTheme from '../defaultTheme';

const Div = styled.div` 
          z-index: 9;
          float: ${(props) => getFloat(props)};                                 
                 
             nav.menuSimple{             
     @media (max-width: 768px) {  
             width:100%;
             transition: all 0.5s ease-in;
             position:absolute;
             top:70px;
             left:0; 
             overflow-y: auto;  
             max-height: 90vh;               
             z-index: 99;                              
             
           ul{           
            width:100%;  
            transition:all 0.4s ease-in;                 
            overflow: hidden;
            padding-top:20px;                                  
                     
                  i.fa-sort-asc {
                        display:block;
                        ${
  (props) => props.left
    ? 'left : 10px;'
    : 'right:10px'
  };                       
                        font-size: 40px;
                        position: absolute;                        
                        color:props => color ? color :(props.theme ? props.theme.primary : defaultTheme.primary); 
                        top: 0;
                               }       
             }                         
         
         
     	    li   {
               	 width:100%;                	           	 
               	 display:block;   
               	 padding:0; 
               	 
               	  ul{
               	      position:relative;
                      padding-top:0;
                      border-bottom:0;
                      box-shadow: 0 0 6px 12px rgba(0, 0, 0, 0.1) inset; 
                      
                      a{
                       background-color:'#f2f2f2'; 
                      }                      
               	    }                              	 
               	   
               	a, span{
               	display: block;
               	white-space: nowrap;
               	padding:15px 30px;
               	color:${(props) => getColor(props)};
               	background-color:${(props) => getBgColor(props)};
               	
               	transition:all 0.2s ease-in;
               	border-bottom:1px solid ${(props) => getBorderC(props)};               	            	
               	
               	&:hover{               	 
               	 background-color:${(props) => getBgColor(props)};               	 
               	 color:${(props) => getColor(props)};
                    }
               	}
}
       	            	              	          	
        }    
           }   
                      
         @media (max-width: 768px) {  
             .sfHide{
                visibility: hidden;
                opacity: 0;                
             }
             
            .sfShow {
                visibility: visible;
                opacity: 1;
                transition: all 0.5s ease-in;
              };
             } 
               	
         `;


const ButtonBox = styled.div`       
         display:none;      
       
        @media (max-width: 768px) {  
           display:block;
           overflow:hidden;
           width: 28px;
           height: 28px;
           
           button{
           background:transparent;
           padding:1px; 
           border-color:transparent;
           padding: 0;           
                }
       }         
     `;

const Overlay = styled.div`
         position: fixed;
         width: 100%;
         height: 100%;
         top: 0;
         left: 0;
         background-color: rgba(0, 0, 0, 0.23);
         z-index: 9;

`;


export {Div, ButtonBox, Overlay};
