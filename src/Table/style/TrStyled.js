/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';

import { getColor, getBgColor, getBorderColor } from './Statics';

const WrapperStyled = styled.tr`  
          color: ${(props) => getColor(props)} !important;
          background-color:  ${(props) => getBgColor(props)} !important;
          border-top: 1px solid #fff !important;
          border-bottom: 2px solid ${(props) => getBorderColor(props)} !important;  
              `;


export default WrapperStyled;
