import React, {Component} from 'react';
import H5Styled from './H5Styled'

class H5 extends Component {


  render() {
const{children}=this.props;

    return (
      <H5Styled
        {...this.props}
      >{children}</H5Styled>
    );
  }
}

export default H5;
