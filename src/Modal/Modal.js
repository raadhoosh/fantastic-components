import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import HeaderStyled from './style/HeaderStyled';
import FooterStyled from './style/FooterStyled';
import OverlayStyled from './style/OverlayStyled';
import ModalBodyStyle from './style/ModalBodyStyle';
import ModalStyled from './style/ModalStyled';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.onClose = this.onClose.bind(this);
    this.bodyClicked = false;
  }

  onClose() {
    if (!this.props.cancelClose && !this.bodyClicked)
      this.props.onClose();
    this.bodyClicked = false;
  }

  render() {
    if (this.props.isOpen === false)
      return null;

    const {
      Btn1Label,
      Btn1action,
      Btn1Type,
      Btn2Label,
      Btn2action,
      Btn2Type,
      Btn3Label,
      Btn3action,
      Btn3Type,
      title,
      children,
      BtnHelpAction,
      spinnerBtn1,
      footerChildren,
      icon,
      cancelClose,
      rtl,
      primary,
      secondary,
      info,
      success,
      danger,
      warning
    } = this.props;

    const colorProps = {primary, secondary, info, success, danger, warning};

    let Btn1;
    let Btn2;
    let Btn3;
    let BtnHelp;
    if (Btn1action || Btn1Label) {
      Btn1 = (<Button
        label={Btn1Label}
        onClick={Btn1action}
        spinner={spinnerBtn1}
        primary={Btn1Type === 'primary'}
        secondary={Btn1Type === 'secondary'}
        warning={Btn1Type === 'warning'}
        danger={Btn1Type === 'danger'}
        info={Btn1Type === 'info'}
        success={Btn1Type === 'success'}
      />);
    }
    if (Btn2action || Btn2Label) {
      Btn2 = (<Button
        label={Btn2Label}
        onClick={Btn2action}
        primary={Btn2Type === 'primary'}
        secondary={Btn2Type === 'secondary'}
        warning={Btn2Type === 'warning'}
        danger={Btn2Type === 'danger'}
        info={Btn2Type === 'info'}
        success={Btn2Type === 'success'}
      />);
    }
    if (Btn3action) {
      Btn3 = (<Button label={Btn3Label}
                      onClick={Btn3action}
                      info={Btn3Type}/>);
    }
    if (BtnHelpAction) {
      BtnHelp = (
        <button onClick={BtnHelpAction}>
          <i className="fa fa-info-circle" aria-hidden="true"/>
        </button>);
    }

    return (
      <div>
        <div>
          <OverlayStyled
            onClick={this.onClose}
          >
            <ModalStyled
              maxWidth={this.props.maxWidth}
              onClick={() => this.bodyClicked = true}
            >
              <HeaderStyled
                className="header"
                {...colorProps}
              >
                { icon &&
                <Icon
                  {...colorProps}
                  inverse
                  iconClass={icon}
                  small
                />
                }
                <label>
                  {title}
                </label>

                {
                  cancelClose ?
                    null
                    :
                    <Icon
                      iconClass='times'
                      xxsmall
                      {...colorProps}
                      inverse
                      onClick={this.onClose}
                      style={{cursor: 'pointer'}}
                    />
                }

              </HeaderStyled>
              <ModalBodyStyle>
                {children}
              </ModalBodyStyle>
              {
                (Btn1 || Btn2 || Btn3 || BtnHelp || footerChildren) && <FooterStyled
                  {...colorProps}
                >
                  {Btn1}
                  {Btn2}
                  {Btn3}
                  {footerChildren}
                  {BtnHelp}
                </FooterStyled>
              }

            </ModalStyled>
          </OverlayStyled>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  allowClose: PropTypes.bool,
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  Btn1Label: PropTypes.string,
  Btn2Label: PropTypes.string,
  Btn3Label: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  footerChildren: PropTypes.node,
  Btn1Type: PropTypes.string,
  Btn2Type: PropTypes.string,
  Btn3Type: PropTypes.string,
  Btn1action: PropTypes.func,
  Btn2action: PropTypes.func,
  Btn3action: PropTypes.func,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
  backdropStyle: PropTypes.object,
  containerClassName: PropTypes.string,
  backdropClassName: PropTypes.string,
  BtnHelpAction: PropTypes.func,
  BtnHelpToolTip: PropTypes.string,
  spinnerBtn1: PropTypes.bool,
  theme: PropTypes.object,
  footer: PropTypes.object,
  icon: PropTypes.string,
  bgColor: PropTypes.string,
  cancelClose: PropTypes.bool,
  open: PropTypes.bool,

  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  inverse: PropTypes.bool,
};

export default Modal;
