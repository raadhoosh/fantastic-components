/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import {getColor, getBgColor, getBorderColor} from './Statics';

const Icon = styled.i`
      color:${(props) => getColor(props)};       
      position: absolute;
      left: 5px;
      top: 8px;
      font-size: 12px;
      `;

export default Icon;
