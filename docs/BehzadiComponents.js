import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '../src/Table/Table';


class BehzadiComponents extends Component {
  constructor(props) {
    super( props );
  }

  render() {
    const tableElements = [
      {
        id: 1,
        title: 'title1'
      },
      {
        id: 2,
        title: 'title2'
      },
      {
        id: 3,
        title: 'title3'
      },
      {
        id: 4,
        title: 'title4'
      }
    ];

    return (
      <div>
        <Table
          rowsCount={tableElements.length}
          columns={[
            'id',
            'title'
          ]}
          columnSize={[
            '30%',
            '30%'
          ]}
          getRow={rowId => [
              tableElements[rowId].id,
              tableElements[rowId].title
          ]}
          onEditClick={(rowId) => {
            window.alert(`rowId: ${rowId}`);
          }}
          onDeleteClick={(rowId) => {
            window.alert(`rowId: ${rowId}`);
          }}
          actionColumnLabel="action"
          deleteMessage="Are you sure?"
          pageSize={5}
          hover
          striped
        />
      </div>
    );
  }

}

BehzadiComponents.propTypes = {

};

export default BehzadiComponents;

