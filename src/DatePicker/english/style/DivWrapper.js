/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import {getColor, getBgColor, getBorderColor} from './Statics';

const DivWrapper = styled.div`
      text-align: center;
      padding: 10px 5px 0;
      
      button{
        margin: 2px;
        height: 22px;
        outline: none;
        border-color: ${props => getBorderColor};
        background: ${props => getBgColor(props)};
      }
      
      input{
       height: 22px;
      }
      
      `;

export default DivWrapper;
