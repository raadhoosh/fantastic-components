/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import {getColor, getBgColor, getBorderColor} from './Statics';

const HeadingStyled = styled.div`
      color:${(props) => getColor(props)};         
      border-bottom: 1px solid ${(props) => getBorderColor(props)};
      text-align: center;   
      border-top-left-radius: 0.3rem;
      border-top-right-radius: 0.3rem;
      padding:15px 8px 10px;
      position: relative;
      box-sizing: border-box;      
      `;

export default HeadingStyled;
