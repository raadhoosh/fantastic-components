/**
 * Created by Programmer1 on 12/16/2017.
 */
import styled from 'styled-components';

const OverlyStyled = styled.div`    
       position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;         
        transition: opacity 0.3s cubic-bezier(0, 0, 0.3, 1);
        will-change: opacity;
        
              `;
export default OverlyStyled;
