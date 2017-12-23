import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './style/InputStyled';
import UploadWrapper from './style/UploadWrapperStyled';
import Important from './style/ImportantStyled';
import Alert from './style/AlertStyled';
import Label from './style/LabelStyled';


class Upload extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: false,
      target: false,
      hover: false,
      file: '',
      imagePreviewUrl: '',
      name: '',
      size: ''
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.dropLeave = this.dropLeave.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.dropTarget = this.dropTarget.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let self = this;

    window.addEventListener('dragover', self.dropTarget);
    window.addEventListener('dragleave', self.dropLeave);
    window.addEventListener('drop', self.handleDrop);
  }

  componentWillUnmount() {
    let self = this;

    window.removeEventListener('dragover', self.dropTarget);
    window.removeEventListener('dragleave', self.dropLeave);
    window.removeEventListener('drop', self.handleDrop);
  }

  dropTarget(e) {
    let self = this;
    if (!self.state.active) {
      self.setState({
        target: true
      });
    }
  }

  dropLeave(e) {
    let self = this;

    if (e.screenX === 0 && e.screenY === 0) { // Checks for if the leave event is when leaving the window
      self.setState({
        target: false
      });
    }
  }

  handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();

    let self = this;
    let uploadObj = {
      target: e.nativeEvent.dataTransfer
    };

    self.setState({
      target: false,
      hover: false
    });

    self.handleImageChange(uploadObj);
  }

  handleDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    let self = this;

    if (!self.state.active) {
      self.setState({
        hover: true
      });
    }
  }

  handleDragLeave(e) {
    let self = this;

    self.setState({
      hover: false
    });
  }

  handleDragOver(e) {
    e.preventDefault();
  }

  handleChange(e) {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  }

  handleImageChange(e) {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
        name: file.name,
        size: file.size
      });
    };
    setTimeout(function () {
      this.props.returnFile(this.state.file, this.state.imagePreviewUrl);
    }.bind(this), 100);
    reader.readAsDataURL(file);
  }

  render() {
    const {
      label,
      errorText,
      important,
    } = this.props;
    return (
      <UploadWrapper {...this.props} >
        <Label for="files" {...this.props}>{label}
          {
            important && <Important>*</Important>
          }
          <Input type="file"
                 name="upload"
                 ref="upload"
                 onDrop={this.handleDrop}
                 onDragEnter={this.handleDragEnter}
                 onDragOver={this.handleDragOver}
                 onDragLeave={this.handleDragLeave}
                 onChange={this.handleImageChange}
                 {...this.props}
          />
        </Label>
        <br/>
        {this.state.name.length > 0 && <span>
          file name:{this.state.name}
        </span>}
        <br/>
        {this.state.size > 0 && <span>
          file size:{this.state.size}
        </span>}
        {errorText && <Alert {...this.props}>{errorText}</Alert>}
      </UploadWrapper>
    );
  }
}

Upload.propTypes = {
  returnFile: PropTypes.func,
  title:PropTypes.string,
  errorText:PropTypes.string,
  important:PropTypes.bool
};

Upload.defaultProps = {
  title: "select  file"
};

export default Upload;
