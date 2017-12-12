/**
 * Created by Programmer1 on 12/12/2017.
 */
import React from 'react';
import { DivWrapper } from './style';

class Div extends React.Component {
  render() {
    const { children } = this.props;

    return (<DivWrapper {...this.props}>{children}</DivWrapper>);
  }
}

export default Div;
