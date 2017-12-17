/**
 * Created by Programmer1 on 12/17/2017.
 */
import defaultTheme from '../defaultTheme';
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
    color
  } = props;
  let lblC = defaultTheme.darkForeColor;
  if (primary) {
    lblC = theme.primaryColor;
  }
  else if (secondary) {
    lblC = theme.secondaryColor;
  }
  else if (info) {
    lblC = theme.infoColor;
  }
  else if (warning) {
    lblC = theme.warningColor;
  }
  else if (danger) {
    lblC = theme.dangerColor;
  }
  else if (success) {
    lblC = theme.successColor;
  }
  else if (inverse) {
    lblC = theme.inverseColor;
  }
  else if (color) {
    lblC = color;
  }
  return lblC;
}

