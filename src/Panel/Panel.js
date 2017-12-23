import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './style/WrapperStyled';
import Body from './style/BodyStyled';
import Footer from './style/FooterStyled';
import Heading from './style/HeadingStyled';


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
        <Body {...this.props}>
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

Panel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array]),
  header: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  footer: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default Panel;
