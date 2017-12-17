/**
 * Created by Programmer1 on 12/14/2017.
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

  let C = defaultTheme.default.foreColor;
  if (color)
    C = color;
  else {
    C = theme.darkForeColor;
    if (primary) {
      C = theme.primaryColor;
    }
    else if (secondary) {
      C = theme.secondaryColor;
    }
    else if (info) {
      C = theme.infoColor;
    }
    else if (warning) {
      C = theme.warningColor;
    }
    else if (danger) {
      C = theme.dangerColor;
    }
    else if (success) {
      C = theme.successColor;
    }
    else if (inverse) {
      C = theme.inverseColor;
    }
    return C;

  }
}
