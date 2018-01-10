import styled from 'styled-components';
import getColor from './Statics';
import defaultTheme from '../../defaultTheme';

const RadioStyled = styled.input`                      
            top: -4px;
             margin-${
  (props) => props.theme.rtl
    ? `right`
    : `left`
  }:7px;
           
            cursor: pointer;         
            color:  ${(props) => getColor(props)};
            font-family: ${(props) => props.theme.fontFamily};
            direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };     
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            opacity: 0;
            padding: 0;
            
             ${(props) => props.disabled ? `
                color: ${
  (Object.keys(props.theme).length > 0 && props.theme) ? props.theme.fixColors.lightGray : defaultTheme.fixColors.lightGray
  };
                cursor: not-allowed;   
            ` : `
      
      `}
                
            
              `;
export default RadioStyled;
