import React from 'react';


import Wrapper from './WrapperStyled';
import Body from './BodyStyled';
import Footer from './FooterStyled';
import Heading from './HeadingStyled';


class Panel extends React.Component {
  render() {
    const {
      children,
      footer,
      header
    } = this.props;
    return (
      <Wrapper {...this.props}>
        {
          header &&
          <Heading {...this.props}>
           {header}
          </Heading>
        }
        <Body>
          {children}
        </Body>
        {
          footer &&
          <Footer {...this.props}>
            {footer}
          </Footer>
        }
      </Wrapper>
    );
  }
}

export default Panel;
