import React from 'react';
import BreadcrumbStyled from './style/BreadcrumbStyled';
import OlStyled from './style/OlStyled';
import LiStyled from './style/LiStyled';
import {Link} from 'react-router-dom';

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
        <OlStyled {...this.props}>
          {elements.map((item, index) => {
            return (
              <LiStyled
                key={index}
                {...this.props}
              >
                <Link
                  to={item.path}
                >
                  {item.name}
                </Link>
              </LiStyled>
            );
          })}
          <LiStyled {...this.props}>{lastElement.name}</LiStyled>
        </OlStyled>
      </BreadcrumbStyled>
    );
  }
}

export default Breadcrumb;

