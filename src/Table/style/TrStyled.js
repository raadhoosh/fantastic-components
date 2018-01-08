/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';

import { getColor, getBgColor, getBorderColor } from './Statics';

const WrapperStyled = styled.tr`  
          color: ${(props) => getColor(props)};         
          border-top: 1px solid #fff !important;          
              `;


export default WrapperStyled;
