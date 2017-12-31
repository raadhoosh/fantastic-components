/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import defaultTheme from '../../defaultTheme';

const PaginationStyled = styled.nav`  
            direction: ${(props) => ((props.rtl) ? props.rtl : ((props.theme) ? props.theme.rtl : defaultTheme.rtl )) ? 'rtl' : 'ltr'};
            display: flex;
            padding-left: 0; 
            list-style: none;            
              `;

export default  PaginationStyled;
