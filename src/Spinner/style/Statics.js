import defaultTheme from '../../defaultTheme';

function getColor(props) {
  const {
    primary,
    secondary,
    info,
    warning,
    danger,
    success,
    foreColor,
    theme,
  } = props;

  let ForeC;
  if (foreColor) {
    ForeC = foreColor;
  } else if (primary) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.primary.color : defaultTheme.primary.color;
  } else if (secondary) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.secondary.color : defaultTheme.secondary.color;
  } else if (info) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.info.color : defaultTheme.info.color;
  } else if (warning) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.warning.color : defaultTheme.warning.color;
  } else if (danger) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.danger.color : defaultTheme.danger.color;
  } else if (success) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.success.color : defaultTheme.success.color;
  } else {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.default.color : defaultTheme.default.color;
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
}

export { getColor, getSize };
