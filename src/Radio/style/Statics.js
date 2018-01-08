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
    ForeC = (theme && Object.keys(theme).length > 0) ? theme.primary.color : defaultTheme.primary.color;
  } else if (secondary) {
    ForeC = (theme && Object.keys(theme).length > 0) ? theme.secondary.color : defaultTheme.secondary.color;
  } else if (info) {
    ForeC = (theme && Object.keys(theme).length > 0) ? theme.info.color : defaultTheme.info.color;
  } else if (warning) {
    ForeC = (theme && Object.keys(theme).length > 0) ? theme.warning.color : defaultTheme.warning.color;
  } else if (danger) {
    ForeC = (theme && Object.keys(theme).length > 0) ? theme.danger.color : defaultTheme.danger.color;
  } else if (success) {
    ForeC = (theme && Object.keys(theme).length > 0) ? theme.success.color : defaultTheme.success.color;
  } else {
    ForeC = (theme && Object.keys(theme).length > 0) ? theme.default.textColor : defaultTheme.default.textColor;
  }
  return ForeC;
}

export default getColor;
