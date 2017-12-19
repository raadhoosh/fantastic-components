/**
 * Created by Programmer1 on 12/12/2017.
 */
import React from 'react';
import DivStyled from './style/DivStyled';

class Div extends React.Component {
  render() {
    const { children } = this.props;

    return (<DivStyled {...this.props}>{children}</DivStyled>);
  }
}

export default Div;
