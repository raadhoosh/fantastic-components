import React, {Component} from 'react';
import PropTypes from 'prop-types';
import H4Styled from './style/H4Styled'

class H4 extends Component {


  render() {
const{children}=this.props;

    return (
      <H4Styled
        {...this.props}
      >{children}</H4Styled>
    );
  }
}

H4.propTypes = {
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

export default H4;
