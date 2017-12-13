import React from 'react';
import Input from '../Input/Input';
import OutsideAlerter from './OutsideAlerter';
import { OutoCompelete,
  OutoCompeleteMenu,
  OutoCompeleteWrap,
  OutoCompeleteItems,
  OutoCompeleteItem } from './style';

class Search extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onType = this.onType.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
    this.lastHittime = 0;
    this.state = {
      value: '',
      editorText: '',
      arraySuggest: [],
      focused: false,
      isOpen: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value,
      arraySuggest: nextProps.suggestionList
    });
  }

  onType(value) {
    const { suggestionList, suggestionCount, onValueChanged, async, onKeyPress, minCharsToSearch} = this.props;
    this.setState({
      value: value
    });
    onValueChanged(value);
    if (minCharsToSearch && value.length < minCharsToSearch)
      return;
    if (async) {
      this.lastHittime = Date.now();
      setTimeout(function () {
        if (Date.now() - this.lastHittime >= this.props.delayMillis)
          onKeyPress(value);
      }.bind(this), this.props.delayMillis);
    }
    else {
      let arraySuggest = [];
      let maxCount = suggestionList.length;
      if (suggestionCount && suggestionCount < maxCount) {
        maxCount = suggestionCount;
      }
      for (let i = 0; i < maxCount; i++) {
        if (suggestionList[i].value.toLowerCase().includes(value.toLowerCase())) {
          const obj = {
            id: suggestionList[i].id,
            value: suggestionList[i].value
          };
          arraySuggest.push(obj);
        }
      }
      this.setState({
        arraySuggest : arraySuggest
      });
    }
  }

  onItemClick(item) {
    const { onSearch, onSuggestionClick, onValueChanged } = this.props;
    this.setState({
      value: item.value,
      isOpen: false
    });
    onValueChanged(item.value);
    if (onSuggestionClick)
      onSuggestionClick(item);
    else
      onSearch(item.value);

  }

  onSearchClick() {
    const { onSearch } = this.props;
    onSearch(this.state.value);
  }


  render() {
    const { async, suggestionCount, suggestionList} = this.props;

    let searchedArray = [];
    if (async) {
      searchedArray = suggestionList;
    }
    else {
      searchedArray = this.props.suggestionList;
    }
    if (suggestionCount && suggestionCount < searchedArray.length) {
      searchedArray = searchedArray.slice(0, suggestionCount);
    }
    return (
      <OutoCompelete>
        <Input
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              this.onSearchClick.bind(this);
            }
            else {
              this.onType(e.target.value);
            }
          }
          }
          onFocus={() => {
            this.setState({
              focused: true,
              isOpen: true
            });
          }}
          onBlur={() => {
            this.setState({
              focused: false
            });
          }}
          value={this.state.value}
          onChange={(e) => {
            this.setState({
              value: e.target.value
            });
          }}
          errorText={this.props.errorText}
          {...this.props}

        />
        <OutsideAlerter
          onOutsideClick={() => {
            setTimeout(function () {
              if (!this.state.focused) {
                this.setState({
                  isOpen: false
                });
              }
            }.bind(this), 200);
          }
          }
        >
          { this.state.isOpen && this.state.arraySuggest.length > 0 &&
          <OutoCompeleteMenu >
            <OutoCompeleteWrap >
              <OutoCompeleteItems >{
                searchedArray.map((item, i) => {
                  return (
                    <OutoCompeleteItem key={i} onClick={() => {
                      this.onItemClick(item)
                    }}>
                      {item.value}
                    </OutoCompeleteItem>
                  )
                })
              }
              </OutoCompeleteItems>
            </OutoCompeleteWrap>
          </OutoCompeleteMenu>}
        </OutsideAlerter>
      </OutoCompelete>

    );
  }
}


export default Search ;
