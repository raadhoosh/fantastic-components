import defaultTheme from '../../defaultTheme';

function getColor(props) {
  const {
    foreColor,
    theme,
  } = props;

  let ForeC;
  if (foreColor) {
    ForeC = foreColor;
  } else {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.primaryForeColor : defaultTheme.primaryForeColor;
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
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.primary.bgColor : defaultTheme.primary.bgColor;
  }
  return bgC;
};

export {getColor, getBgColor};
