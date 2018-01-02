/**
 * Created by Programmer1 on 12/16/2017.
 */
import styled from 'styled-components';
import defaultTheme from '../../defaultTheme';

const BodyStyled = styled.div`    
      font-family: ${(props) => props.theme.fontFamily};
       box-sizing: border-box;
       direction: ${(props) => ((props.rtl) ? props.rtl : ((props.theme) ? props.theme.rtl : defaultTheme.rtl )) ? 'rtl' : 'ltr'};
       padding: 15px;       
           `;

export default BodyStyled;
