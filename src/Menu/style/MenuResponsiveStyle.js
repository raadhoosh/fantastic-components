import styled from 'styled-components';
import {getFloat, getColor, getBgColor, getBorderColor} from './StaticsMenuResponsive';
import Button from '../../Button/Button';

const Div = styled.div` 
             *{
              box-sizing: border-box;
              } 
              z-index: 9;
              float: ${(props) => getFloat(props)};                                                    
                 
             nav.menuSimple{            
             width:100%;
             transition: all 0.2s ease-in;
             position:absolute;
             top:30px;
             left:0; 
             overflow-y: auto;  
             max-height: 90vh;               
             z-index: 99;                              
             
           ul{           
            width:100%;  
            transition:all 0.2s ease-in;                 
            overflow: hidden;
            list-style: none;
            margin: 0;
            padding: 0; 
            padding-top:20px;                                  
                     
                  i.fa-sort-asc {
                        display:block;                        
                        ${
  (props) => props.theme.rtl
    ? 'right : 5px;'
    : 'left:5px;'
  };            
                        font-size: 40px !important;
                        position: absolute;                        
                       	color:${(props) => getBgColor(props)};   
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
                                          
               	    }                              	 
               	   
               	a, span{
               	display: block;
               	white-space: nowrap;
               	padding:15px 30px;
               	color:${(props) => getColor(props)};
               	background-color:${(props) => getBgColor(props)};               	
               	transition:all 0.2s ease-in;
               	border-bottom:1px solid ${(props) => getBorderColor(props)};
               	opacity: 0.9;               	            	
               	
               	&:hover{               	 
               	opacity: 1;
                    }
               	}
               	
               	span{
               	 	i{
               	${
  (props) => props.theme.rtl
    ? 'float : left'
    : 'float : right'
  }; 
               	color:${(props) => getColor(props)} !important;         
               	}
               	}
}
       	            	              	          	
          
           }   
                      
         
             .sfHide{
                visibility: hidden;
                opacity: 0;                
             }
             
            .sfShow {
                visibility: visible;
                opacity: 1;               
              };
             
               	
         `;


const ButtonBox = styled.div`       
         display:none; 
         
         i{
           padding: 0 !important;
         }     
       
        
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
const ButtonWrapper = styled(Button)`
      	color:${(props) => getBgColor(props)};   
      	
      	 i{
         	color:${(props) => getBgColor(props)};   
      	 }  
`;

export {Div, ButtonBox, Overlay, ButtonWrapper};
