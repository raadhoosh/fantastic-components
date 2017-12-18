import defaultTheme from '../defaultTheme';

function getBorderC(props) {
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

  if (borderColor) {
    BorderC = borderColor;
  } else {
    BorderC = (theme) ? theme.primary.borderColor : defaultTheme.primary.borderColor;
  }
  return BorderC;
};

export {getColor, getBgColor, getBorderC};
