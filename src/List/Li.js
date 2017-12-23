import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import LiStyled from './style/LIStyled';

class Li extends Component {
  render() {
    const { children } = this.props;

    return (<LiStyled {...this.props}>{children}</LiStyled>);
  }
}

Li.propTypes = {
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
  inLine: PropTypes.bool,
  image: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func
};

export default Li;
