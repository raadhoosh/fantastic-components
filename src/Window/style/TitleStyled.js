/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import {getColor, getBgColor, getBorderColor} from './Statics';

const TitleStyled = styled.div`
      font-family: monospace;
      background-color: ${(props) => getBgColor(props)}; 
      color: ${(props) => getColor(props)}; 
      font-size: 24px;
      height: 30px;
      text-align: center;
      `;

export default TitleStyled;
