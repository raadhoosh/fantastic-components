/**
 * Created by Programmer1 on 12/12/2017.
 */
/**
 * Created by Programmer1 on 12/12/2017.
 */
import React from 'react';
import { ULWrapper } from './style';

class UL extends React.Component {
  render() {
    const { children } = this.props;

    return (<ULWrapper {...this.props}>{children}</ULWrapper>);
  }
}

export default UL;
