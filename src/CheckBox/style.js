/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';




const CheckBoxWrapper = styled.input`
        margin: 10px 3px 10px 3px;
        width: 17px;
        height: 17px;   
        position: relative;
        top: 4px;
        margin-left:7px;
        cursor: pointer;
        background-color: ${(props) => getBgColor(props)};
        color:  ${(props) => getColor(props)};
        border-color:   ${(props) => getBorderColor(props)};
        `;


const Label = styled.label`  
    cursor: pointer; 
              `;

const Section = styled.section`  
         position:relative;
         direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };     
           i{                    
          color:${(props) => props.theme.danger.bgColor};
          position: absolute;
          left: ${(props) => props.theme.rtl ? 'auto' : '10px' }; 
          right: ${(props) => props.theme.rtl ? '10px' : 'auto' };          
          bottom: 6px;
          }       
           `;

export { CheckBoxWrapper, Label ,Section};
