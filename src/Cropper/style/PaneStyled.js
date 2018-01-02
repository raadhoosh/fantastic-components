/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import {getColor, getBgColor, getBorderColor} from './Statics';

const PaneStyled = styled.div`
      position: absolute;
      width: 45%;
      height: 45%;
      top: 20%;
      left: 20%;     
      margin: 0;
      padding: 0;
      z-index: 99;
      border: 2px solid purple;
      background: #fefefe;  
      `;

export default PaneStyled;
