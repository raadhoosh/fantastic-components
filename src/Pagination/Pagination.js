import React from 'react';
import PropTypes from 'prop-types';
import Ul from './style/UlStyled';
import PaginationStyled from './style/PaginationStyled';

/**
 * ## Constants
 */
const BASE_SHIFT = 0;
const TITLE_SHIFT = 1;



class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.handleFirstPage = this.handleFirstPage.bind(this);
    this.handlePreviousPage = this.handlePreviousPage.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.handleLastPage = this.handleLastPage.bind(this);
    this.handleMorePrevPages = this.handleMorePrevPages.bind(this);
    this.handleMoreNextPages = this.handleMoreNextPages.bind(this);
    this.handlePageChanged = this.handlePageChanged.bind(this);
  }


  getTitles(key) {
    if (this.props.titles) {
      return this.props.titles[key];
    }
    return TITLES[key];
  }

  /**
   * Calculates "blocks" of buttons with page numbers.
   */
  calcBlocks() {
    const { total, visiblePages, current } = this.props;
    const blockSize = visiblePages;
    const blocks = Math.ceil(total / blockSize);
    const currBlock = Math.ceil((current + TITLE_SHIFT) / blockSize) - TITLE_SHIFT;

    return {
      total: blocks,
      current: currBlock,
      size: blockSize
    };
  }

  isPrevDisabled() {
    return this.props.current <= BASE_SHIFT;
  }

  isNextDisabled() {
    return this.props.current >= (this.props.total - TITLE_SHIFT);
  }

  isPrevMoreHidden() {
    const blocks = this.calcBlocks();
    return (blocks.total === TITLE_SHIFT) || (blocks.current === BASE_SHIFT);
  }

  isNextMoreHidden() {
    const blocks = this.calcBlocks();
    return (blocks.total === TITLE_SHIFT) || (blocks.current === (blocks.total - TITLE_SHIFT));
  }

  visibleRange() {
    const blocks = this.calcBlocks();
    const start = blocks.current * blocks.size;
    const delta = this.props.total - start;
    const end = start + ((delta > blocks.size) ? blocks.size : delta);

    return [start + TITLE_SHIFT, end + TITLE_SHIFT];
  }

  handleFirstPage() {
    if (!this.isPrevDisabled()) {
      this.handlePageChanged(BASE_SHIFT);
    }
  }

  handlePreviousPage() {
    if (!this.isPrevDisabled()) {
      this.handlePageChanged(this.props.current - TITLE_SHIFT);
    }
  }

  handleNextPage() {
    if (!this.isNextDisabled()) {
      this.handlePageChanged(this.props.current + TITLE_SHIFT);
    }
  }

  handleLastPage() {
    if (!this.isNextDisabled()) {
      this.handlePageChanged(this.props.total - TITLE_SHIFT);
    }
  }


  handleMorePrevPages() {
    const blocks = this.calcBlocks();
    this.handlePageChanged((blocks.current * blocks.size) - TITLE_SHIFT);
  }

  handleMoreNextPages() {
    const blocks = this.calcBlocks();
    this.handlePageChanged((blocks.current + TITLE_SHIFT) * blocks.size);
  }

  handlePageChanged(num) {
    const { onPageChanged } = this.props;
    if (onPageChanged) onPageChanged(num);
  }

  renderPages(pair) {
    return range(pair[0], pair[1]).map((num, idx) => {
      const current = num - TITLE_SHIFT;
      const isActive = (this.props.current === current);

      return (
        <Page
          key={idx}
          index={idx}
          isActive={isActive}
          onClick={() => this.handlePageChanged(current)}
        >
          {num}
        </Page>
      );
    });
  }


  render() {
    const titles = this.getTitles.bind(this);

    return (
      <PaginationStyled {...this.props}>
        <Ul {...this.props}>
          <Page
            key="btn-first-page"
            isDisabled={this.isPrevDisabled()}
            onClick={this.handleFirstPage}
          >
            {titles('first')}
          </Page>

          <Page
            key="btn-prev-page"
            isDisabled={this.isPrevDisabled()}
            onClick={this.handlePreviousPage}
          >
            {titles('prev')}
          </Page>

          <Page
            key="btn-prev-more"
            isHidden={this.isPrevMoreHidden()}
            onClick={this.handleMorePrevPages}
          >
            {titles('prevSet')}
          </Page>

          {this.renderPages(this.visibleRange())}

          <Page
            key="btn-next-more"
            isHidden={this.isNextMoreHidden()}
            onClick={this.handleMoreNextPages}
          >
            {titles('nextSet')}
          </Page>

          <Page
            key="btn-next-page"
            isDisabled={this.isNextDisabled()}
            onClick={this.handleNextPage}
          >
            {titles('next')}
          </Page>

          <Page
            key="btn-last-page"
            isDisabled={this.isNextDisabled()}
            onClick={this.handleLastPage}
          >
            {titles('last')}
          </Page>
        </Ul>
      </PaginationStyled>
    );
  }
}


const Page = (props) => {
  if (props.isHidden) return null;
  const fullCss = ` ${props.isActive ? ' active' : ''}`;

  return (
    <li
      key={props.index}
      onClick={props.onClick}
      className={fullCss}
    >
      {props.children}
    </li>
  );
};

Page.propTypes = {
  isHidden: PropTypes.bool,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.object,PropTypes.number, PropTypes.string]),

};


function range(start, end) {
  const res = [];
  for (let i = start; i < end; i++) {
    res.push(i);
  }

  return res;
}

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  visiblePages: PropTypes.number,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  onPageChanged: PropTypes.func,
  titles: PropTypes.object
};

Pagination.defaultProps = {
  visiblePages: 3,
  isDisabled: false,
  className: null,
  onClick: null,
  onPageChanged: null,
  titles: {
    first: 'First',
    prev: '\u00AB',
    prevSet: '...',
    nextSet: '...',
    next: '\u00BB',
    last: 'Last'
  }
};

export default Pagination;

