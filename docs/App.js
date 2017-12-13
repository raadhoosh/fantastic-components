import React, {Component} from 'react';
import Input from '../src/Input/Input';
import Icon from '../src/Icon/Icon';
import Button from '../src/Button/Button';
import Image from '../src/Image/Img';
import Container from '../src/Container/Container';
import Modal from '../src/Modal/Modal';
import Row from '../src/Row/Row';
import Col from '../src/Col/Col';
import Breadcrumb from '../src/Breadcrumb/Breadcrumb';
import Panel from '../src/Panel/Panel';
import img from './commons/img.jpg';


class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
    return (
      <div>
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
        <Panel header="Header" footer="Footer" secondary>


        <Breadcrumb items={BreadcrumbList} returnPath={(path) => console.log('path', path)}/>
        App...
        <Input primary/>
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
                  onClick={this.openModal}
          />

        </div>
        </Panel>
      </div>

    );
  }
}

export default App;
