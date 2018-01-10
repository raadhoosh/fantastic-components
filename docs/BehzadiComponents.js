import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '../src/Table/Table';
import Search from '../src/Search/Search';
import Pagination from '../src/Pagination/Pagination';
import {Button} from '../src/';

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
      },
      {
        id: 5,
        title: 'title5'
      },
      {
        id: 6,
        title: 'title6'
      },
      {
        id: 7,
        title: 'title7'
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
          pageSize={2}
          hover
          striped
        />

        <Search
          suggestionList={[
            { id: 0, value: 'Javascript' },
            { id: 1, value: 'Python' },
            { id: 2, value: 'C#' },
            { id: 3, value: 'Visual Basic' },
            { id: 4, value: 'Android' },
            { id: 5, value: 'Swift' },
            { id: 6, value: 'SQL' }
           ]}
          primary
        />
        <Pagination
          total={10}
          current={2}
          visiblePages={3}
          secondary
        />

        <Table
          rowsCount={tableElements.length}
          columns={[
            "id",
            "title"
          ]}
          columnSize={[
            '30%',
            '30%',
          ]}
          getRow={(rowId) => {
            let id = tableElements[rowId].id;
            let title = tableElements[rowId].title;
            return [
              id,
              title,
            ];
          }}
          onEditClick={(rowId) => {
            console.log('rowId:', rowId);
          }}
          onDeleteClick={(rowId) => {
            console.log('rowId:', rowId);
          }}
          actionColumnLabel="action"
          deleteMessage="Are you sure>"
          pageSize={3}
          hover
          striped
        />
        <Button
          label="Disabled"
          icon="user"
          info
          disable
        />
      </div>
    );
  }
}

BehzadiComponents.propTypes = {

};

export default BehzadiComponents;

