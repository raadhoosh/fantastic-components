/**
 * Created by Programmer1 on 12/12/2017.
 */
/**
 * Created by Programmer1 on 12/12/2017.
 */
import React ,{Component} from 'react';
import LiStyled from './style/LIStyled';

class LI extends Component {
  render() {
    const { children } = this.props;

    return (<LiStyled {...this.props}>{children}</LiStyled>);
  }
}

export default LI;
