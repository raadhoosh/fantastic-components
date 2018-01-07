import defaultTheme from '../../defaultTheme';

function getBgColor(props) {
  const {
    primary,
    secondary,
    info,
    warning,
    danger,
    success,
    bgColor,
    theme
  } = props;

  let bgC;
  if (bgColor) {
    bgC = bgColor;
  } else if (primary) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.primary.color : defaultTheme.primary.color;
  } else if (secondary) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.secondary.color : defaultTheme.secondary.color;
  } else if (info) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.info.color : defaultTheme.info.color;
  } else if (warning) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.warning.color : defaultTheme.warning.color;
  } else if (danger) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.danger.color : defaultTheme.danger.color;
  } else if (success) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.success.color : defaultTheme.success.color;
  } else {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.fixColors.white : defaultTheme.fixColors.white;
  }
  return bgC;
}

function getSm(props) {
  const {
    sm, smAuto, sm1, sm2, sm3, sm4, sm5, sm6, sm7, sm8, sm9, sm10, sm11, sm12
  } = props;

  if (sm) {
    return `
            @media (min-width: 576px) {    
                flex-basis: 0;
                flex-grow: 1;
                max-width: 100%; }                 
             `;
  } else if (smAuto) {
    return `
            @media (min-width: 576px) {    
                flex: 0 0 auto;
                width: auto; }                
             `;
  } else if (sm1) {
    return `
            @media (min-width: 576px) {    
                 flex: 0 0 8.33333%;
                 max-width: 8.33333%; }                
             `;
  } else if (sm2) {
    return `
            @media (min-width: 576px) {    
                flex: 0 0 16.66667%;
                max-width: 16.66667%; }                
             `;
  } else if (sm3) {
    return `
            @media (min-width: 576px) {    
                flex: 0 0 25%;
                max-width: 25%; }                
             `;
  } else if (sm4) {
    return `
            @media (min-width: 576px) {    
                flex: 0 0 33.33333%;
                max-width: 33.33333%; }               
             `;
  } else if (sm5) {
    return `
            @media (min-width: 576px) {    
                flex: 0 0 41.66667%;
                max-width: 41.66667%; }          
             `;
  } else if (sm6) {
    return `
            @media (min-width: 576px) {    
               flex: 0 0 50%;
               max-width: 50%; }        
             `;
  } else if (sm7) {
    return `
            @media (min-width: 576px) {    
             flex: 0 0 58.33333%;
             max-width: 58.33333%; }    
             `;
  } else if (sm8) {
    return `
            @media (min-width: 576px) {    
             flex: 0 0 66.66667%;
             max-width: 66.66667%; }   
             `;
  } else if (sm9) {
    return `
            @media (min-width: 576px) {    
              flex: 0 0 75%;
              max-width: 75%; } 
             `;
  } else if (sm10) {
    return `
            @media (min-width: 576px) {    
             flex: 0 0 83.33333%;
             max-width: 83.33333%; }
             `;
  } else if (sm11) {
    return `
            @media (min-width: 576px) {    
             flex: 0 0 91.66667%;
             max-width: 91.66667%; }
             `;
  } else if (sm12) {
    return `
            @media (min-width: 576px) {    
             flex: 0 0 100%;
             max-width: 100%; }
             `;
  }
}

function getMd(props) {
  const {
    md, mdAuto, md1, md2, md3, md4, md5, md6, md7, md8, md9, md10, md11, md12
  } = props;

  if (md) {
    return `
           @media (min-width: 768px) {    
              flex-basis: 0;
              flex-grow: 1;
              max-width: 100%; }                
             `;
  } else if (mdAuto) {
    return `
            @media (min-width: 768px) {    
                 flex: 0 0 auto;
                 width: auto; }               
             `;
  } else if (md1) {
    return `
           @media (min-width: 768px) {    
                flex: 0 0 8.33333%;
                max-width: 8.33333%; }              
             `;
  } else if (md2) {
    return `
            @media (min-width: 768px) {    
              lex: 0 0 16.66667%;
              max-width: 16.66667%; }               
             `;
  } else if (md3) {
    return `
            @media (min-width: 768px) {    
                flex: 0 0 25%;
                max-width: 25%; }            
             `;
  } else if (md4) {
    return `
            @media (min-width: 768px) {    
                flex: 0 0 33.33333%;
                max-width: 33.33333%; }            
             `;
  } else if (md5) {
    return `
            @media (min-width: 768px) {    
               flex: 0 0 41.66667%;
               max-width: 41.66667%; }    
             `;
  } else if (md6) {
    return `
            @media (min-width: 768px) {    
              flex: 0 0 50%;
              max-width: 50%; }     
             `;
  } else if (md7) {
    return `
            @media (min-width: 768px) {    
             flex: 0 0 58.33333%;
             max-width: 58.33333%; }
             `;
  } else if (md8) {
    return `
            @media (min-width: 768px) {    
             flex: 0 0 66.66667%;
             max-width: 66.66667%; } 
             `;
  } else if (md9) {
    return `
           @media (min-width: 768px) {    
               flex: 0 0 75%;
               max-width: 75%; }
             `;
  } else if (md10) {
    return `
            @media (min-width: 768px) {    
              flex: 0 0 83.33333%;
              max-width: 83.33333%; }
             `;
  } else if (md11) {
    return `
            @media (min-width: 768px) {    
            flex: 0 0 91.66667%;
            max-width: 91.66667%; }
             `;
  } else if (md12) {
    return `
            @media (min-width: 768px) {    
              flex: 0 0 100%;
              max-width: 100%; }
             `;
  }
}

function getLg(props) {
  const {
    lg, lgAuto, lg1, lg2, lg3, lg4, lg5, lg6, lg7, lg8, lg9, lg10, lg11, lg12
  } = props;

  if (lg) {
    return `
           @media (min-width: 992px) {    
                flex-basis: 0;
                flex-grow: 1;
                max-width: 100%; }            
             `;
  } else if (lgAuto) {
    return `
            @media (min-width: 992px) {    
                 flex: 0 0 auto;
                 width: auto; }           
             `;
  } else if (lg1) {
    return `
           @media (min-width: 992px) {    
               flex: 0 0 8.33333%;
               max-width: 8.33333%; }          
             `;
  } else if (lg2) {
    return `
            @media (min-width: 992px) {    
              flex: 0 0 16.66667%;
              max-width: 16.66667%; }        
             `;
  } else if (lg3) {
    return `
            @media (min-width: 992px) {    
                flex: 0 0 25%;
                max-width: 25%; }       
             `;
  } else if (lg4) {
    return `
            @media (min-width: 992px) {    
               flex: 0 0 33.33333%;
               max-width: 33.33333%; }       
             `;
  } else if (lg5) {
    return `
            @media (min-width: 992px) {    
              flex: 0 0 41.66667%;
              max-width: 41.66667%; }
             `;
  } else if (lg6) {
    return `
            @media (min-width: 992px) {    
               flex: 0 0 50%;
               max-width: 50%; }
             `;
  } else if (lg7) {
    return `
            @media (min-width: 992px) {    
            flex: 0 0 58.33333%;
            max-width: 58.33333%; }
             `;
  } else if (lg8) {
    return `
            @media (min-width: 992px) {    
             flex: 0 0 66.66667%;
             max-width: 66.66667%; }
             `;
  } else if (lg9) {
    return `
           @media (min-width: 992px) {    
               flex: 0 0 75%;
               max-width: 75%; }
             `;
  } else if (lg10) {
    return `
            @media (min-width: 992px) {    
               flex: 0 0 83.33333%;
               max-width: 83.33333%;
                }
             `;
  } else if (lg11) {
    return `
            @media (min-width: 992px) {    
           flex: 0 0 91.66667%;
           max-width: 91.66667%; }
             `;
  } else if (lg12) {
    return `
            @media (min-width: 992px) {    
               flex: 0 0 100%;
               max-width: 100%;
                }
             `;
  }
}

export {getLg, getMd, getSm, getBgColor};
