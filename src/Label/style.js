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
  let ForeC='#000';
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

};




const Label = styled.label`
        font-family: ${(props) => props.theme.fontFamily};
         color:${(props) => getColor(props)};       
         ${
        props => props.pointer ?
    ` cursor: pointer;`
    : ``
  }`;


export default Label;
