/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';

const WrapperStyled = styled.div` 
      direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };
     `;

export default WrapperStyled;


