import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UlStyled from './style/Ulstyled';

class Ul extends Component {
  render() {
    const { children } = this.props;
    return (<UlStyled {...this.props}>{children}</UlStyled>);
  }
}

Ul.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array]),
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  inverse: PropTypes.bool,
  color: PropTypes.string,
  theme: PropTypes.object,
  inLine: PropTypes.bool
};

export default Ul;
