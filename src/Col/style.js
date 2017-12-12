import styled from 'styled-components';

function getSm(props) {
  const {
    className, children, style, bgColor,
    sm, smAuto, sm1, sm2, sm3, sm4, sm5, sm6, sm7, sm8, sm9, sm10, sm11, sm12,
    md, mdAuto, md1, md2, md3, md4, md5, md6, md7, md8, md9, md10, md11, md12,
    lg, lgAuto, lg1, lg2, lg3, lg4, lg5, lg6, lg7, lg8, lg9, lg10, lg11, lg12,

  } = props;

  if (sm) {
    Col = Col.extend`
            @media (min-width: 576px) {    
                flex-basis: 0;
                flex-grow: 1;
                max-width: 100%; }                 
             `
  } else if (smAuto) {
    Col = Col.extend`
            @media (min-width: 576px) {    
                flex: 0 0 auto;
                width: auto; }                
             `
  } else if (sm1) {
    Col = Col.extend`
            @media (min-width: 576px) {    
                 flex: 0 0 8.33333%;
                 max-width: 8.33333%; }                
             `
  } else if (sm2) {
    Col = Col.extend`
            @media (min-width: 576px) {    
                flex: 0 0 16.66667%;
                max-width: 16.66667%; }                
             `
  } else if (sm3) {
    Col = Col.extend`
            @media (min-width: 576px) {    
                flex: 0 0 25%;
                max-width: 25%; }                
             `
  } else if (sm4) {
    Col = Col.extend`
            @media (min-width: 576px) {    
                flex: 0 0 33.33333%;
    max-width: 33.33333%; }               
             `
  } else if (sm5) {
    Col = Col.extend`
            @media (min-width: 576px) {    
                flex: 0 0 41.66667%;
    max-width: 41.66667%; }          
             `
  } else if (sm6) {
    Col = Col.extend`
            @media (min-width: 576px) {    
               flex: 0 0 50%;
    max-width: 50%; }        
             `
  } else if (sm7) {
    Col = Col.extend`
            @media (min-width: 576px) {    
             flex: 0 0 58.33333%;
    max-width: 58.33333%; }    
             `
  } else if (sm8) {
    Col = Col.extend`
            @media (min-width: 576px) {    
             flex: 0 0 66.66667%;
    max-width: 66.66667%; }   
             `
  } else if (sm9) {
    Col = Col.extend`
            @media (min-width: 576px) {    
              flex: 0 0 75%;
    max-width: 75%; } 
             `
  } else if (sm10) {
    Col = Col.extend`
            @media (min-width: 576px) {    
             flex: 0 0 83.33333%;
    max-width: 83.33333%; }
             `
  } else if (sm11) {
    Col = Col.extend`
            @media (min-width: 576px) {    
             flex: 0 0 91.66667%;
    max-width: 91.66667%; }
             `
  } else if (sm12) {
    Col = Col.extend`
            @media (min-width: 576px) {    
             flex: 0 0 100%;
    max-width: 100%; }
             `
  }


};

function getBgColor(props) {
  const {
    bgColor
  } = props;

  let bgC;
  if (bgColor) {
    bgC = bgColor;
  }
  return bgC;
};

let Col = styled.div`          
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
               `;

export default Col;
