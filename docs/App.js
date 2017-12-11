import React, {Component} from 'react';
import Input from '../src/Input/Input';
import Icon from '../src/Icon/Icon';
import Button from '../src/Button/Button';
import Image from '../src/Image/Img';
import Container from '../src/Container/Container';

import img from './commons/img.jpg';


class App extends Component {
  render() {
    return (
      <div>
        App...
        <Input color={'red'} backgroundColor={'gray'}/>
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
        </Container>

      </div>

    );
  }
}

export default App;
