import React from 'react';
import SectionStyled from './SectionStyled';

class Section extends React.Component {
  render() {
    const { children } = this.props;

    return (<SectionStyled {...this.props}>{children}</SectionStyled>);
  }
}

export default Section;
