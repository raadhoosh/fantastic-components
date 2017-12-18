/**
 * Created by Programmer1 on 12/16/2017.
 */
import styled from 'styled-components';


const BodyStyled = styled.div`    
      font-family: ${(props) => props.theme.fontFamily};
       box-sizing: border-box;
       direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr'};
       padding: 15px;       
           `;

export default BodyStyled;
