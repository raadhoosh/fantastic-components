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
  if (primary) {
    ForeC = theme.primary.foreColor;
  }
  else if (secondary) {
    ForeC = theme.secondary.foreColor;
  }
  else if (info) {
    ForeC = theme.info.foreColor;
  }
  else if (warning) {
    ForeC = theme.warning.foreColor;
  }
  else if (danger) {
    ForeC = theme.danger.foreColor;
  }
  else if (success) {
    ForeC = theme.success.foreColor;
  }
  else if (inverse) {
    ForeC = theme.inverse.foreColor;
  }

  if (foreColor) {
    ForeC = foreColor;
  } else {
    ForeC = defaultTheme.defaultColorForeColor;
  }
  return ForeC;

};

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

export {getColor, getSize};
