/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import {getColor, getBgColor, getBorderColor} from './Statics';

const NavigationPrevious = styled.span`
       position: relative;
       display: inline-block;
       width: 32px;
       height: 32px;
       cursor: pointer;
       float: left;
       
       &:before{
        content: '';
        color:${(props) => getColor(props)};       
        line-height: 1.7rem;
        text-align: center;
        cursor: pointer;
        position: absolute;
        top: 5px;
        width: 0;
        border: 0.45rem solid transparent;
        z-index: 1;
        left: 5px;
        border-right-color: ${(props) => getBorderColor(props)};
        box-sizing: border-box;
       }       
      `;

export default NavigationPrevious;
