import React, {Component} from 'react';
import SliderStyled from './style/SliderStyled';
import SliderContent from './SliderContent';
import DotStyled from './style/DotStyled';
import PrevButton from './style/PrevButtonStyled';
import NextButton from './style/NextButtonStyled';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { width: '0', selectedIndex: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.goNext = this.goNext.bind(this);
    this.AutoPlayBusy = false;
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    this.autoPlay();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: this.myInput.offsetWidth });
  }

  goNext() {
      let newSlide = parseInt(this.state.selectedIndex, 10);
      if (newSlide < this.props.items.length - 1)
        newSlide++;
      else
        newSlide = 0;
      this.setState({
        selectedIndex: newSlide
      });
  }

  autoPlay() {
    if(this.props.autoPlay ) {
      if(this.AutoPlayBusy)
        return;
      this.AutoPlayBusy = true;
      setInterval(() => {
        this.goNext();
        this.autoPlay();
      }, this.props.interval > 0 ? this.props.interval : 10000);
    }
  }

  render(){
    const {items, dots,autoPlay} = this.props;

    return (
      <SliderStyled {...this.props}  innerRef={input => { this.myInput = input }}>
        <PrevButton
          {...this.props}
          icon="arrow-circle-left"
          onClick={() => {
            let newSlide = parseInt(this.state.selectedIndex, 10);
            if (newSlide > 0)
              newSlide--;
            else if (newSlide === 0)
              newSlide = items.length - 1;
            this.setState({
              selectedIndex: newSlide
            });
          }}
        >
          {'<'}
        </PrevButton>
        <NextButton
          {...this.props}
          icon="arrow-circle-left"
          onClick={this.goNext}
        >
          {'>'}
        </NextButton>
        <SliderContent
          w={this.state.width}
          items={items}
          selectedIndex={this.state.selectedIndex}
          onSlideNext={(selectedIndex) => {
            let newSlide = parseInt(selectedIndex, 10);
            if (newSlide < items.length - 1)
              newSlide++;
            else
              newSlide = 0;
            this.setState({
              selectedIndex: newSlide
            });
          }}
        />
        {
          dots &&
          <DotStyled>
            {
              items.map((item, index) => {
                return (
                  <li key={index} >
                    <button
                      style={{
                        opacity: this.state.selectedIndex === parseInt(index, 10) && 0.75,
                        background: this.state.selectedIndex === parseInt(index, 10) && 'gray'
                      }}
                      value={index}
                      onClick={(event) => {
                        this.setState({
                          selectedIndex: parseInt(event.target.value, 10)
                        });
                      }}/>
                  </li>
                );
              })
            }

          </DotStyled>
        }

      </SliderStyled>);
  }
}

export default Slider;
