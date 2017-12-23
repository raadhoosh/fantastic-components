import React, {Component} from 'react';
import PropTypes from 'prop-types';
import H5Styled from './style/H5Styled'

class H5 extends Component {


  render() {
const{children}=this.props;

    return (
      <H5Styled
        {...this.props}
      >{children}</H5Styled>
    );
  }
}

H5.propTypes = {
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

export default H5;
