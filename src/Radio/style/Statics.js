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

export default getColor;
