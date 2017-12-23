import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PStyled from './style/PStyled';

class P extends Component {
  render() {
    const { children } = this.props;

    return (
      <PStyled {...this.props}>{children}</PStyled>
    );
  }
}

P.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  inverse: PropTypes.bool,
  color: PropTypes.string,
  theme: PropTypes.object
};

export default P;
