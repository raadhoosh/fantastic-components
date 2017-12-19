/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';


import { getColor, getBorderColor, getBgColor } from './statics';

const SliderContentStyled = styled.div`        
      
          width:${(props) => (props.items.length * props.w)}px !important;
          position:relative;
          margin:0;
          padding:0;
          transition:left 0.5s ease-out;
          left:${(props) => (-props.selectedIndex * props.w)}px !important;
         `;

export default SliderContentStyled;
