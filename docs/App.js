import React, {Component} from 'react';
import Input from '../src/Input/Input';
import Icon from '../src/Icon/Icon';


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
      </div>

    );
  }
}

export default App;
