import React, {Component} from 'react';
import H4Styled from './H4Styled'

class H4 extends Component {


  render() {
const{children}=this.props;

    return (
      <H4Styled
        {...this.props}
      >{children}</H4Styled>
    );
  }
}

export default H4;
