/**
 * Created by Programmer1 on 12/12/2017.
 */
/**
 * Created by Programmer1 on 12/12/2017.
 */
import React from 'react';
import { LIWrapper } from './style';

class LI extends React.Component {
  render() {
    const { children } = this.props;

    return (<LIWrapper {...this.props}>{children}</LIWrapper>);
  }
}

export default LI;
