/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';

import { getColor } from './statics';


const UlStyled = styled.ul`
      font-size: 20px;
       box-sizing: border-box; 
      direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };
     `;

export default UlStyled;


