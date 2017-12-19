/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import { getIconColor  } from './Statics';


const Section = styled.section`  
         box-sizing: border-box; 
         position:relative;
         direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr'};
         
           i{   
              box-sizing: border-box;                  
              color:  ${(props) => getIconColor(props)};
              position: absolute;
              ${(props) => (props.rtl || props.theme.rtl) ? 'right:10px' : 'left: 10px'};            
              top: ${(props) => (props.label) ? '29px' : '5px'  }; 
          }       
           `;

export default Section;
