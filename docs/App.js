import React, {Component} from 'react';
import Input from '../src/Input/Input';
import TextAria from '../src/TextAria/TextAria';
import Icon from '../src/Icon/Icon';
import Button from '../src/Button/Button';
import Image from '../src/Image/Img';
import Container from '../src/Container/Container';
import Modal from '../src/Modal/Modal';
import Row from '../src/Row/Row';
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
        <Input
          icon={'user'}
        />
        <br/>
          <TextAria
          icon={'user'}
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
          test Container
          <Row>
            test row
          </Row>
        </Container>
        <div>
          <Modal isOpen={this.state.isOpen}
                 onClose={() => this.closeModal()}
                 title="title"
                 iconTitle="fa fa-envelope"
                 Btn1Label="yes"
                 allowClose={true}
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
