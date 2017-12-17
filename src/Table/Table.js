import React, {Component} from 'react';
import Button from '../Button/Button';
import Pagination from '../Pagination/Pagination';
import Modal from '../Modal/Modal';



import Th from './ThStyled';
import Tr from './TrStyled';
import Thead from './TheadStyled';
import Td from './TdStyled';
import WrapperStyled from './WrapperStyled';
import TableStyled from './TableStyled';

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
    }
    else {
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

      let headCols = [];
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
    const { getRow } = this.props;

    let rows = [];
    if (getRow) {
      let j;
      let si = this.props.pageSize * (this.state.current);
      let Ei = si + this.props.pageSize;
      if (Ei > this.props.rowsCount) {
        Ei = this.props.rowsCount;
      }
      let index3 = 0;
      for (j = si; j < Ei; j++, index3++) {
        let cells = [];
        cells = getRow(j);
        let rowCells = [];
        let i;
        let index1 = 1;
        let index = 0;
        for (i = 0; i < cells.length; i++, index1++) {
          rowCells.push(<Td key={index1} style={{textAlign: 'center'}} {...this.props}>{cells[i]}</Td>
          );
        }
        if (this.props.onDeleteClick || this.props.onEditClick || this.props.onAcceptClick || this.props.onShowClick) {
          let delBtn = null;
          let editBtn = null;
          let showBtn = null;
          let hasShow = true;
          if (this.props.rowHasShow)
            hasShow = this.props.rowHasShow(j);

          if (this.props.onShowClick && hasShow) {
            showBtn = (
              <Button value={j}
                      onClick={this.onEditShowClick}
                      label={this.props.labelButtonShow}
                      icon='eye'
                      xSmall
                      style={{padding: "8px", marginLeft: "5px"}}
                      {...this.props}
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
                secondary
                xSmall
                style={{padding: "8px", marginLeft: "5px"}}
                {...this.props}
              />
            );
          }
          let hasEdit = true;
          if (this.props.rowHasEdit)
            hasEdit = this.props.rowHasEdit(j);

          if (this.props.onEditClick && hasEdit) {
            editBtn = (
              <Button value={j}
                      onClick={this.onEditButtonClick}
                      label={this.props.labelButtonEdit}
                      icon='pencil'
                      primary
                      xSmall
                      style={{padding: "8px", marginLeft: "5px"}}
                      {...this.props}
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
          title="حذف"
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
          Btn2Type="secondary"
          Btn1Type="primary"
          Btn2Label={this.props.Btn2Label}
          Btn1Label={this.props.Btn1Label}
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
    const totalSize = this.props.rowsCount / this.props.pageSize;
    const start = (this.state.current) * this.props.pageSize;
    let end = start + this.props.pageSize - 1;
    if (end > this.props.rowsCount) {
      end = this.props.rowsCount;
    }

    return (
      <WrapperStyled {...this.props}>
        <TableStyled style={{tableLayout: "fixed"}} {...this.props}>
          {header}
          {rows}
        </TableStyled>
        {this.props.rowsCount > this.props.pageSize &&
        <Pagination total={totalSize}
                    current={this.state.current}
                    titles={{
                      first: 'first',
                      prev: '\u00AB',
                      prevSet: '...',
                      nextSet: '...',
                      next: '\u00BB',
                      last: 'last'
                    }}
                    visiblepages={1}
                    onPageChanged={this.handlePageChanged}
                    {...this.props}
        />
        }

        {dlg}
      </WrapperStyled>
    );
  }
}


export default Table;
