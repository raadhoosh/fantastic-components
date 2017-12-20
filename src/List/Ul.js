/**
 * Created by Programmer1 on 12/12/2017.
 */
/**
 * Created by Programmer1 on 12/12/2017.
 */
import React from 'react';
import UlStyled from './style/Ulstyled';

class UL extends React.Component {
  render() {
    const { children } = this.props;

    return (<UlStyled {...this.props}>{children}</UlStyled>);
  }
}

export default UL;
