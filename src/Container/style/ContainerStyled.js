import styled from 'styled-components'

/*---style-start--*/
const ContainerStyled = styled.div`            
              position: relative;
              margin-left: auto;
              margin-right: auto;
              padding-right: 15px;
              padding-left: 15px; 
              box-sizing: border-box;
                            
              @media (min-width: 576px) {    
                  padding-right: 15px;
                  padding-left: 15px; }       
              @media (min-width: 768px) {        
                  padding-right: 15px;
                  padding-left: 15px; } 
              @media (min-width: 992px) {                
                  padding-right: 15px;
                  padding-left: 15px; } 
              @media (min-width: 1200px) {               
                  padding-right: 15px;
                  padding-left: 15px; } 
              @media (min-width: 576px) {                
                  width: 540px;
                  max-width: 100%; } 
              @media (min-width: 768px) {              
                  width: 720px;
                  max-width: 100%; } 
              @media (min-width: 992px) {               
                  width: 960px;
                  max-width: 100%; } 
              @media (min-width: 1200px) {                
                  width: 1140px;
                  max-width: 100%; }            
       `;

export default ContainerStyled;
