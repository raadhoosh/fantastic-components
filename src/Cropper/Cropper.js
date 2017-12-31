import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import Upload from '../Upload/Upload';
import ReactCropper from './ReactCropper';

class Cropper extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isOpen: false,
      preView: '',
      imagePreviewUrl: '',
      height: '',
      width: '',
      crop: props.crop,
      error: false
    };

  }

  dataURItoBlob(dataURI) {
    let byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
      byteString = atob(dataURI.split(',')[1]);
    else
      byteString = unescape(dataURI.split(',')[1]);
    let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    let ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], {type: mimeString});
  }

  onImageLoaded(crop) {
    console.log('Image was loaded. Crop:', crop);
  }

  onCropComplete(crop) {
    this.setState({
      crop: crop
    });
  }

  onOk() {
    let crop = this.state.crop;
    let imageId = "img" + this.props.name;
    let img = document.getElementById(imageId);
    let convasId = "canvas" + this.props.name;
    let canvas = document.getElementById(convasId);
    let ctx = canvas.getContext("2d");
    ctx.canvas.width = this.props.width;
    ctx.canvas.height = this.props.height;
    ctx.fillStyle = "white";
    ctx.fill();
    let x, y, h, w;
    x = crop.x * img.naturalWidth / 100;
    y = crop.y * img.naturalHeight / 100;
    w = crop.width * img.naturalWidth / 100;
    h = crop.height * img.naturalHeight / 100;

    ctx.drawImage(img, x, y, w, h, 0, 0, this.props.width, this.props.height);
    if (this.props.png) {
      this.props.returnDataUrl(this.dataURItoBlob(ctx.canvas.toDataURL()), w);
    }
    else {
      this.props.returnDataUrl(this.dataURItoBlob(ctx.canvas.toDataURL('image/jpeg')), w);
    }

    this.setState({
      isOpen: false
    });
  }

  render() {

    return (
      <div>

        <p>{`اندازه عکس انتخابی:${this.props.width}در${this.props.height}`}</p>

        <Modal isOpen={this.state.isOpen}
                 onClose={() =>
                   this.setState({
                     isOpen: false
                   })
                 }
                 title="Resize"
                 iconTitle="fa fa-envelope"
                 Btn1Label="cancel"
                 Btn1action={() =>
                   this.setState({
                     isOpen: false
                   })
                 }
                 Btn1Type="Primary"
                 Btn2Label="Ok"
                 Btn2action={this.onOk.bind(this)}
                 allowClose={true}
        >
          <ReactCropper src={this.state.preView}
                        crop={this.state.crop}
                        onImageLoaded={(crop) => this.onImageLoaded(crop)}
                        onComplete={(crop) => this.onCropComplete(crop)}
                        name={this.props.name}

          />
        </Modal>
        <Upload
          errorText={this.props.errorText}
          important={this.props.important}
          title={this.props.title}
          returnFile={(file, imagePre) => {
            this.setState({
              preView: imagePre,
              isOpen: true

            })
          }}
        />

       <div style={{marginTop:20 ,textAlign:'center'}}>
         <canvas className="image-style" id={"canvas" + this.props.name}/>
       </div>
      </div>
    );
  }
}
Cropper.defaultProps = {
  resize: true
};
Cropper.propTypes = {
  src: PropTypes.string,
  setWidth: PropTypes.number,
  setHeight: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  square: PropTypes.bool,
  resize: PropTypes.bool,
  border: PropTypes.string,
  onCrop: PropTypes.func,
  png: PropTypes.bool
};

export default Cropper;
