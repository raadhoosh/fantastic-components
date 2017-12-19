/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import {getBorderColor} from './Statics';

const TheadStyled = styled.thead` 
          display: table-header-group;
          vertical-align: middle;
          border-color: ${(props) => getBorderColor(props)};
          direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr'};
              `;

export default TheadStyled;
