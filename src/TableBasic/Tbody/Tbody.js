import React ,{Component} from 'react';
import TbodyStyled from './TbodyStyled';

class Tbody extends Component {
  render() {
    const {
      children
    } = this.props;

    return (
      <TbodyStyled
        {...this.props}
      >
        {
          children
        }
      </TbodyStyled>
    )
  }
}

export default Tbody;
