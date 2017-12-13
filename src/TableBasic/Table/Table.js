import React, {Component} from 'react';
import {Div, TableWrapper} from './style';

class Table extends Component {
  render() {
    const {
      children
    } = this.props;

    return (
      <Div>
        < TableWrapper
          {...this.props}
        >
          {
            children
          }
        </TableWrapper>

      </Div>
    )
  }
}

export default Table;
