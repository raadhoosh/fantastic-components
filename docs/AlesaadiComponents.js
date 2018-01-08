import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../src/Table/Table';
import H1 from '../src/Headings/H1';
import Search from '../src/Search/Search';
import CheckBox from '../src/CheckBox/CheckBox';
import Tab from '../src/Tab/Tab';


class AlesaadiComponents extends Component {
  constructor(props) {
    super(props);
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
    let items = [
      {
        value: 'Java',
        id: '1'
      },
      {
        value: 'Javascript',
        id: '2'
      },
      {
        value: 'C#',
        id: '3'
      },
      {
        value: 'PHP',
        id: '4'
      },
      {
        value: 'Pascal',
        id: '5'
      },
      {
        value: 'Roby',
        id: '6'
      },
    ];
    const tabs = [
      {title: 'Tab 1', content: (<div> Contetnt 1</div>)},
      {
        title: 'Tab 2', content: (<div> Content 2</div>)
      },
      {
        title: 'Tab 3', content: (<div> Content 3</div>)
      }
    ];
    return (
      <div>
        <CheckBox/>
        <Tab
          tabs={tabs}
          currentTab={0}
          success
        />
        <br/>
        <br/>
        <Tab
          tabs={tabs}
          currentTab={0}
          warning
        />
        <H1
          primary
        >
          title
        </H1>
        <Search label={'Default Search list'}
                suggestionList={items}

        />
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
          deleteMessage="Are you sure>"
          pageSize={5}
          hover
          info
        />


      </div>
    );
  }

}

AlesaadiComponents.propTypes = {};

export default AlesaadiComponents;

