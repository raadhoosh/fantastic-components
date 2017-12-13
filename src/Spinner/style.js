/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';


function getColor(props) {
  const {
    primary,
    secondary,
    info,
    warning,
    danger,
    success,
    inverse,
    foreColor,
    theme
  } = props;
  let ForeC = '#000';
  if (primary) {
    ForeC = theme.primaryColor;
  }
  else if (secondary) {
    ForeC = theme.secondaryColor;
  }
  else if (info) {
    ForeC = theme.infoColor;
  }
  else if (warning) {
    ForeC = theme.warningColor;
  }
  else if (danger) {
    ForeC = theme.dangerColor;
  }
  else if (success) {
    ForeC = theme.successColor;
  }
  else if (inverse) {
    ForeC = theme.inverseColor;
  }

  if (foreColor) {
    ForeC = foreColor;
  }
  return ForeC;

}


function getSize(props) {
    const {
        xxsmall,
        xsmall,
        small,
        medium,
        larg,
        xlarg,
        xxlarg,
    } = props;

    let size = 16;
    if (xxsmall) size = 16;
    else if (xsmall) size = 24;
    else if (small) size = 32;
    else if (medium) size = 48;
    else if (larg) size = 64;
    else if (xlarg) size = 72;
    else if (xxlarg) size = 96;

    return size;
};


const SpinnerWrapper = styled.i`
         padding:5px;
         color:${(props) => getColor(props)};  
         font-size:${(props) => getSize(props)}px !important;          
         display: inline-block;  
         float: ${(props) => (props.rtl || props.theme.rtl) ? 'right' : 'left' };     
                 
        
     `;


export default SpinnerWrapper;
