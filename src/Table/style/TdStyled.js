/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';

const TdStyled = styled.td` 
      overflow-x:auto;
      overflow-y: hidden; 
      direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr'};
       border-top: 1px solid #eceeef;
       border:1px solid #eee !important;
              `;


export default TdStyled;
