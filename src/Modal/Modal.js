import React, {Component} from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import HeaderStyled from './style/HeaderStyled';
import FooterStyled from './style/FooterStyled';
import OverlayStyled from './style/OverlayStyled';
import ModalBodyStyle from './style/ModalBodyStyle';
import ModalStyled from './style/ModalStyled';

class Modal extends Component {
  constructor(props) {
    super(props)
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
      rtl
    } = this.props;

    let Btn1;
    let Btn2;
    let Btn3;
    let BtnHelp;
    if (Btn1action) {
      Btn1 = (<Button label={Btn1Label}
                      onClick={Btn1action}
                      spinner={spinnerBtn1}
                      primary={Btn1Type}

      />);
    }
    if (Btn2action) {
      Btn2 = (<Button label={Btn2Label}
                      onClick={Btn2action}
                      secondary={Btn2Type}/>);
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
              onClick={() => this.bodyClicked = true}
            >
              <HeaderStyled className='header'>
                <Icon
                  color='#fff'
                  iconClass={icon}
                  small
                />
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
                      color="#fff"
                      onClick={this.onClose}
                      style={{cursor: 'pointer'}}
                    />
                }

              </HeaderStyled>
              <ModalBodyStyle>
                {children}
              </ModalBodyStyle>
              {
                (Btn1 || Btn2 || Btn3 || BtnHelp || footerChildren) && <FooterStyled>
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

export default Modal;
