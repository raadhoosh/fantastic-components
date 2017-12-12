import styled from 'styled-components';

let Col = styled.div`          
          position: relative;
          width: 100%;
          min-height: 1px;
          padding-right: 15px;
          padding-left: 15px; 
          box-sizing: border-box;
          background-color:${bgC};
                   
          @media (min-width: 576px) {    
              padding-right: 15px;      
              padding-left: 15px; } 
          @media (min-width: 768px) 
              padding-right: 15px;
              padding-left: 15px; } 
          @media (min-width: 992px) 
              padding-right: 15px;
              padding-left: 15px; } 
          @media (min-width: 1200px) 
              padding-right: 15px;
              padding-left: 15px; } }    
               `;

export default Col;
