import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Input from '../src/Input/Input';
import TextAria from '../src/TextAria/TextAria';
import Icon from '../src/Icon/Icon';
import Button from '../src/Button/Button';
import Image from '../src/Image/Img';
import Container from '../src/Container/Container';
import Modal from '../src/Modal/Modal';
import Row from '../src/Row/Row';
import Col from '../src/Col/Col';
import Panel from '../src/Panel/Panel';
import img from '../docs/commons/img.jpg';
import Table from '../src/TableBasic/Table/Table';
import Thead from '../src/TableBasic/Thead/Thead';
import Tr from '../src/TableBasic/Tr/Tr';
import Th from '../src/TableBasic/Th/Th';
import Td from '../src/TableBasic/Td/Td';
import Tbody from '../src/TableBasic/Tbody/Tbody';
import ReactLink from '../src/Link/Link';
import Slider from '../src/Slider/Slider';
import Menu from '../src/Menu/Menu';
import MenuResponsiv from '../src/Menu/MenuResponsive';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isOpen: false,
      cheeseIsReady: true
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleCheeseChange = this.handleCheeseChange.bind(this);
  }

  handleCheeseChange(event) {
    this.setState({
      cheeseIsReady: !this.state.cheeseIsReady
    })
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

    let mainItems = [
      {
        link: '/home',
        title: 'home',
        subItems: []
      },
      {
        link: '/about',
        title: 'about',
        subItems: [
          {
            link: '/home',
            title: 'ccc'
          },
          {
            link: '/home',
            title: 'ccc'
          },
          {
            link: '/home',
            title: 'ccc'
          }
        ]
      }
    ];

    const items = [
      {id: 1, content: (<div style={{ backgroundColor:'lightgray', height:200 } } > Contetnt 1</div>)},
      {id: 2, content: (<div style={{ backgroundColor:'gray', height:200}}> Content 2</div>) },
      { id: 3, content: (<div style={{ backgroundColor:'darkgray', height:200}}> Content 3</div>)}];


    return (
      <div>
        <MenuResponsiv
          mainItems={mainItems}
          style={{marginBottom: '400px'}}
        />
        <br/>
        <br/>
        <Container>
          <Row>
            <Col lg3>
              <Slider interval={20000} items={items} dots />
            </Col>
            <Col lg9>
              <Slider autoPlay interval={20000} items={items}  />
            </Col>
          </Row>
        </Container>
        <Panel header="Header" footer="Footer" warning>
          <Button
            label={'test'}
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
            label={'test'}
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


        <br/>
        <br/>
        <br/>
        <Table>
          <Thead
            color={'#ff0'}
          >
          <Tr
            primary
          >
            <Th>
              title
            </Th>
            <Th>
              title
            </Th>
          </Tr>
          </Thead>
          <Tbody>
          <Tr>
            <Td>
              text
            </Td>
            <Td>
              text
            </Td>
          </Tr>
          <Tr>
            <Td>
              text
            </Td>
            <Td>
              text
            </Td>
          </Tr>
          </Tbody>
        </Table>
        <br/>
        <br/>

        <br/>
        <br/>
        <Router>
          <div>
            <ul>
            <li>
              <ReactLink
              to="/"
              icon={'home'}
              color={'#f00'}
            >Home
              </ReactLink>
            </li>
            <li>
              <ReactLink to="/about">About</ReactLink>
            </li>
          </ul>
            <hr/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
          </div>
        </Router>
        <Menu
          mainItems={mainItems}
          style={{marginBottom: '400px'}}
        />
      </div>

    );
  }
}

export default App;
