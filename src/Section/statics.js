/**
 * Created by Programmer1 on 12/14/2017.
 */
import defaultTheme from '../defaultTheme';
export function getBgColor(props) {
  const {
    primary,
    secondary,
    info,
    warning,
    danger,
    success,
    inverse,
    theme,
    bgColor
  } = props;
  let bgC = defaultTheme.default.bgColor;


  if (primary) {
    bgC = theme.primary.bgColor;
  }
  else if (secondary) {
    bgC = theme.secondary.bgColor;
  }
  else if (info) {
    bgC = theme.info.bgColor;
  }
  else if (warning) {
    bgC = theme.warning.bgColor;
  }
  else if (danger) {
    bgC = theme.danger.bgColor;
  }
  else if (success) {
    bgC = theme.success.bgColor;
  }
  else if (inverse) {
    bgC = theme.inverse.bgColor;
  }

  if (bgColor) {
    bgC = bgColor;
  }

  return bgC;
}

export function getColor(props) {
  const {
    primary,
    secondary,
    info,
    warning,
    danger,
    success,
    inverse,
    theme,
    foreColor
  } = props;
  let ForeC = defaultTheme.default.foreColor;

  if (primary) {
    ForeC = theme.primaryColor;
  }
  else if (secondary) {
    ForeC = theme.secondaryColor;
  }
  else if (info) {
    ForeC = theme.infoColor;
  }
  else if (warning) {
    ForeC = theme.warningColor;
  }
  else if (danger) {
    ForeC = theme.dangerColor;
  }
  else if (success) {
    ForeC = theme.successColor;
  }
  else if (inverse) {
    ForeC = theme.inverseColor;
  }

  if (foreColor) {
    ForeC = foreColor;
  }
  return ForeC;
}

export function getBorderColor(props) {
  const {
    primary,
    secondary,
    info,
    warning,
    danger,
    success,
    inverse,
    theme,
    borderColor
  } = props;
  let BorderC =  defaultTheme.default.borderColor;


  if (primary) {
    BorderC = theme.primary.borderColor;
  }
  else if (secondary) {
    BorderC = theme.secondary.borderColor;
  }
  else if (info) {
    BorderC = theme.info.borderColor;
  }
  else if (warning) {
    BorderC = theme.warning.borderColor;
  }
  else if (danger) {
    BorderC = theme.danger.borderColor;
  }
  else if (success) {
    BorderC = theme.success.borderColor;
  }
  else if (inverse) {
    BorderC = theme.inverse.borderColor;
  }

  if (borderColor) {
    BorderC = borderColor;
  }

  return BorderC;
}

export function getIconColor(props) {
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
    ForeC = defaultTheme.default.foreColor;
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
  }
  return ForeC;

};
