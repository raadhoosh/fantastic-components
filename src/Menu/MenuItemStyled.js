import styled from 'styled-components';

function getColor(props) {
  const {
    foreColor,
    theme,
  } = props;

  let ForeC;
  if (foreColor) {
    ForeC = foreColor;
  } else {
    ForeC = theme.primary.foreColor;
  }
  return ForeC;

};

function getBgColor(props) {
  const {
    bgColor,
    theme
  } = props;

  let bgC;
  if (bgColor) {
    bgC = bgColor;
  } else {
    bgC = theme.primaryColor;
  }
  return bgC;
};

const MenuItemStyled = styled.button`
      color:${(props) => getColor(props)};
      background-color:${(props) => getBgColor(props)};      
      cursor:pointer;      
      font-family: ${(props) => props.theme.fontFamily};             
           
     `;

export default MenuItemStyled;
