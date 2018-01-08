import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import OutsideAlerter from '../OutsideAlerter/OutsideAlerter';
import AutoCompelete from './style/AutoCompeleteStyled';
import AutoCompeleteMenu from './style/AutoCompeleteMenuStyled';
import AutoCompeleteWrap from './style/AutoCompeleteWrapStyled';
import AutoCompeleteItems from './style/UlStyled';
import AutoCompeleteItem from './style/LiStyled';

class Search extends Component {
  constructor(props, context) {
    super(props, context);
    this.onType = this.onType.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
    this.lastHittime = 0;
    this.state = {
      value: '',
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
    const {
      suggestionList, suggestionCount, onValueChanged, async, onKeyPress, minCharsToSearch
    } = this.props;

    this.setState({
      value
    });
    if (onValueChanged) {
      onValueChanged(value);
    }
    if (minCharsToSearch && value.length < minCharsToSearch) return;
    if (async) {
      this.lastHittime = Date.now();
      setTimeout(function () {
        if (Date.now() - this.lastHittime >= this.props.delayMillis) {
          onKeyPress(value);
        }
      }.bind(this), this.props.delayMillis);
    } else {
      const arraySuggest = [];
      let maxCount = suggestionList.length;
      if (suggestionCount && suggestionCount < maxCount) {
        maxCount = suggestionCount;
      }
      for (let i = 0; i < maxCount; i += 1) {
        const { id } = suggestionList[i];
        const val = suggestionList[i].value;
        if (val.toLowerCase().includes(value.toLowerCase())) {
          const obj = {
            id,
            value: val
          };
          arraySuggest.push(obj);
        }
      }
      this.setState({
        arraySuggest
      });
    }
  }

  onItemClick(item) {
    const {onSearch, onSuggestionClick, onValueChanged} = this.props;
    this.setState({
      value: item.value,
      isOpen: false
    });
    if (onValueChanged) {
      onValueChanged(item.value);
    }
    if (onSuggestionClick) {
      onSuggestionClick(item);
    } else if (onSearch) {
      onSearch(item.value);
    }
  }

  onSearchClick() {
    const { onSearch } = this.props;
    onSearch(this.state.value);
  }


  render() {
    const { async, suggestionCount, suggestionList } = this.props;

    let searchedArray = [];
    if (async) {
      searchedArray = suggestionList;
    } else {
      searchedArray = this.state.arraySuggest;
    }
    if (suggestionCount && suggestionCount < searchedArray.length) {
      searchedArray = searchedArray.slice(0, suggestionCount);
    }
    return (
      <AutoCompelete>
        <Input
          icon="search"
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              this.onSearchClick.bind(this);
            } else {
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
          {this.state.isOpen && this.state.arraySuggest.length > 0 &&
          <AutoCompeleteMenu>
            <AutoCompeleteWrap>
              <AutoCompeleteItems>{
                searchedArray.map((item, i) => {
                  return (
                    <AutoCompeleteItem
                      key={i}
                      onClick={() => {
                        this.onItemClick(item);
                      }}
                    >
                      {item.value}
                    </AutoCompeleteItem>
                  );
                })
              }
              </AutoCompeleteItems>
            </AutoCompeleteWrap>
          </AutoCompeleteMenu>}
        </OutsideAlerter>
      </AutoCompelete>

    );
  }
}

Search.propTypes = {
  suggestionList: PropTypes.array.isRequired,
  onKeyPress: PropTypes.func,
  onSearch: PropTypes.func,
  onSuggestionClick: PropTypes.func,
  onValueChanged: PropTypes.func,
  async: PropTypes.bool,
  delayMillis: PropTypes.number,
  suggestionCount: PropTypes.number,
  minCharsToSearch: PropTypes.number,
  showSearchButtom: PropTypes.bool,
  label: PropTypes.string,
  errorText: PropTypes.string,
  important: PropTypes.bool
};

export default Search;
