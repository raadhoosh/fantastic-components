/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import {getColor} from './Statics';

const CurrentMonth = styled.span`
        color:${(props) => getColor(props)};       
        box-sizing: border-box; 
        position: relative;
        cursor: pointer;
        top: 5px;
      `;

export default CurrentMonth;
