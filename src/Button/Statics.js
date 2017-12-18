import defaultTheme from '../defaultTheme';

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
  if (primary) {
    ForeC = theme.primary.foreColor;
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
  } else {
    ForeC = defaultTheme.primary.foreColor;
  }
  return ForeC;

};

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
  } else {
    bgC = defaultTheme.primary.bgColor;
  }
  return bgC;
};

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
  } else {
    BorderC = defaultTheme.primary.borderColor;
  }
  return BorderC;
};

function paddingX(props) {
  const {
    xSmall,
    small,
    large
  } = props;

  let paddingX = '20px';
  if (xSmall) {
    paddingX = '3px';
  }
  else if (small) {
    paddingX = '10px';
  }
  else if (large) {
    paddingX = '25px';
  }
  return paddingX;
};

function paddingY(props) {
  const {
    xSmall,
    small,
    large
  } = props;


  let paddingY = '10px';
  if (xSmall) {
    paddingY = '3px';
  }
  else if (small) {
    paddingY = '5px';
  }
  else if (large) {
    paddingY = '10px';
  }

  return paddingY;
};

function marginX(props) {
  const {
    xSmall,
    small,
    large
  } = props;

  let marginX = '5px';

  if (xSmall) {
    marginX = '2px';
  }
  else if (small) {
    marginX = '3px';
  }
  else if (large) {
    marginX = '8px';
  }

  return marginX;
};

function marginY(props) {
  const {
    xSmall,
    small,
    large
  } = props;

  let marginY = '3px';

  if (xSmall) {
    marginY = '2px';
  }
  else if (small) {
    marginY = '3px';
  }
  else if (large) {
    marginY = '5px';
  }

  return marginY;
};


export {getColor, getBgColor, getBorderC, paddingX, paddingY, marginX, marginY};
