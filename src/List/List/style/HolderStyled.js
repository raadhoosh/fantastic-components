/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import { getLightBgColor, getBorderColor } from './Statics';

const HolderStyled = styled.div`
      font-family: ${(props) => props.theme.fontFamily};
      background-color:${(props) => getLightBgColor(props)};  
      direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };
      border: 1px solid  ${(props) => getBorderColor(props)};
      border-radius: 5px;   
      position: relative;
      min-height: 1em;
      line-height: 1.4285em;
      font-size: 1em;
      padding: 15px;
    `;

export default HolderStyled;
