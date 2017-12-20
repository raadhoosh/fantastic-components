/**
 * Created by Programmer1 on 12/18/2017.
 */
/**
 * Created by Programmer1 on 12/18/2017.
 */

import React from 'react';

import SliderContentStyled from './style/SliderContentStyled';


class SliderContent extends React.Component {
  render() {
    const {items} = this.props;

    return (<SliderContentStyled {...this.props}>
      {
        items.map((item, index) => {
          return (
            <div style={{ width: this.props.w, display: 'inline-block' }} key={ index }>

              {item.content}

            </div>
          );
        })
      }

    </SliderContentStyled>);
  }
}

export default SliderContent;
