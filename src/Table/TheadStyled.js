/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';

import { getBorder } from './statics';

const TheadStyled = styled.thead` 
          display: table-header-group;
          vertical-align: middle;
          border-color: ${(props) => getBorder(props)};
          direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr'};
              `;


export default TheadStyled;
