import React from 'react';
import { SectionWrapper } from './style';

class Section extends React.Component {
  render() {
    const { children } = this.props;

    return (<SectionWrapper {...this.props}>{children}</SectionWrapper>);
  }
}

export default Section;
