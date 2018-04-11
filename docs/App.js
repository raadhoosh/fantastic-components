import React, {Component} from 'react';
import {ThemeProvider} from 'styled-components';

import moment from 'moment';
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
import Breadcrumb from '../src/Breadcrumb/Breadcrumb';
import Panel from '../src/Panel/Panel';
import img from '../docs/commons/img.jpg';
import TableBasic from '../src/TableBasic/Table/Table';
import Thead from '../src/TableBasic/Thead/Thead';
import Tr from '../src/TableBasic/Tr/Tr';
import Th from '../src/TableBasic/Th/Th';
import Td from '../src/TableBasic/Td/Td';
import Tbody from '../src/TableBasic/Tbody/Tbody';
import ReactLink from '../src/Link/Link';
import Slider from '../src/Slider/Slider';
import Menu from '../src/Menu/Menu';
import MenuResponsive from '../src/Menu/MenuResponsive';
import ButtonToggle from '../src/ButtonToggle/ButtonToggle';
import Collapsible from '../src/Collapsible/Collapsible';
import Spinner from '../src/Spinner/Spinner';
import List from '../src/List/List/List';
import Radio from '../src/Radio/Radio';
import Notify from '../src/Notify/Notify';
import ToolTip from '../src/ToolTip/ToolTip';
import CheckBox from '../src/CheckBox/CheckBox';
import Table from '../src/Table/Table';


import BehzadiComponents from './BehzadiComponents';
import AlesaadiComponents from './AlesaadiComponents';

import SelectInput from '../src/SelectInput/SelectInput';


import defaultTheme from '../src/defaultTheme';


/*import DatePickerFa from '../src/DatePicker/fa/DatePicker';*/
import DatePicker from '../src/DatePicker/english/DatePicker';
import Cropper from '../src/Cropper/Cropper';
import Window from '../src/Window/Window';


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
      cheeseIsReady: true,
      returnDataUrl: [],
      inputValue: moment.now(),
      admins: [
        {
          id: 1,
          firstName: 'Asim',
          lastName: 'Brown',
          email: 'asim.brown@gmail.com'

        },
        {
          id: 2,
          firstName: 'Hamid',
          lastName: 'Ghasempour',
          email: 'hamid.ghasempour@gmail.com'

        },
        {
          id: 3,
          firstName: 'Nassim',
          lastName: 'Mehri',
          email: 'Nassim.mehri@gmail.com'

        },
        {
          id: 4,
          firstName: 'Sajjad',
          lastName: 'Mohammadi',
          email: 'sajjad.mohammadi@gmail.com'

        }
      ]
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
    let errorList = ['Email Invalid!', 'Username is wrong!'];
    let BreadcrumbList = [
      {
        name: 'home',
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
      {id: 1, content: (<div style={{backgroundColor: 'lightgray', height: 200}}> Contetnt 1</div>)},
      {id: 2, content: (<div style={{backgroundColor: 'gray', height: 200}}> Content 2</div>)},
      {id: 3, content: (<div style={{backgroundColor: 'darkgray', height: 200}}> Content 3</div>)}];

    let crop = {
      width: 100,
      aspect: 100 / 88
    };
    let options = [
      {
        value: '1',
        text: 'Java'
      },
      {
        value: '2',
        text: 'Javascript'
      },
      {
        value: '3',
        text: 'C#'
      }
    ];
    return (
      <div style={{
        padding: '50px'
      }}>
        <br/>
        <Table
          rowsCount={this.state.admins.length}
          columns={[
            'Firstname',
            'Lastname',
            'Email'
          ]}

          getRow={(rowId) => {

            let firstName = this.state.admins[rowId].firstName;
            let lastName = this.state.admins[rowId].lastName;
            let email = this.state.admins[rowId].email;

            return [
              firstName,
              lastName,
              email

            ];
          }}
          iconButtonEdit='fa fa-pencil'
          onEditClick={(rowId) => {

          }}
          pageSize={15}

          onDeleteClick={(rowId) => {

          }}

          onShowClick={(rowId) => {

          }}
          success

        />
        <br/>

        <CheckBox
          label={'check'}
          primary
          inverse
          color={'#f00'}
        />
        <br/>
        <br/>
        <CheckBox
          label={'check'}
          warning
        />
        <br/>
        <br/>
        <Button
          label={'Button'}
          primary
        />
        <br/>
        <br/>
        <ToolTip
          label={'hoverahoverahoverahoverahovera'}
          primary
        >
          hover me
        </ToolTip>
        <br/>
        <br/>
        <ToolTip
          label={'hoveraaaaaaaaaaa'}
          success
        >
          <Button
            label={' hover me'}
            success
          />


        </ToolTip>
        <div>
          <MenuResponsive
            mainItems={mainItems}
            style={{marginBottom: '400px'}}

          />
          <br/>
          <br/>
          <List options={errorList}
                title={'List of Errors'}
                warning

          />
          <br/>
          <br/>
          <List options={errorList}
                title={'List of Errors'}

          />
          <br/>
          <br/>
          <Spinner
            icon={'user'}
            primary
          />
          <br/>
          <br/>
          <div>
            <Cropper/>
          </div>
          <br/>
          <br/>
          <div>
            <h1>ورودی تاریخ </h1>
            <div
              style={{maxWidth: '300px'}}
            >
              <Container>
                <Row>
                  <Col md12
                  >
                    <DatePicker
                      showTime={true}
                      inputValue={this.state.inputValue}
                      success
                    />
                  </Col>
                  <Col md6>
                    {/*  <DatePickerFa
                    showTime={false}
                    inputValue={this.state.inputValue}
                  />*/}
                  </Col>
                </Row>
              </Container>
            </div>

          </div>
          <br/>
          <br/>
          <div>
            <Window
              primary
            />
          </div>
          <br/>
          <br/>

          <div>

          </div>
          <br/>
          <br/>
          <Collapsible
            trigger="Start here"
            transitionTime={400}
            success
          >
            <p>This is the collapsible content. It can be any element or React component you like.</p>
            <p>It can even be another Collapsible component. Check out the next section!</p>
          </Collapsible>
          <br/>
          <br/>
          <div>
            <ButtonToggle
              id='cheese-status'
              defaultChecked={this.state.cheeseIsReady}
              onChange={this.handleCheeseChange.bind(this)}

            />
            <label htmlFor='cheese-status'>Adjacent label tag</label>
          </div>
          <br/>
          <br/>
          <Container>
            <Row>
              <Col lg3>
                <Slider interval={20000} items={items} dots/>
              </Col>
              <Col lg9>
                <Slider autoPlay interval={20000} items={items}/>
              </Col>
            </Row>
          </Container>
          <Panel header="Header"
                 footer="Footer">
            <Button
              label={'test'}
              onClick={() => {
                alert("hello")
              }}
            />
            <Button
              label={'test'}
              primary
              onClick={() => {
                alert("hello")
              }}
            />
            <br/>
            <Image
              src={img}
            />
            <br/>

          </Panel>
          <br/>
          <Panel header="Header" footer="Footer" secondary>


            <Breadcrumb items={BreadcrumbList}
                        returnPath={(path) => console.log('path', path)}
            />
            App...
            <Input
              icon={'user'}
              primary
              errorText={'error'}
              placeholder={'success'}
              noMargin
            />
            <br/>
            <Input
              icon={'user'}
              primary
              label={'dhfsdif'}
              errorText={'error'}
              placeholder={'success'}
              noMargin
            />
            <br/>
            <TextAria
              icon={'user'}
              primary
              label={'dhfsdif'}
              errorText={'error'}
              placeholder={'success'}
              noMargin
              error
            />
            <br/>
            <Icon
              primary
              inverse
              iconClass={'user'}
            />
            <br/>
            <Icon
              success
              larg
              iconClass={'user'}
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
            <Button
              label={'test'}
              secondary
              onClick={() => {
                alert("hello")
              }}
              disable
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


            </div>
          </Panel>


          <br/>
          <br/>
          <br/>
          <TableBasic>
            <Thead>
            <Tr
              primary
            >
              <Th
                primary
              >
                title
              </Th>
              <Th
                primary
              >
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
          </TableBasic>
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

        <Radio
          label={'Disabled example'}
          name={'name'}
          warning
          disabled
        />
        <Radio
          label={'Disabled example'}
          name={'name1'}
          info
          checked
        />
        <Radio
          label={'Disabled example'}
          name={'name1'}
          danger
        />
        <br/>
        <MenuResponsive
          mainItems={mainItems}
          style={{marginBottom: '400px'}}
          success
        />
        <br/>
        <Menu
          mainItems={mainItems}
          style={{marginBottom: '400px'}}
          success
        />
        <br/>
        <Notify
          position="top right"
          title="Secondary Notify"
          time={9000}
          msg="This notification will hide in 9s "
        />
        <br/>
        <br/>
        <br/>
        <ToolTip
          label={'hoveraaaaaaaaaaa'}
        >
          hover me
        </ToolTip>

        <Modal isOpen={this.state.isOpen}
               title={'Modal'}
               allowClose
               iconTitle="envelope"
               Btn1Label="yes"
               onClose={() => this.closeModal()}
               footerChildren={<div><b>footer</b></div>}
               maxWidth={'500px'}
               primary
               Btn2Label="No"
               btn1action={() => {
               }}
               btnaction={() => {
               }}
               btn1type="primary"

        >
        </Modal>
        <Radio
          label={'Disabled example'}
          disabled={true}
          success

        />
        <Radio
          label={'Disabled example'}
          disabled={true}

        />

        <Panel header="Header"
               footer="Footer">
          <Button
            label={'test'}
            onClick={() => {
              alert("hello")
            }}
          />
          <Button
            label={'test'}
            primary
            onClick={() => {
              alert("hello")
            }}
          />
          <br/>
          <Image
            src={img}
          />
          <br/>

        </Panel>


        <Button label="open modal"
                primary
                small
                icon={'user'}
                onClick={this.openModal}
        />
        <div>
          <AlesaadiComponents/>
          <BehzadiComponents/>

          <br/>
          <br/>
          <SelectInput
            label={'primary '}
            primary
            options={options}
            defaultOption={'Nothing'}
            defaultValue={'0'}
          />
          <br/>
          <br/>
          <Row>
            <Button
              label={'default'}
              xSmall
            />
            <Button
              label={'primary'}
              primary
              small
            />

            <Button
              label={'secondary'}
              secondary
              large
            />
            <Button
              label={'warning'}
              warning
            />
            <Button
              label={'success'}
              success
            />
            <Button
              label={'info'}
              info
            />
            <Button
              label={'danger'}
              danger
            />
          </Row>
          <Row>
            <Button
              label={'default'}
              inverse
            />
            <Button
              label={'primary'}
              primary
              inverse
            />
            <Button
              label={'secondary'}
              secondary
              inverse
            />
            <Button
              label={'warning'}
              warning
              inverse
            />
            <Button
              label={'success'}
              success
              inverse
            />
            <Button
              label={'info'}
              info
              inverse
            />
            <Button
              label={'danger'}
              danger
              inverse
            />
          </Row>
        </div>
        <ThemeProvider theme={defaultTheme}>
          <div>
            <AlesaadiComponents/>
            <BehzadiComponents/>

            <br/>
            <br/>
            <SelectInput
              label={'primary '}
              primary
              options={options}
              defaultOption={'Nothing'}
              defaultValue={'0'}
            />
            <br/>
            <br/>
            <Row>
              <Button
                label={'default'}
                xSmall
              />
              <Button
                label={'primary'}
                primary
                small
              />

              <Button
                label={'secondary'}
                secondary
                large
              />
              <Button
                label={'warning'}
                warning
              />
              <Button
                label={'success'}
                success
              />
              <Button
                label={'info'}
                info
              />
              <Button
                label={'danger'}
                danger
              />
            </Row>
            <Row>
              <Button
                label={'default'}
                inverse
              />
              <Button
                label={'primary'}
                primary
                inverse
              />
              <Button
                label={'secondary'}
                secondary
                inverse
              />
              <Button
                label={'warning'}
                warning
                inverse
              />
              <Button
                label={'success'}
                success
                inverse
              />
              <Button
                label={'info'}
                info
                inverse
              />
              <Button
                label={'danger'}
                danger
                inverse
              />
            </Row>
          </div>
        </ThemeProvider>
        <ThemeProvider theme={defaultTheme}>
          <div>
            <MenuResponsive
              mainItems={mainItems}
              style={{marginBottom: '400px'}}

            />
            <br/>
            <br/>
            <List options={errorList}
                  title={'List of Errors'}
                  warning

            />
            <br/>
            <br/>
            <List options={errorList}
                  title={'List of Errors'}

            />
            <br/>
            <br/>
            <Spinner
              icon={'user'}
              primary
            />
            <br/>
            <br/>
            <div>
              <Cropper/>
            </div>
            <br/>
            <br/>
            <div>
              <h1>ورودی تاریخ </h1>
              <div
                style={{maxWidth: '300px'}}
              >
                <Container>
                  <Row>
                    <Col md12
                    >
                      <DatePicker
                        showTime={true}
                        inputValue={this.state.inputValue}
                        info={true}
                      />
                    </Col>
                    <Col md6>
                      {/*  <DatePickerFa
                    showTime={false}
                    inputValue={this.state.inputValue}
                  />*/}
                    </Col>
                  </Row>
                </Container>
              </div>

            </div>
            <br/>
            <br/>
            {/* <div>
          <Window/>
        </div>*/}
            <br/>
            <br/>

            <div>

            </div>
            <br/>
            <br/>
            <Collapsible
              trigger="Start here"
              transitionTime={400}
              success
            >
              <p>This is the collapsible content. It can be any element or React component you like.</p>
              <p>It can even be another Collapsible component. Check out the next section!</p>
            </Collapsible>
            <br/>
            <br/>
            <div>
              <ButtonToggle
                id='cheese-status'
                defaultChecked={this.state.cheeseIsReady}
                onChange={this.handleCheeseChange.bind(this)}

              />
              <label htmlFor='cheese-status'>Adjacent label tag</label>
            </div>
            <br/>
            <br/>
            <Container>
              <Row>
                <Col lg3>
                  <Slider interval={20000} items={items} dots/>
                </Col>
                <Col lg9>
                  <Slider autoPlay interval={20000} items={items}/>
                </Col>
              </Row>
            </Container>
            <Panel header="Header"
                   footer="Footer">
              <Button
                label={'test'}
                onClick={() => {
                  alert("hello")
                }}
              />
              <Button
                label={'test'}
                primary
                onClick={() => {
                  alert("hello")
                }}
              />
              <br/>
              <Image
                src={img}
              />
              <br/>

            </Panel>
            <br/>
            <Panel header="Header" footer="Footer" secondary>


              <Breadcrumb items={BreadcrumbList}
                          returnPath={(path) => console.log('path', path)}
              />
              App...
              <Input
                icon={'user'}
                primary
                errorText={'error'}
                placeholder={'success'}
                noMargin
                onChange={() => {
                }}
              />
              <br/>
              <Input
                icon={'user'}
                primary
                label={'dhfsdif'}
                errorText={'error'}
                placeholder={'success'}
                noMargin
                onChange={() => {
                }}
              />
              <br/>
              <TextAria
                icon={'user'}
                primary
                label={'dhfsdif'}
                errorText={'error'}
                placeholder={'success'}
                noMargin
                error
              />
              <br/>
              <Icon
                primary
                inverse
                iconClass={'user'}
              />
              <br/>
              <Icon
                success
                larg
                iconClass={'user'}
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
              <Button
                label={'test'}
                secondary
                onClick={() => {
                  alert("hello")
                }}
                disable
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


              </div>
            </Panel>


            <br/>
            <br/>
            <br/>
            <TableBasic>
              <Thead>
              <Tr
                primary
              >
                <Th
                  primary
                >
                  title
                </Th>
                <Th
                  primary
                >
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
            </TableBasic>
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
        </ThemeProvider>

      </div>

    );
  }
}

export default App;
