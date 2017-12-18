import styled from 'styled-components';

const OverlayStyled = styled.div`

         *{
          box-sizing: border-box;
         }

        box-sizing: border-box;      
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        z-index: 9998;
        background: rgba(0, 0, 0, 0.3);
        overflow-x: hidden;
        overflow-y: auto;
        padding: 30px;
        `;

export default OverlayStyled;
