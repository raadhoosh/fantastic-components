import styled from 'styled-components';
import {getBgColor, getColor} from './statics';

const Div = styled.div`           
             
            position:relative;       
                         
             ul {
                    a{
                      white-space: nowrap;
                     }
               }   
             
              li{
                position:relative;
                padding: 0;
                
                 > ul {
                    position: absolute;
                    display: none;
                    top: 100%;
                      ${
  (this.props.theme.rtl)
    ? 'right : 0'
    : 'left:0'
  };           
                    z-index: 99;
                    padding: 0;
                    margin: 0;
                    min-width: 12em;
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
                    transition: all .3s ease-in-out;
                    background: transparent;                                 
                   } 
              
                 &:hover > ul {
                   display: block;
                   }  
                                                          
               }
             
             nav > ul > li {
               float: ${(this.props.theme.rtl) ? 'right' : 'left' } !important;
             }
          
          	a {
               	padding:5px 10px;
               	color:${(props) => getColor(props)};
               	background-color:${(props) => getBgColor(props)}; 
               	transition:all 0.2s ease-in;              	              
               	
               	i{
               	${
  theme.rtl
    ? 'float : left'
    : 'float : right'
  }; 
               	color:${(props) => getColor(props)} !important;         
               	}
               	} 
           `;


export default Div;
