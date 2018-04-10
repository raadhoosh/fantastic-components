import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Img extends Component {
  render() {

    const {
      src,
      alt,
      style
    } = this.props;

    return (
      <div
        className="image_container"
        {...this.props}
        style={style}
      >
        <img
          src={src}
          alt={alt}
          className="image"
        />
      </div>
    );
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
