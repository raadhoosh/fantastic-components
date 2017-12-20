/**
 * Created by Programmer1 on 12/16/2017.
 */
import styled from 'styled-components';
import { getBgColor, getBorderColor  } from './Statics';

const SvgStyled = styled.svg`    
        float:${(props) => (props.theme.rtl || props.openFromRight) ? 'right' : 'left'} ;
        fill:${(props) => getBgColor(props)};
        border: 5px solid ${(props) => getBorderColor(props)};
              `;
export default SvgStyled;
