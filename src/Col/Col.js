import React from 'react';
import PropTypes from 'prop-types';
import styled, {withTheme} from 'styled-components';

import {} from '../../../RhComponents'


class Col extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        const {
            className, children, style,bgColor,
            sm, smAuto, sm1, sm2, sm3, sm4, sm5, sm6, sm7, sm8, sm9, sm10, sm11, sm12,
            md, mdAuto, md1, md2, md3, md4, md5, md6, md7, md8, md9, md10, md11, md12,
            lg, lgAuto, lg1, lg2, lg3, lg4, lg5, lg6, lg7, lg8, lg9, lg10, lg11, lg12,

        } = this.props;

        let bgC;
        if (bgColor) {
            bgC = bgColor;
        }


        /*---style-start--*/
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

        /*---- col-sm--------*/
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

        /*---- col-md--------*/
        if (md) {
            Col = Col.extend`
           @media (min-width: 768px) {    
               flex-basis: 0;
    flex-grow: 1;
    max-width: 100%; }                
             `
        } else if (mdAuto) {
            Col = Col.extend`
            @media (min-width: 768px) {    
                 flex: 0 0 auto;
    width: auto; }               
             `
        } else if (md1) {
            Col = Col.extend`
           @media (min-width: 768px) {    
                flex: 0 0 8.33333%;
    max-width: 8.33333%; }              
             `
        } else if (md2) {
            Col = Col.extend`
            @media (min-width: 768px) {    
              lex: 0 0 16.66667%;
    max-width: 16.66667%; }               
             `
        } else if (md3) {
            Col = Col.extend`
            @media (min-width: 768px) {    
                flex: 0 0 25%;
    max-width: 25%; }            
             `
        } else if (md4) {
            Col = Col.extend`
            @media (min-width: 768px) {    
                flex: 0 0 33.33333%;
    max-width: 33.33333%; }            
             `
        } else if (md5) {
            Col = Col.extend`
            @media (min-width: 768px) {    
               flex: 0 0 41.66667%;
    max-width: 41.66667%; }    
             `
        } else if (md6) {
            Col = Col.extend`
            @media (min-width: 768px) {    
              flex: 0 0 50%;
    max-width: 50%; }     
             `
        } else if (md7) {
            Col = Col.extend`
            @media (min-width: 768px) {    
             flex: 0 0 58.33333%;
    max-width: 58.33333%; }
             `
        } else if (md8) {
            Col = Col.extend`
            @media (min-width: 768px) {    
             flex: 0 0 66.66667%;
    max-width: 66.66667%; } 
             `
        } else if (md9) {
            Col = Col.extend`
           @media (min-width: 768px) {    
               flex: 0 0 75%;
    max-width: 75%; }
             `
        } else if (md10) {
            Col = Col.extend`
            @media (min-width: 768px) {    
              flex: 0 0 83.33333%;
    max-width: 83.33333%; }
             `
        } else if (md11) {
            Col = Col.extend`
            @media (min-width: 768px) {    
            flex: 0 0 91.66667%;
    max-width: 91.66667%; }
             `
        } else if (md12) {
            Col = Col.extend`
            @media (min-width: 768px) {    
              flex: 0 0 100%;
    max-width: 100%; }
             `
        }

        /*---- col-lg--------*/
        if (lg) {
            Col = Col.extend`
           @media (min-width: 992px) {    
                flex-basis: 0;
    flex-grow: 1;
    max-width: 100%; }            
             `
        } else if (lgAuto) {
            Col = Col.extend`
            @media (min-width: 992px) {    
                 flex: 0 0 auto;
    width: auto; }           
             `
        } else if (lg1) {
            Col = Col.extend`
           @media (min-width: 992px) {    
               flex: 0 0 8.33333%;
    max-width: 8.33333%; }          
             `
        } else if (lg2) {
            Col = Col.extend`
            @media (min-width: 992px) {    
              flex: 0 0 16.66667%;
    max-width: 16.66667%; }        
             `
        } else if (lg3) {
            Col = Col.extend`
            @media (min-width: 992px) {    
                flex: 0 0 25%;
    max-width: 25%; }       
             `
        } else if (lg4) {
            Col = Col.extend`
            @media (min-width: 992px) {    
               flex: 0 0 33.33333%;
    max-width: 33.33333%; }       
             `
        } else if (lg5) {
            Col = Col.extend`
            @media (min-width: 992px) {    
              flex: 0 0 41.66667%;
    max-width: 41.66667%; }
             `
        } else if (lg6) {
            Col = Col.extend`
            @media (min-width: 992px) {    
               flex: 0 0 50%;
    max-width: 50%; }
             `
        } else if (lg7) {
            Col = Col.extend`
            @media (min-width: 992px) {    
            flex: 0 0 58.33333%;
    max-width: 58.33333%; }
             `
        } else if (lg8) {
            Col = Col.extend`
            @media (min-width: 992px) {    
             fflex: 0 0 66.66667%;
    max-width: 66.66667%; }
             `
        } else if (lg9) {
            Col = Col.extend`
           @media (min-width: 992px) {    
               flex: 0 0 75%;
    max-width: 75%; }
             `
        } else if (lg10) {
            Col = Col.extend`
            @media (min-width: 992px) {    
               flex: 0 0 83.33333%;
               max-width: 83.33333%;
                }
             `
        } else if (lg11) {
            Col = Col.extend`
            @media (min-width: 992px) {    
           flex: 0 0 91.66667%;
           max-width: 91.66667%; }
             `
        } else if (lg12) {
            Col = Col.extend`
            @media (min-width: 992px) {    
               flex: 0 0 100%;
               max-width: 100%;
                }
             `
        }


        return (
            <Col
                className={className}
                style={style}
                {...this.props}
            >
                {children}
            </Col>
        );
    }
}


Col.propTypes = {
    children: PropTypes.object,
    className: PropTypes.string,
    style: PropTypes.object,
    sm: PropTypes.bool,
    smAuto: PropTypes.bool,
    sm1: PropTypes.bool,
    sm2: PropTypes.bool,
    sm3: PropTypes.bool,
    sm4: PropTypes.bool,
    sm5: PropTypes.bool,
    sm6: PropTypes.bool,
    sm8: PropTypes.bool,
    sm9: PropTypes.bool,
    sm10: PropTypes.bool,
    sm11: PropTypes.bool,
    sm12: PropTypes.bool,

    md: PropTypes.bool,
    mdAuto: PropTypes.bool,
    md1: PropTypes.bool,
    md2: PropTypes.bool,
    md3: PropTypes.bool,
    md4: PropTypes.bool,
    md5: PropTypes.bool,
    md6: PropTypes.bool,
    md8: PropTypes.bool,
    md9: PropTypes.bool,
    md10: PropTypes.bool,
    md11: PropTypes.bool,
    md12: PropTypes.bool,

    lg: PropTypes.bool,
    lgAuto: PropTypes.bool,
    lg1: PropTypes.bool,
    lg2: PropTypes.bool,
    lg3: PropTypes.bool,
    lg4: PropTypes.bool,
    lg5: PropTypes.bool,
    lg6: PropTypes.bool,
    lg8: PropTypes.bool,
    lg9: PropTypes.bool,
    lg10: PropTypes.bool,
    lg11: PropTypes.bool,
    lg12: PropTypes.bool,


    bgColor: PropTypes.string,
};

Col.defaultProps = {};

export default withTheme(Col);
