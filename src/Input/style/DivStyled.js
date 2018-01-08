/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import {getIconColor} from './Statics';

const Div = styled.div`  
         box-sizing: border-box; 
         position:relative;
         direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr'};
         margin:${(props) => (props.noMargin) ? '0px' : '5px'};
         
           i{   
              box-sizing: border-box;                  
              color:  ${(props) => getIconColor(props)};
              position: absolute;
              ${(props) => (props.rtl || props.theme.rtl) ? 'right:5px' : 'left: 5px'};            
              top: ${(props) => (props.label) ? '22px' : '4px'  }; 
          }       
           `;

export default Div;
