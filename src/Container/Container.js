import React, {Component} from 'react';
import ContainerStyled from './style/ContainerStyled';

class Container extends Component {

  render() {
    const {className, children, style} = this.props;

    return (
      <ContainerStyled
        className={className}
        style={style}
        {...this.props}
      >
        {children}
      </ContainerStyled>
    );
  }
}

export default Container;
