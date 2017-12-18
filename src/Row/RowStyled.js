import styled from 'styled-components';

const RowStyled = styled.div`            
          display: flex;
          flex-wrap: wrap;
          margin-right: -15px;
          margin-left: -15px; 
          box-sizing: border-box;
          
          @media (min-width: 576px) {    
              margin-right: -15px;
              margin-left: -15px; } 
          @media (min-width: 768px) {    
              margin-right: -15px;
              margin-left: -15px; } 
          @media (min-width: 992px) {   
              margin-right: -15px;
              margin-left: -15px; } 
          @media (min-width: 1200px) {   
              margin-right: -15px;
              margin-left: -15px; }         
       `;

export default RowStyled;
