import defaultTheme from '../../../defaultTheme';

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

function getLightBgColor(props) {
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
  if (bgColor) {
    bgC = bgColor;
  } else if (primary) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.primary.lightColor : defaultTheme.primary.lightColor;
  } else if (secondary) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.secondary.lightColor : defaultTheme.secondary.lightColor;
  } else if (info) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.info.lightColor : defaultTheme.info.lightColor;
  } else if (warning) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.warning.lightColor : defaultTheme.warning.lightColor;
  } else if (danger) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.danger.lightColor : defaultTheme.danger.lightColor;
  } else if (success) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.success.lightColor : defaultTheme.success.lightColor;
  } else if (inverse) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.inverse.lightColor : defaultTheme.inverse.lightColor;
  } else {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.primary.lightColor : defaultTheme.primary.lightColor;
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
    inverse,
    borderColor,
    theme
  } = props;

  let BorderC;
  if (borderColor) {
    BorderC = borderColor;
  } else if (primary) {
    BorderC = (Object.keys(theme).length > 0 && theme) ? theme.primary.borderColor : defaultTheme.primary.borderColor;
  } else if (secondary) {
    BorderC = (Object.keys(theme).length > 0 && theme) ? theme.secondary.borderColor : defaultTheme.secondary.borderColor;
  } else if (info) {
    BorderC = (Object.keys(theme).length > 0 && theme) ? theme.info.borderColor : defaultTheme.info.borderColor;
  } else if (warning) {
    BorderC = (Object.keys(theme).length > 0 && theme) ? theme.warning.borderColor : defaultTheme.warning.borderColor;
  } else if (danger) {
    BorderC = (Object.keys(theme).length > 0 && theme) ? theme.danger.borderColor : defaultTheme.danger.borderColor;
  } else if (success) {
    BorderC = (Object.keys(theme).length > 0 && theme) ? theme.success.borderColor : defaultTheme.success.borderColor;
  } else if (inverse) {
    BorderC = (Object.keys(theme).length > 0 && theme) ? theme.inverse.borderColor : defaultTheme.inverse.borderColor;
  } else {
    BorderC = (Object.keys(theme).length > 0 && theme) ? theme.primary.borderColor : defaultTheme.primary.borderColor;
  }
  return BorderC;
}


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
  if (bgColor) {
    bgC = bgColor;
  } else if (primary) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.primary.bgColor : defaultTheme.primary.bgColor;
  } else if (secondary) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.secondary.bgColor : defaultTheme.secondary.bgColor;
  } else if (info) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.info.bgColor : defaultTheme.info.bgColor;
  } else if (warning) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.warning.bgColor : defaultTheme.warning.bgColor;
  } else if (danger) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.danger.bgColor : defaultTheme.danger.bgColor;
  } else if (success) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.success.bgColor : defaultTheme.success.bgColor;
  } else if (inverse) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.inverse.bgColor : defaultTheme.inverse.bgColor;
  } else {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.primary.bgColor : defaultTheme.primary.bgColor;
  }
  return bgC;
}

function getDarkColor(props) {
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
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.primary.darkColor : defaultTheme.primary.darkColor;
  } else if (secondary) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.secondary.darkColor : defaultTheme.secondary.darkColor;
  } else if (info) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.info.darkColor : defaultTheme.info.darkColor;
  } else if (warning) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.warning.darkColor : defaultTheme.warning.darkColor;
  } else if (danger) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.danger.darkColor : defaultTheme.danger.darkColor;
  } else if (success) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.success.darkColor : defaultTheme.success.darkColor;
  } else if (inverse) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.inverse.darkColor : defaultTheme.inverse.darkColor;
  } else {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.darkForeColor : defaultTheme.darkForeColor;
  }

  return ForeC;
}

function getItemColor(props) {
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
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.primary.bgColor : defaultTheme.primary.bgColor;
  } else if (secondary) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.secondary.bgColor : defaultTheme.secondary.bgColor;
  } else if (info) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.info.bgColor : defaultTheme.info.bgColor;
  } else if (warning) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.warning.bgColor : defaultTheme.warning.bgColor;
  } else if (danger) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.danger.bgColor : defaultTheme.danger.foreColor;
  } else if (success) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.success.bgColor : defaultTheme.success.bgColor;
  } else if (inverse) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.inverse.bgColor : defaultTheme.inverse.bgColor;
  } else {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.darkForeColor : defaultTheme.darkForeColor;
  }

  return ForeC;
}

export { getColor, getBgColor, getBorderColor, getIconColor, getLightBgColor, getDarkColor, getItemColor };
