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
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.default.textColor : defaultTheme.default.textColor;
  }

  return ForeC;
}

function getIconColor(props) {
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
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.primary.textColor : defaultTheme.primary.textColor;
  } else if (secondary) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.secondary.textColor : defaultTheme.secondary.textColor;
  } else if (info) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.info.textColor : defaultTheme.info.textColor;
  } else if (warning) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.warning.textColor : defaultTheme.warning.textColor;
  } else if (danger) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.danger.textColor : defaultTheme.danger.textColor;
  } else if (success) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.success.textColor : defaultTheme.success.textColor;
  } else {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.default.textColor : defaultTheme.default.textColor;
  }

  return ForeC;
}

function getBgColor(props) {
  const {
    primary,
    secondary,
    info,
    warning,
    danger,
    success,
    bgColor,
    theme
  } = props;

  let bgC;
  if (bgColor) {
    bgC = bgColor;
  } else if (primary) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.primary.color : defaultTheme.primary.color;
  } else if (secondary) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.secondary.color : defaultTheme.secondary.color;
  } else if (info) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.info.color : defaultTheme.info.color;
  } else if (warning) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.warning.color : defaultTheme.warning.color;
  } else if (danger) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.danger.color : defaultTheme.danger.color;
  } else if (success) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.success.color : defaultTheme.success.color;
  } else {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.default.color : defaultTheme.default.color;
  }
  return bgC;
}

function getBorderColor(props) {
  const {
    primary,
    secondary,
    info,
    warning,
    danger,
    success,
    borderColor,
    theme
  } = props;

  let BorderC;
  if (borderColor) {
    BorderC = borderColor;
  } else if (primary) {
    BorderC = (Object.keys(theme).length > 0 && theme) ? theme.primary.darkColor : defaultTheme.primary.darkColor;
  } else if (secondary) {
    BorderC = (Object.keys(theme).length > 0 && theme) ? theme.secondary.darkColor : defaultTheme.secondary.darkColor;
  } else if (info) {
    BorderC = (Object.keys(theme).length > 0 && theme) ? theme.info.darkColor : defaultTheme.info.darkColor;
  } else if (warning) {
    BorderC = (Object.keys(theme).length > 0 && theme) ? theme.warning.darkColor : defaultTheme.warning.darkColor;
  } else if (danger) {
    BorderC = (Object.keys(theme).length > 0 && theme) ? theme.danger.darkColor : defaultTheme.danger.darkColor;
  } else if (success) {
    BorderC = (Object.keys(theme).length > 0 && theme) ? theme.success.darkColor : defaultTheme.success.darkColor;
  } else {
    BorderC = (Object.keys(theme).length > 0 && theme) ? theme.default.darkColor : defaultTheme.default.darkColor;
  }
  return BorderC;
}

export {getColor, getBgColor, getBorderColor, getIconColor};
