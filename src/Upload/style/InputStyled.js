/**
 * Created by Programmer1 on 12/17/2017.
 */
import styled from 'styled-components';
import { getBorderColor } from './Statics';

const InputStyled = styled.input`        
        border: 1px dashed  ${(props) => getBorderColor(props)};
        height: 2em;
        transition: all 0.5s;
        width: 80%;
        direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr'};
      
      `;

export default InputStyled;
