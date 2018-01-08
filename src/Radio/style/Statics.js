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
    theme
  } = props;

  let ForeC;
  if (foreColor) {
    ForeC = foreColor;
  } else if (primary) {
    ForeC = (theme && Object.keys(theme).length > 0) ? theme.primary.textColor : defaultTheme.primary.textColor;
  } else if (secondary) {
    ForeC = (theme && Object.keys(theme).length > 0) ? theme.secondary.textColor : defaultTheme.secondary.textColor;
  } else if (info) {
    ForeC = (theme && Object.keys(theme).length > 0) ? theme.info.textColor : defaultTheme.info.textColor;
  } else if (warning) {
    ForeC = (theme && Object.keys(theme).length > 0) ? theme.warning.textColor : defaultTheme.warning.textColor;
  } else if (danger) {
    ForeC = (theme && Object.keys(theme).length > 0) ? theme.danger.textColor : defaultTheme.danger.textColor;
  } else if (success) {
    ForeC = (theme && Object.keys(theme).length > 0) ? theme.success.textColor : defaultTheme.success.textColor;
  } else {
    ForeC = (theme && Object.keys(theme).length > 0) ? theme.default.textColor : defaultTheme.default.textColor;
  }
  return ForeC;
}

export default getColor;
