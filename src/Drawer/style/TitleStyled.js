/**
 * Created by Programmer1 on 12/16/2017.
 */
import styled from 'styled-components';
import { getColor, getBgColor, getBorderColor  } from './Statics';

const TitleStyled = styled.div`    
        background-color:${(props) => getBgColor(props)};    
        border: 1px solid ${(props) => getBorderColor(props)};
        color: ${(props) => getColor(props)};
         font-size: 16px;
         font-family: ${(props) => props.theme.fontFamily};
         margin: 0;
         line-height: 82px;
         height: 80px;
         padding: 22px;
         width:200px;
            direction:${(props) => (props.theme.rtl || props.openFromRight) ? 'rtl' : 'ltr'} ;
              `;
export default TitleStyled;
