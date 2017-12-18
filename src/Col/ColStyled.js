import styled from 'styled-components';
import {getLg, getMd, getSm, getBgColor} from './Statics';

const ColStyled = styled.div`          
          position: relative;
          width: 100%;
          min-height: 1px;
          padding-right: 15px;
          padding-left: 15px; 
          box-sizing: border-box;
          background-color:${(props) => getBgColor(props)}; 
                   
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
             
             ${(props) => getSm(props)};             
             ${(props) => getMd(props)};             
             ${(props) => getLg(props)};             
               `;

export default ColStyled;
