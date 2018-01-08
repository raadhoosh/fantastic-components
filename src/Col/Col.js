import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ColStyled from './style/ColStyled';

class Col extends Component {

  render() {
    const {
      className, children, style
    } = this.props;

    return (
      <ColStyled
        className={className}
        style={style}
        {...this.props}
      >
        {children}
      </ColStyled>
    );
  }
}

Col.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array]),
  className: PropTypes.string,
  style: PropTypes.object,
  sm: PropTypes.bool,
  smAuto: PropTypes.bool,
  sm1: PropTypes.bool,
  sm2: PropTypes.bool,
  sm3: PropTypes.bool,
  sm4: PropTypes.bool,
  sm5: PropTypes.bool,
  sm6: PropTypes.bool,
  sm8: PropTypes.bool,
  sm9: PropTypes.bool,
  sm10: PropTypes.bool,
  sm11: PropTypes.bool,
  sm12: PropTypes.bool,

  md: PropTypes.bool,
  mdAuto: PropTypes.bool,
  md1: PropTypes.bool,
  md2: PropTypes.bool,
  md3: PropTypes.bool,
  md4: PropTypes.bool,
  md5: PropTypes.bool,
  md6: PropTypes.bool,
  md8: PropTypes.bool,
  md9: PropTypes.bool,
  md10: PropTypes.bool,
  md11: PropTypes.bool,
  md12: PropTypes.bool,

  lg: PropTypes.bool,
  lgAuto: PropTypes.bool,
  lg1: PropTypes.bool,
  lg2: PropTypes.bool,
  lg3: PropTypes.bool,
  lg4: PropTypes.bool,
  lg5: PropTypes.bool,
  lg6: PropTypes.bool,
  lg8: PropTypes.bool,
  lg9: PropTypes.bool,
  lg10: PropTypes.bool,
  lg11: PropTypes.bool,
  lg12: PropTypes.bool,


  bgColor: PropTypes.string,
};

export default Col;
