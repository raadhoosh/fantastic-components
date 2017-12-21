import defaultTheme from '../defaultTheme';

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
    theme,
  } = props;

  let ForeC;
  if (foreColor) {
    ForeC = foreColor;
  } else if (primary) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.primary.foreColor : defaultTheme.primary.foreColor;
  } else if (secondary) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.secondary.foreColor : defaultTheme.secondary.foreColor;
  } else if (info) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.info.foreColor : defaultTheme.info.foreColor;
  } else if (warning) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.warning.foreColor : defaultTheme.warning.foreColor;
  } else if (danger) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.danger.foreColor : defaultTheme.danger.foreColor;
  } else if (success) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.success.foreColor : defaultTheme.success.foreColor;
  } else if (inverse) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.inverse.foreColor : defaultTheme.inverse.foreColor;
  } else {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.darkForeColor : defaultTheme.darkForeColor;
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
