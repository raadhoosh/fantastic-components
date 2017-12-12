import React, {Component} from 'react';
import ContainerWrapper from './Style';

class Container extends Component {

  render() {
    const {className, children, style} = this.props;

    return (
      <ContainerWrapper
        className={className}
        style={style}
        {...this.props}
      >
        {children}
      </ContainerWrapper>
    );
  }
}

export default Container;
