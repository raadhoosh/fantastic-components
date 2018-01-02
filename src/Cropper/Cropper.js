import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DivWrapperStyled from './style/DivWrapperStyled';
import CropperContainerStyled from './style/CropperContainerStyled';
import CropLayer from './CropLayer';

import Img from '../Image/Img';
import image from '../../docs/commons/child.jpg';

class Cropper extends Component {

  render() {
    return (
      <div>
        <DivWrapperStyled>
          <Img
            src={image}
            style={{display: 'none'}}
          />
          <CropperContainerStyled>
            <CropLayer>

            </CropLayer>
          </CropperContainerStyled>
        </DivWrapperStyled>
      </div>
    );
  }
}

Cropper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.string,
  style: PropTypes.object
};

export default Cropper;
