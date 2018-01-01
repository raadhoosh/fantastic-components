/**
 * Created by Programmer1 on 12/31/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Ul from '../Ul';
import ItemStyled from './style/ItemStyled';
import HolderStyled from './style/HolderStyled';
import TitleStyled from './style/TitleStyled';

class List extends React.Component {
  render() {
    const {options,title,rtl} = this.props;
    return (
      <HolderStyled {...this.props}>
        <TitleStyled {...this.props}> { title} </TitleStyled>
        {
          options.length > 0 &&
          <Ul {...this.props}>
            {
              options.map((error, index) => {
                return (
                  <ItemStyled key={index} {...this.props}>
                    {error}
                  </ItemStyled>
                )
              })
            }
          </Ul>
       }
      </HolderStyled>
    );
  }
}
List.propTypes = {
  options: PropTypes.array,
  title:PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  inverse: PropTypes.bool,
  rtl: PropTypes.bool,
  borderColor: PropTypes.string,
  bgColor: PropTypes.string,
  foreColor: PropTypes.string,
  theme: PropTypes.object
};
export default List;
