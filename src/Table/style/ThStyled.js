/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';

import { getColor, getBgColor } from './Statics';

const ThStyled = styled.th` 
          color: ${(props) => getColor(props)} !important;
          background-color:  ${(props) => getBgColor(props)} !important;
          border-top: 1px solid #fff !important;      
          padding:5px 0;
          height:35px
              `;


export default ThStyled;
