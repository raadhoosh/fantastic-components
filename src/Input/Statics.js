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
  }
  else if (primary) {
    ForeC = (theme) ? theme.primary.foreColor : defaultTheme.primary.foreColor;
  }
  else if (secondary) {
    ForeC = (theme) ? theme.secondary.foreColor : defaultTheme.secondary.foreColor;
  }
  else if (info) {
    ForeC = (theme) ? theme.info.foreColor : defaultTheme.info.foreColor;
  }
  else if (warning) {
    ForeC = (theme) ? theme.warning.foreColor : defaultTheme.warning.foreColor;
  }
  else if (danger) {
    ForeC = (theme) ? theme.danger.foreColor : defaultTheme.danger.foreColor;
  }
  else if (success) {
    ForeC = (theme) ? theme.success.foreColor : defaultTheme.success.foreColor;
  }
  else if (inverse) {
    ForeC = (theme) ? theme.inverse.foreColor : defaultTheme.inverse.foreColor;
  }
  else {
    ForeC = (theme) ? theme.darkForeColor : defaultTheme.darkForeColor;
  }

  return ForeC;

};

function getIconColor(props) {
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
  }
  else if (primary) {
    ForeC = (theme) ? theme.primary.foreColor : defaultTheme.primary.foreColor;
  }
  else if (secondary) {
    ForeC = (theme) ? theme.secondary.foreColor : defaultTheme.secondary.foreColor;
  }
  else if (info) {
    ForeC = (theme) ? theme.info.foreColor : defaultTheme.info.foreColor;
  }
  else if (warning) {
    ForeC = (theme) ? theme.warning.foreColor : defaultTheme.warning.foreColor;
  }
  else if (danger) {
    ForeC = (theme) ? theme.danger.foreColor : defaultTheme.danger.foreColor;
  }
  else if (success) {
    ForeC = (theme) ? theme.success.foreColor : defaultTheme.success.foreColor;
  }
  else if (inverse) {
    ForeC = (theme) ? theme.inverse.foreColor : defaultTheme.inverse.foreColor;
  }
  else {
    ForeC = (theme) ? theme.darkForeColor : defaultTheme.darkForeColor;
  }

  return ForeC;

};

function getBgColor(props) {
  const {
    primary,
    secondary,
    info,
    warning,
    danger,
    success,
    inverse,
    bgColor,
    theme
  } = props;

  let bgC;
  if (primary) {
    bgC = (theme) ? theme.primary.bgColor : defaultTheme.primary.bgColor;
  }
  else if (secondary) {
    bgC = (theme) ? theme.secondary.bgColor : defaultTheme.secondary.foreColor;
  }
  else if (info) {
    bgC = (theme) ? theme.info.bgColor : defaultTheme.info.bgColor;
  }
  else if (warning) {
    bgC = (theme) ? theme.warning.bgColor : defaultTheme.warning.bgColor;
  }
  else if (danger) {
    bgC = (theme) ? theme.danger.bgColor : defaultTheme.danger.bgColor;
  }
  else if (success) {
    bgC = (theme) ? theme.success.bgColor : defaultTheme.success.bgColor;
  }
  else if (inverse) {
    bgC = (theme) ? theme.inverse.bgColor : defaultTheme.inverse.bgColor;
  }

  if (bgColor) {
    bgC = bgColor;
  } else {
    bgC = (theme) ? theme.primary.bgColor : defaultTheme.primary.bgColor;
  }
  return bgC;
};

function getBorderColor(props) {
  const {
    primary,
    secondary,
    info,
    warning,
    danger,
    success,
    inverse,
    borderColor,
    theme
  } = props;

  let BorderC;
  if (borderColor) {
    BorderC = borderColor;
  }
  if (primary) {
    BorderC = (theme) ? theme.primary.borderColor : defaultTheme.primary.borderColor;
  }
  else if (secondary) {
    BorderC = (theme) ? theme.secondary.borderColor : defaultTheme.secondary.borderColor;
  }
  else if (info) {
    BorderC = (theme) ? theme.info.borderColor : defaultTheme.info.borderColor;
  }
  else if (warning) {
    BorderC = (theme) ? theme.warning.borderColor : defaultTheme.warning.borderColor;
  }
  else if (danger) {
    BorderC = (theme) ? theme.danger.borderColor : defaultTheme.danger.borderColor;
  }
  else if (success) {
    BorderC = (theme) ? theme.success.borderColor : defaultTheme.success.borderColor;
  }
  else if (inverse) {
    BorderC = (theme) ? theme.inverse.borderColor : defaultTheme.inverse.borderColor;
  }
  else {
    BorderC = (theme) ? theme.primary.borderColor : defaultTheme.primary.borderColor;
  }
  return BorderC;
};

export {getColor, getBgColor, getBorderColor, getIconColor};
