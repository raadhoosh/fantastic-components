import React, {Component} from 'react';
import H3Styled from './H3Styled'

class H3 extends Component {


  render() {
const{children}=this.props;

    return (
      <H3Styled
        {...this.props}
      >{children}</H3Styled>
    );
  }
}

export default H3;
