/**
 * Created by Programmer1 on 12/16/2017.
 */
import styled from 'styled-components';


const RootStyled = styled.aside`              
        top: 0;
        width: 100%;
        height: 100%;
        position: fixed;
        overflow: hidden;
        z-index: 8;     
        ${(props) => (props.theme.rtl || props.openFromRight) ? 'right:0' : 'lef:0'}
     
              `;
export default RootStyled;
