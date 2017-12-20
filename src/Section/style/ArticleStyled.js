/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';


import { getColor, getBorderColor, getBgColor } from './Statics';

const ArticleStyled = styled.article`        
          font-family: ${(props) => props.theme.fontFamily};               
          background-color: ${(props) => getBgColor(props)};
          color: ${(props) => getColor(props)};  
          border-color:  ${(props) => getBorderColor(props)};
          ${(props) => props.inLine ? 'display: inline-block;' : 'block'}`;

export default ArticleStyled;
