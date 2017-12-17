/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';


const PaginationStyled = styled.nav`  
            direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr'};
            display: flex;
            padding-left: 0; 
            list-style: none; 
           
              `;



export default  PaginationStyled;
