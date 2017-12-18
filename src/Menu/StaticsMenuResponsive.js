import defaultTheme from '../defaultTheme';

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
  } else if (props.theme) {
    ForeC = theme.primary.foreColor;
  } else {
    ForeC = (theme) ? theme.primary.foreColor : defaultTheme.primary.foreColor;
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
    bgC = (theme) ? theme.primary.foreColor : defaultTheme.primary.foreColor;
  }
  return bgC;
};

function getBorderC(props) {
  const {
    borderColor,
    theme
  } = props;

  let BorderC;
  if (borderColor) {
    BorderC = borderColor;
  } else if (props.theme) {
    BorderC = theme.primaryColor;
    ;
  } else {
    BorderC = defaultTheme.primaryColor;
  }
  return BorderC;
};

export {getFloat, getColor, getBgColor, getBorderC};
