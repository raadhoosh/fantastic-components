/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import {getColor, getBgColor, getBorderColor} from './Statics';

const PaneStyled = styled.div`
      position: absolute;
      width: 30%;
      height: 60%;
      top: 20%;
      left: 35%;     
      margin: 0;
      padding: 0;
      z-index: 99;
      border: 1px solid #39f;      
      `;

export default PaneStyled;
