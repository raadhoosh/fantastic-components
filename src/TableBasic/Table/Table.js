import React, {Component} from 'react';
import TableWrapperStyled from './style/TableWrapperStyled';
import TableStyled from './style/TableStyled';

class Table extends Component{

render()
{
  const {
    children
  } = this.props;

  return (
    <TableWrapperStyled>
      <TableStyled
        {...this.props}
      >
        {
          children
        }
      </TableStyled>

    </TableWrapperStyled>
  )
}
}

export default Table;
