import React, {Component} from 'react';
import PropTypes from 'prop-types';
import H3Styled from './style/H3Styled'

class H3 extends Component {


  render() {
const{children}=this.props;

    return (
      <H3Styled
        {...this.props}
      >{children}</H3Styled>
    );
  }
}

H3.propTypes = {
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

export default H3;
