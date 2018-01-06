/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import {getColor, getBgColor, getBorderColor} from './Statics';

const PaneStyled = styled.div`
             *{
               box-sizing: border-box;
              } 
      position: absolute;
      width: 45%;
      height: 45%;
      top: 20%;
      left: 30%;     
      margin: 0;
      padding: 0;
      z-index: 99;
      border: 2px solid ${(props) => getBorderColor(props)};
      background: #fefefe;  
      `;

export default PaneStyled;
