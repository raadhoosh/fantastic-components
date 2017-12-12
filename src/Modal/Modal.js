import React, {Component} from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import {Header, Footer, ModalBox, ModalBody, Overlay} from './style';

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
                      bType={Btn1Type}/>);
    }
    if (Btn2action) {
      Btn2 = (<Button label={Btn2Label}
                      onClick={Btn2action}
                      bType={Btn2Type}/>);
    }
    if (Btn3action) {
      Btn3 = (<Button label={Btn3Label}
                      onClick={Btn3action}
                      bType={Btn3Type}/>);
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
          <Overlay
            onClick={this.onClose}
          >
            <ModalBox
              onClick={() => this.bodyClicked = true}
            >
              <Header className='header'>
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

              </Header>
              <ModalBody>
                {children}
              </ModalBody>
              {
                (Btn1 || Btn2 || Btn3 || BtnHelp || footerChildren) && <Footer
                  className='footer'
                >
                  {Btn1}
                  {Btn2}
                  {Btn3}
                  {footerChildren}
                  {BtnHelp}

                </Footer>
              }

            </ModalBox>
          </Overlay>
        </div>
      </div>
    )
  }
}

export default Modal;
