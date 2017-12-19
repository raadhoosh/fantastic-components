/**
 * Created by Programmer1 on 12/16/2017.
 */
import styled from 'styled-components';

import { getBorderColor } from './Statics';


const WrapperStyled = styled.div`    
  background-color: #ffffff;
  border: 1px solid ${(props) => getBorderColor(props)};
  border-radius: 0;
  box-sizing: border-box;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05)`;

export default WrapperStyled;
