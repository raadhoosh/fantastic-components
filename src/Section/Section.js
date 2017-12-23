import React from 'react';
import PropTypes from 'prop-types';
import SectionStyled from './style/SectionStyled';

class Section extends React.Component {
  render() {
    const { children } = this.props;

    return (<SectionStyled {...this.props}>{children}</SectionStyled>);
  }
}

Section.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
  borderColor: PropTypes.string,
  bgColor: PropTypes.string,
  foreColor: PropTypes.string,
  theme: PropTypes.object,
  primary: PropTypes.bool
};

export default Section;
