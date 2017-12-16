import React, {Component} from 'react';
import Input from '../src/Input/Input';
import TextAria from '../src/TextAria/TextAria';
import Icon from '../src/Icon/Icon';
import Button from '../src/Button/Button';
import Image from '../src/Image/Img';
import Container from '../src/Container/Container';
import Modal from '../src/Modal/Modal';
import Row from '../src/Row/Row';
import Col from '../src/Col/Col';
import Breadcrumb from '../src/Breadcrumb/Breadcrumb';
import Panel from '../src/Panel/Panel';
import CheckBox from '../src/CheckBox/CheckBox';
import SelectInput from '../src/SelectInput/SelectInput';
import img from './commons/img.jpg';

import Upload from '../src/Upload/Upload';
import ToolTip from '../src/ToolTip/ToolTip';


class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isOpen: false,
      isLiked: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick () {
    this.setState({
      isLiked: !this.state.isLiked
    });
  }
  openModal() {
    this.setState({
      isOpen: true
    });
  }

  closeModal() {
    this.setState({
      isOpen: false
    });
  }

  render() {
    let BreadcrumbList = [
      {
        name: 'خانه',
        path: '/'
      },
      {
        name: 'dsd',
        path: '/vbvgb'
      },
      {
        name: 'gdfhfgjih',
        path: '/vbvgb'
      }
    ];
    let items=[
      {
        text:'text 1',
        value:0
      },
      {
        text:'text 2',
        value:1
      }

    ]
    const label = this.state.isLiked ? "Hey, thanks!" : "Tip: Gimme a thumbs up!";
    return (
      <div>
        <CheckBox label="cheack box 1"  primary/>
        <SelectInput options={items} primary label=" select 1 " icon="bars"/>
        <ToolTip label={label} secondary delayTime={500} position="bottom">
          <div  onClick={this.handleClick}>
           <label>Like</label>
          </div>
        </ToolTip>
        <Panel header="Header" footer="Footer" warning>
          <Button
            label={'تست'}
            secondary
            onClick={() => {
              alert("hello")
            }}
          />
          <br/>
          <Image
            src={img}
          />
          <br/>
          <Container>
            test Container
            <Row>
              test row
            </Row>
          </Container>
        </Panel>
        <br/>
        <Panel header="Header"  secondary>


          <Breadcrumb primary rtl items={BreadcrumbList} returnPath={(path) => console.log('path', path)} />
          App...
          <Input
            icon={'user'}
            primary
            label="text aria 1"
            important
            errorText="  teact arai a"
          />
          <br/>
          <TextAria
            icon={'user'}
            secondary
            label="text aria 1"
            important
            errorText="  teact arai a"
          />
          <br/>
          <Icon
            iconClass={'user'}
            foreColor={'#f00'}
          />
          <br/>
          <Button
            label={'تست'}
            secondary
            onClick={() => {
              alert("hello")
            }}
          />
          <br/>
          <Image
            src={img}
          />
          <br/>
          <Container>
            <Row>
              <Col
                lg4
                sm3
                md3
                bgColor={"#ddd"}
              >
                test Col
              </Col>
              <Col
                lg4
                sm3
                md3
              >
                test Col
              </Col>
              <Col
                lg4
                sm3
                md3
              >
                test Col
              </Col>
            </Row>
          </Container>
          <div>
            <Modal isOpen={this.state.isOpen}
                   onClose={() => this.closeModal()}
                   title="title"
                   iconTitle="envelope"
                   Btn1Label="yes"
                   footerChildren={<div><b>footer</b></div>}
            >

            </Modal>
            <Button label="open modal"
                    primary
                    icon="user"
                    rtl
                    onClick={this.openModal}
            />


          </div>
        </Panel>


        <br/>
        <br/>
        <br/>
        <Upload primary label="file select" important errorText="error in select file"/>

      </div>

    );
  }
}

export default App;
