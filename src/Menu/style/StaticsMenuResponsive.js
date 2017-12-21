import defaultTheme from '../../defaultTheme';

function getFloat(props) {
  const {
    right,
    left
  } = props
  let Float;
  if (right) {
    Float = 'right';
  } else if (left) {
    Float = 'left';
  } else Float = `${
    props.theme.rtl
      ? 'right'
      : 'left'
    }`;
  return Float;
}

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

function getBorderColor(props) {
  const {
    borderColor,
    theme
  } = props;

  let BorderC;
  if (borderColor) {
    BorderC = borderColor;
  } else {
    BorderC = (Object.keys(theme).length > 0 && theme) ? theme.primary.borderColor : defaultTheme.primary.borderColor;
  }
  return BorderC;
};

export {getFloat, getColor, getBgColor, getBorderColor};
