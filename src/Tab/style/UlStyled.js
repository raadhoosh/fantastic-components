/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';

const UlStyled = styled.ul`
      margin: 0;
      padding: 0;
      position: relative;
      top: 1px;
      z-index: 1;
      font-size: 20px;
      box-sizing: border-box; 
      direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };
     `;

export default UlStyled;


