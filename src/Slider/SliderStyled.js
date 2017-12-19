/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';


import { getColor, getBorderColor, getBgColor } from './statics';

const SliderStyled = styled.div`        
          background:pink;
          overflow-x:hidden;
          margin:0;
          padding:0;
          position:relative;
          direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr'};
          border-color:  ${(props) => getBorderColor(props)};`;

export default SliderStyled;
