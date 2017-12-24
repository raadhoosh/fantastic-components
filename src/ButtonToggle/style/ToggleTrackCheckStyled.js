import styled from 'styled-components';

const ToggleTrackCheckStyled = styled.div` 
             *{
               box-sizing: border-box;
              } 
                position: absolute;
                width: 14px;
                height: 10px;
                top: 0px;
                bottom: 0px;
                margin-top: auto;
                margin-bottom: auto;
                line-height: 0;
                left: 8px;
                opacity: 0;
                -webkit-transition: opacity 0.25s ease;
                -moz-transition: opacity 0.25s ease;
                transition: opacity 0.25s ease;                       	
         `;

export default ToggleTrackCheckStyled;
