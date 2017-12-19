/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';

import { getBorderColor } from './Statics';

const WrapperStyled = styled.div` 
      padding: 0.6rem;    
      border-color:  ${(props) => getBorderColor(props)} !important;
      direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr'};
              `;


export default WrapperStyled;
