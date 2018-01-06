import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PaneStyled from './style/PaneStyled';
import CropperFace from './style/CropperFace';
import GhostPaneStyled from './style/GhostPaneStyled';
import SpanStyled from './style/SpanStyled';
import ImgBoxStyled from './style/ImgBoxStyled';
import ImgStyled from './style/ImgStyled';
import image from '../../docs/commons/child.jpg';

// Thresholds
const FULLSCREEN_MARGINS = -10;
const MARGINS = 4;

class CropLayer extends Component {

  constructor(props) {
    super(props);

    this.setBounds = this.setBounds.bind(this);
    this.hintHide = this.hintHide.bind(this);
    this.onTouchDown = this.onTouchDown.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onDown = this.onDown.bind(this);
    this.canMove = this.canMove.bind(this);
    this.calc = this.calc.bind(this);
    this.onMove = this.onMove.bind(this);
    this.animate = this.animate.bind(this);
    this.onUp = this.onUp.bind(this);


    // Minimum resizable area
    this.minWidth = 60;
    this.minHeight = 40;


    // End of what's configurable.
    this.clicked = null;
    this.onRightEdge = null;
    this.onBottomEdge = null;
    this.onLeftEdge = null;
    this.onTopEdge = null;

    this.rightScreenEdge = null;
    this.bottomScreenEdge = null;

    this.preSnapped = null;

    this.b = 0;
    this.x = 0;
    this.y = 0;

    this.redraw = false;

    this.pane = document.getElementById('pane');
    this.ghostpane = document.getElementById('ghostpane');

    this.e = null;
  }

  componentDidMount() {
    // Mouse events
    if (this.pane) {
      this.pane.addEventListener('mousedown', this.onMouseDown);
    }
    document.addEventListener('mousemove', this.onMove);
    document.addEventListener('mouseup', this.onUp);

    // Touch events
    if (this.pane) {
      this.pane.addEventListener('touchstart', this.onTouchDown);
    }
    document.addEventListener('touchmove', this.onTouchMove);
    document.addEventListener('touchend', this.onTouchEnd);
    this.animate();
  }

  setBounds(element, x, y, w, h) {
    element.style.left = x + 'px';
    element.style.top = y + 'px';
    element.style.width = w + 'px';
    element.style.height = h + 'px';
  }

  hintHide() {
    this.setBounds(this.ghostpane, this.b.left, this.b.top, this.b.width, this.b.height);
    this.ghostpane.style.opacity = 0;

    /*const b = this.ghostpane.getBoundingClientRect();
    this.ghostpane.style.top = b.top + b.height / 2;
    this.ghostpane.style.left = b.left + b.width / 2;
    this.ghostpane.style.width = 0;
    this.ghostpane.style.height = 0;*/
  }

  onTouchDown(e) {
    this.onDown(e.touches[0]);
    e.preventDefault();
  }

  onTouchMove(e) {
    this.onMove(e.touches[0]);
  }

  onTouchEnd(e) {
    if (e.touches.length === 0)
      this.onUp(e.changedTouches[0]);
  }

  onMouseDown(e) {
    this.onDown(e);
    e.preventDefault();
  }

  onDown(e) {
    this.calc(e);

    const isResizing = this.onRightEdge || this.onBottomEdge || this.onTopEdge || this.onLeftEdge;
    const parent = e.target.parentElement.nodeName;

    this.clicked = {
      x: this.x,
      y: this.y,
      cx: e.clientX,
      cy: e.clientY,
      w: this.b.width,
      h: this.b.height,
      isResizing,
      isMoving: !isResizing && this.canMove(),
      onTopEdge: this.onTopEdge,
      onLeftEdge: this.onLeftEdge,
      onRightEdge: this.onRightEdge,
      onBottomEdge: this.onBottomEdge
    };
    console.log('e', parent);
  }

  canMove() {
    return this.x > 0 && this.x < this.b.width && this.y > 0 && this.y < this.b.height;
  }

  calc(e) {
    this.b = this.pane.getBoundingClientRect();
    this.x = e.clientX - this.b.left;
    this.y = e.clientY - this.b.top;

    this.onTopEdge = this.y < MARGINS;
    this.onLeftEdge = this.x < MARGINS;
    this.onRightEdge = this.x >= this.b.width - MARGINS;
    this.onBottomEdge = this.y >= this.b.height - MARGINS;

    this.rightScreenEdge = window.innerWidth - MARGINS;
    this.bottomScreenEdge = window.innerHeight - MARGINS;
  }

  onMove(ee) {
    this.calc(ee);
    this.e = ee;
    this.redraw = true;
  }

  animate() {
    requestAnimationFrame(this.animate);

    if (!this.redraw) return;

    this.redraw = false;

    if (this.clicked && this.clicked.isResizing) {

      if (this.clicked.onRightEdge) this.pane.style.width = Math.max(this.x, this.minWidth) + 'px';
      if (this.clicked.onBottomEdge) this.pane.style.height = Math.max(this.y, this.minHeight) + 'px';

      if (this.clicked.onLeftEdge) {
        const currentWidth = Math.max(this.clicked.cx - this.e.clientX + this.clicked.w, this.minWidth);
        if (currentWidth > this.minWidth) {
          this.pane.style.width = currentWidth + 'px';
          this.pane.style.left = this.e.clientX + 'px';
        }
      }

      if (this.clicked.onTopEdge) {
        const currentHeight =
          Math.max((this.clicked.cy - this.e.clientY) + this.clicked.h, this.minHeight);
        if (currentHeight > this.minHeight) {
          this.pane.style.height = `${currentHeight}px`;
          this.pane.style.top = `${this.e.clientY}px`;
        }
      }

      this.hintHide();

      return;
    }

    if (this.clicked && this.clicked.isMoving) {

      if (this.b.top < FULLSCREEN_MARGINS || this.b.left < FULLSCREEN_MARGINS || this.b.right > window.innerWidth - FULLSCREEN_MARGINS || this.b.bottom > window.innerHeight - FULLSCREEN_MARGINS) {
        // hintFull();
        this.setBounds(this.ghostpane, 0, 0, window.innerWidth, window.innerHeight);
        this.ghostpane.style.opacity = 0.2;
      } else if (this.b.top < MARGINS) {
        // hintTop();
        this.setBounds(this.ghostpane, 0, 0, window.innerWidth, window.innerHeight / 2);
        this.ghostpane.style.opacity = 0.2;
      } else if (this.b.left < MARGINS) {
        // hintLeft();
        this.setBounds(this.ghostpane, 0, 0, window.innerWidth / 2, window.innerHeight);
        this.ghostpane.style.opacity = 0.2;
      } else if (this.b.right > this.rightScreenEdge) {
        // hintRight();
        this.setBounds(this.ghostpane, window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
        this.ghostpane.style.opacity = 0.2;
      } else if (this.b.bottom > this.bottomScreenEdge) {
        // hintBottom();
        this.setBounds(this.ghostpane, 0, window.innerHeight / 2, window.innerWidth, window.innerWidth / 2);
        this.ghostpane.style.opacity = 0.2;
      } else {
        this.hintHide();
      }

      if (this.preSnapped) {
        this.setBounds(this.pane,
          this.e.clientX - this.preSnapped.width / 2,
          this.e.clientY - Math.min(this.clicked.y, this.preSnapped.height),
          this.preSnapped.width,
          this.preSnapped.height
        );
        return;
      }

      // moving
      this.pane.style.top = (this.e.clientY - this.clicked.y) + 'px';
      this.pane.style.left = (this.e.clientX - this.clicked.x) + 'px';
      this.imgRef.style.left = -(this.e.clientX - this.clicked.x - 500) + 'px';
      this.imgRef.style.top = -(this.e.clientY - this.clicked.y) + 'px';
      /*console.log('this.CropperCanvas.style.left', this.CropperCanvas.style.left)*/
      return;
    }

    // This code executes when mouse moves without clicking

    // style cursor
    if ((this.onRightEdge && this.onBottomEdge) || (this.onLeftEdge && this.onTopEdge)) {
      this.pane.style.cursor = 'nwse-resize';
    } else if ((this.onRightEdge && this.onTopEdge) || (this.onBottomEdge && this.onLeftEdge)) {
      this.pane.style.cursor = 'nesw-resize';
    } else if (this.onRightEdge || this.onLeftEdge) {
      this.pane.style.cursor = 'ew-resize';
    } else if (this.onBottomEdge || this.onTopEdge) {
      this.pane.style.cursor = 'ns-resize';
    } else if (this.canMove()) {
      this.pane.style.cursor = 'move';
    } else {
      this.pane.style.cursor = 'default';
    }
  }


  onUp(e) {
    this.calc(e);

    if (this.clicked && this.clicked.isMoving) {
      // Snap
      const snapped = {
        width: this.b.width,
        height: this.b.height
      };

      if (this.b.top < FULLSCREEN_MARGINS || this.b.left < FULLSCREEN_MARGINS || this.b.right > window.innerWidth - FULLSCREEN_MARGINS || this.b.bottom > window.innerHeight - FULLSCREEN_MARGINS) {
        // hintFull();
        this.setBounds(this.pane, 0, 0, window.innerWidth, window.innerHeight);
        this.preSnapped = snapped;
      } else if (this.b.top < MARGINS) {
        // hintTop();
        this.setBounds(this.pane, 0, 0, window.innerWidth, window.innerHeight / 2);
        this.preSnapped = snapped;
      } else if (this.b.left < MARGINS) {
        // hintLeft();
        this.setBounds(this.pane, 0, 0, window.innerWidth / 2, window.innerHeight);
        this.preSnapped = snapped;
      } else if (this.b.right > this.rightScreenEdge) {
        // hintRight();
        this.setBounds(this.pane, window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
        this.preSnapped = snapped;
      } else if (this.b.bottom > this.bottomScreenEdge) {
        // hintBottom();
        this.setBounds(this.pane, 0, window.innerHeight / 2, window.innerWidth, window.innerWidth / 2);
        this.preSnapped = snapped;
      } else {
        this.preSnapped = null;
      }

      this.hintHide();

    }

    this.clicked = null;

  }

  render() {
    return (
      <div>
        <PaneStyled
          innerRef={(pa) => {
            this.pane = pa;
          }}
        >
          <ImgBoxStyled>
            <ImgStyled
              src={image}
              innerRef={(im) => {
                this.imgRef = im
              }}
            />
          </ImgBoxStyled>
          <SpanStyled
            style={{top: '-3px', left: '50%', marginLeft: '-3px'}}
          />
          <SpanStyled
            style={{top: '-3px', right: '-3px'}}
          />
          <SpanStyled
            style={{top: '-3px', left: '-3px'}}
          />
          <SpanStyled
            style={{top: '50%', left: '-3px', marginTop: '-3px'}}
          />
          <SpanStyled
            style={{top: '50%', right: '-3px', marginTop: '-3px'}}
          />
          <SpanStyled
            style={{bottom: '-3px', left: '-3px'}}
          />
          <SpanStyled
            style={{bottom: '-3px', left: '50%', marginLeft: '-3px'}}
          />
          <SpanStyled
            style={{bottom: '-3px', right: '-3px'}}
          />
          <CropperFace
            innerRef={(ti) => {
              this.title = ti;
            }}
          >
          </CropperFace>
        </PaneStyled>
        <GhostPaneStyled
          innerRef={(gh) => {
            this.ghostpane = gh;
          }}
        />
      </div>
    );
  }
}

CropLayer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.string,
  style: PropTypes.object
};

export default CropLayer;
