import React, {Component} from 'react';
import PropTypes from 'prop-types';
import H6Styled from './style/H6Styled'

class H6 extends Component {


  render() {
const{children}=this.props;

    return (
      <H6Styled
        {...this.props}
      >{children}</H6Styled>
    );
  }
}

H6.propTypes = {
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

export default H6;
