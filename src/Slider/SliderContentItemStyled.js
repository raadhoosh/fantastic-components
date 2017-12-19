/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';


import { getColor, getBorderColor, getBgColor } from './statics';

const SliderContentItemStyled = styled.div`        
          width:${(props) => props.w}px !important;
          display: inline-block;
         `;

export default SliderContentItemStyled;
