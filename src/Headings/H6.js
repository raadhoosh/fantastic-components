import React, {Component} from 'react';
import H6Styled from './H6Styled'

class H6 extends Component {


  render() {
const{children}=this.props;

    return (
      <H6Styled
        {...this.props}
      >{children}</H6Styled>
    );
  }
}

export default H6;
