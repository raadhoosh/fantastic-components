import styled from 'styled-components';

const ToggleTrackStyled = styled.div` 
             *{
               box-sizing: border-box;
              } 
                  position: relative;
                  width: 50px;
                  height: 24px;
                  padding: 0;
                  border-radius: 30px;                                  
                  transition: all 0.2s ease; 
                  background-color:#4D4D4D;  
                                    
                  &:hover{
                   opacity: 0.8;
                  }                                  	
                                                   	
         `;

export default ToggleTrackStyled;
