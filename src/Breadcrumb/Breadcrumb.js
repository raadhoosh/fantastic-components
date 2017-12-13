import React from 'react';

import { BreadcrumbWrapper, Li, Ol } from './style';

class Breadcrumb extends React.Component {
  render() {


    const { items } = this.props;
    const elements = [];
    for (let i = 0; i < items.length - 1; i++) {
      elements.push(items[i]);
    }
    const lastElement = items[items.length - 1];

    return (
      <BreadcrumbWrapper {...this.props}>
        <Ol>
          {elements.map((item, index) => {
            return (
              <Li
                key={index}
                onClick={() => { this.props.returnPath(item.path); } } >
                  {item.name}
              </Li>
            );
          })}
          <Li >{lastElement.name}</Li>
        </Ol>
      </BreadcrumbWrapper>
    );
  }
}

export default Breadcrumb;

