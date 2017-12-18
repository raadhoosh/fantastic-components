import defaultTheme from '../defaultTheme';

export default function getColor(props) {
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
    ForeC = (theme) ? theme.primary.foreColor : defaultTheme.primary.foreColor;
  }

  return ForeC;

};


