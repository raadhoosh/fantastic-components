import React from 'react';
import BreadcrumbStyled from './BreadcrumbStyled';
import OlStyled from './OlStyled';
import LiStyled from './LiStyled';

class Breadcrumb extends React.Component {
  render() {

    const {items} = this.props;
    const elements = [];
    for (let i = 0; i < items.length - 1; i++) {
      elements.push(items[i]);
    }
    const lastElement = items[items.length - 1];

    return (
      <BreadcrumbStyled {...this.props}>
        <OlStyled>
          {elements.map((item, index) => {
            return (
              <LiStyled
                key={index}
                onClick={() => {
                  this.props.returnPath(item.path);
                } }>
                {item.name}
              </LiStyled>
            );
          })}
          <LiStyled >{lastElement.name}</LiStyled>
        </OlStyled>
      </BreadcrumbStyled>
    );
  }
}

export default Breadcrumb;

