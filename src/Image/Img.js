import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Image from './style/ImageStyle';

class Img extends Component {
    render() {

        const {
            src,
            alt,
            style,
            className
        } = this.props;

        return (
            <Image src={src}
                   alt={alt}
                   style={style}
                   className={className}
                   {...this.props}
            />
        )
    }
}

Img.propTypes = {
  autoFit: PropTypes.bool,
  src: PropTypes.string,
  ImageType: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.object,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  inverse: PropTypes.bool,
  rtl: PropTypes.bool,
  borderColor: PropTypes.string,
  bgColor: PropTypes.string,
  bgColorOverlay: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.object,
  id: PropTypes.string,
  drakOverlay: PropTypes.bool,
};

export default Img;
