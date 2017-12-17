/**
 * Created by Programmer1 on 12/16/2017.
 */
import styled from 'styled-components';

const OverlyStyled = styled.div`    
       position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        ${(props) => (props.theme.rtl || props.openFromRight) ? 'right:0' : 'lef:0'};         
        transition: opacity 0.3s cubic-bezier(0, 0, 0.3, 1);
        will-change: opacity;
    
        
              `;
export default OverlyStyled;
