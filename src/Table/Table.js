import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Pagination from '../Pagination/Pagination';
import Modal from '../Modal/Modal';


import Th from './style/ThStyled';
import Tr from './style/TrStyled';
import Thead from './style/TheadStyled';
import Td from './style/TdStyled';
import WrapperStyled from './style/WrapperStyled';
import TableStyled from './style/TableStyled';

class Table extends Component {
  constructor(props, context) {
    super(props, context);
    this.rowCount = 0;
    this.rowIdForDelete = -1;
    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
    this.onEditButtonClick = this.onEditButtonClick.bind(this);
    this.onAcceptButtonClick = this.onAcceptButtonClick.bind(this);
    this.handlePageChanged = this.handlePageChanged.bind(this);
    this.onEditShowClick = this.onEditShowClick.bind(this);
    this.state = {
      dialogIsOpen: false,
      current: 0
    };
  }

  componentWillReceiveProps(nextPros) {
    const {
      rowsCount, pageSize, pageIndex
    } = this.props;
    if (((rowsCount - 1) / pageSize) > (pageIndex - 1)) {
      this.setState({
        current: nextPros.pageIndex
      })
    }
  }

  handlePageChanged(newPage) {
    this.setState({current: newPage});
    if (this.props.onPageChanged) {
      this.props.onPageChanged(newPage);
    }
  }

  onDeleteButtonClick(e) {
    if (this.props.deleteMessage) {
      this.setState({
        dialogIsOpen: true
      });
      this.rowIdForDelete = e.target.value;
    } else {
      this.props.onDeleteClick(e.target.value);
    }
  }

  onEditButtonClick(e) {
    this.props.onEditClick(e.target.value);
  }

  onEditShowClick(e) {
    this.props.onShowClick(e.target.value);
  }

  onAcceptButtonClick(rowId) {
    this.props.onAcceptClick(rowId);
  }


  makeHeader() {
    if (this.props.columns) {
      const headCols = [];
      let i;
      let index = 1;
      const index1 = 0;

      for (i = 0; i < this.props.columns.length; i++, index++) {

        headCols.push(
          <Th
            key={index}
            {...this.props}
          >
            {this.props.columns[i]}
          </Th>
        );
      }


      if (this.props.onDeleteClick || this.props.onEditClick || this.props.onShowClick) {
        headCols.push(
          <Th
            key={index1}
            style={{width: '140px', textAlign: 'center'}}
            {...this.props}
          >
            {this.props.actionColumnLabel}
          </Th>
        );
      }

      return (
        <Thead {...this.props}>
        <Tr {...this.props}>
          {headCols}
        </Tr>
        </Thead>
      );
    }
  }

  makeRows() {
    const {getRow} = this.props;

    const rows = [];
    if (getRow) {
      let j;
      const si = this.props.pageSize * (this.state.current);
      let Ei = si + this.props.pageSize;
      if (Ei > this.props.rowsCount) {
        Ei = this.props.rowsCount;
      }
      let index3 = 0;
      for (j = si; j < Ei; j += 1, index3 += 1) {
        let cells = [];
        cells = getRow(j);
        const rowCells = [];
        let i;
        let index1 = 1;
        const index = 0;
        for (i = 0; i < cells.length; i += 1, index1 += 1) {
          rowCells.push(<Td key={index1} style={{textAlign: 'center'}} {...this.props}>{cells[i]}</Td>);
        }
        if (this.props.onDeleteClick || this.props.onEditClick ||
          this.props.onAcceptClick || this.props.onShowClick) {
          let delBtn = null;
          let editBtn = null;
          let showBtn = null;
          let hasShow = true;
          if (this.props.rowHasShow) {
            hasShow = this.props.rowHasShow(j);
          }

          if (this.props.onShowClick && hasShow) {
            showBtn = (
              <Button
                value={j}
                onClick={this.onEditShowClick}
                label={this.props.labelButtonShow}
                icon="eye"
                style={{padding: '0', marginLeft: '5px'}}
                {...this.props}
                xSmall
              />
            );
          }

          // let AcceptBtn = null;
          let hasDelete = true;
          if (this.props.rowHasDelete)
            hasDelete = this.props.rowHasDelete(j);
          if (this.props.onDeleteClick && hasDelete) {
            delBtn = (
              <Button
                value={j}
                onClick={this.onDeleteButtonClick}
                icon="trash"
                style={{padding: "0", marginLeft: "5px"}}
                {...this.props}
                xSmall
                danger
              />
            );
          }
          let hasEdit = true;
          if (this.props.rowHasEdit)
            hasEdit = this.props.rowHasEdit(j);

          if (this.props.onEditClick && hasEdit) {
            editBtn = (
              <Button
                value={j}
                onClick={this.onEditButtonClick}
                label={this.props.labelButtonEdit}
                icon='pencil'
                style={{padding: "0", marginLeft: "5px"}}
                {...this.props}
                xSmall
              />
            );
          }
          rowCells.push(
            <Td key={index} {...this.props}>
              {editBtn}
              {delBtn}
              {showBtn}
            </Td>
          );
        }


        rows.push(
          <Tr key={index3}>
            {rowCells}
          </Tr>
        );
      }

      this.rowCount = j;
      return (
        <tbody>
        {rows}
        </tbody>
      );
    }
  }

  showDialog() {
    if (this.state.dialogIsOpen) {
      return (
        <Modal
          allowClose={true}
          open={this.state.dialogIsOpen}
          title="Delete"
          onClose={() => this.setState({
            dialogIsOpen: false
          })}

          Btn1action={() => {
            if (this.rowIdForDelete > -1) {
              let lastpage = (parseInt(this.props.rowsCount / this.props.pageSize, 10));
              let hasOneRemaining = this.props.rowsCount % this.props.pageSize === 1;
              if ((this.state.current === lastpage) && hasOneRemaining) {
                this.setState({
                  current: this.state.current - 1
                });
              }
              this.props.onDeleteClick(this.rowIdForDelete);
              this.rowIdForDelete = -1;
              this.setState({
                dialogIsOpen: false
              });
            }
          }}
          Btn1Type="danger"
          Btn2Label="Cancel"
          Btn1Label="Delete"
          maxWidth={480}
          Btn2action={() => this.setState({
            dialogIsOpen: false
          })}
          {...this.props}


        >{this.props.deleteMessage}</Modal>
      );
    }
  }

  render() {
    const header = this.makeHeader();
    const rows = this.makeRows();
    const dlg = this.showDialog();
    const totalSize = Math.ceil(this.props.rowsCount / this.props.pageSize);
    const start = (this.state.current) * this.props.pageSize;
    let end = start + this.props.pageSize - 1;
    if (end > this.props.rowsCount) {
      end = this.props.rowsCount;
    }

    return (
      <WrapperStyled {...this.props}>
        <TableStyled style={{tableLayout: 'fixed'}} {...this.props}>
          {header}
          {rows}
        </TableStyled>
        {this.props.rowsCount > this.props.pageSize &&
        <Pagination
          total={totalSize}
          current={this.state.current}
          onPageChanged={this.handlePageChanged}
          {...this.props}
        />
        }

        {dlg}
      </WrapperStyled>
    );
  }
}

Table.propTypes = {
  rowsCount: PropTypes.number.isRequired,
  getRow: PropTypes.func.isRequired,
  rowHasDelete: PropTypes.func,
  rowHasEdit: PropTypes.func,
  rowHasShow: PropTypes.func,
  rowHasAccept: PropTypes.func,
  columns: PropTypes.array,
  columnSize: PropTypes.array,
  minWidth: PropTypes.number,
  pageSize: PropTypes.number,
  onDeleteClick: PropTypes.func,
  deleteMessage: PropTypes.string,
  onRowClick: PropTypes.func,
  onEditClick: PropTypes.func,
  onShowClick: PropTypes.func,
  onAcceptClick: PropTypes.func,
  actionColumnLabel: PropTypes.string,
  hover: PropTypes.bool,
  striped: PropTypes.bool,
  labelButtonEdit: PropTypes.string,
  iconButtonEdit: PropTypes.string,
  rowColors: PropTypes.array,
  iconButtonSecondary: PropTypes.string,
  labelButtonShow: PropTypes.string,
  pageIndex: PropTypes.number,
  onPageChanged: PropTypes.func,
  actionNames: PropTypes.array,
  actionValues: PropTypes.array,
  actionIcons: PropTypes.array,
  onActionClick: PropTypes.func,
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
  theme: PropTypes.object,
};

export default Table;
