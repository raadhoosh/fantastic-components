import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Button from '../Button/Button';
import OutsideAlerter from '../OutsideAlerter/OutsideAlerter';
import OutoCompelete from './style/OutoCompeleteStyled';
import OutoCompeleteMenu from './style/OutoCompeleteMenuStyled';
import OutoCompeleteWrap from './style/OutoCompeleteWrapStyled';
import Ul from './style/UlStyled';
import LI from './style/LiStyled';

class TagEditor extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onType = this.onType.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
    this.lastHittime = 0;
    this.state = {
      value: props.value,
      editorText: '',
      arraySuggest: [],
      focused: false,
      isOpen: false,
      tags: []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value,
      arraySuggest: nextProps.suggestionList,
      tags: nextProps.tags
    })
  }

  onType(value) {
    const {suggestionList, suggestionCount, onValueChanged, async, onKeyPress, minCharsToSearch} = this.props;
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
          let obj = {
            id: suggestionList[i].id,
            value: suggestionList[i].value
          };
          arraySuggest.push(obj);

        }
      }
      this.setState({
        arraySuggest: arraySuggest
      });
    }
  }

  onItemClick(item) {
    const {onSearch, onSuggestionClick, onValueChanged} = this.props;
    this.setState({
      value: item.value,
      isOpen: false
    });
    let tags = this.state.tags;
    let tag = {
      value: item.value,
      id: item.id,
    };
    tags.push(tag);
    this.setState({
      tags: tags
    });
    let arraySuggestList = this.state.arraySuggest;
    let selectedRow = arraySuggestList.filter(s => parseInt(s.id, 10) === parseInt(item.id, 10));
    let arrays = [];
    for (let m = 0; m < arraySuggestList.length; m++) {
      arrays.push(parseInt(arraySuggestList[m].id, 10))
    }
    let yTags = [];
    let selectedId = arrays.indexOf(parseInt(selectedRow[0].id, 10));
    if (selectedId > -1) {
      arrays.splice(selectedId, 1);
      for (let z = 0; z < arraySuggestList.length; z++) {
        for (let a = 0; a < arrays.length; a++) {
          if (parseInt(arraySuggestList[z].id, 10) === parseInt(arrays[a], 10)) {
            let tag = {
              id: arraySuggestList[z].id,
              value: arraySuggestList[z].value,
            };
            yTags.push(tag);
          }
        }
      }
    }
    this.props.onChangeTag(yTags, tags);
    onValueChanged(item.value);
    if (onSuggestionClick)
      onSuggestionClick(item);
    else
      onSearch(item.value);
  }

  onSearchClick() {
    const {onSearch} = this.props;
    onSearch(this.state.value);
  }

  onClickButton(e) {
    let item = {
      id: e.target.value,
      value: e.target.name
    };
    let arraySuggest = this.state.arraySuggest;
    arraySuggest.push(item);


    let tagList = this.state.tags;
    let selectedRow = tagList.filter(s => parseInt(s.id, 10) === parseInt(item.id, 10));
    let arrays = [];
    for (let m = 0; m < tagList.length; m++) {
      arrays.push(parseInt(tagList[m].id, 10))
    }
    let yTags = [];
    let selectedId = arrays.indexOf(parseInt(selectedRow[0].id, 10));
    if (selectedId > -1) {
      arrays.splice(selectedId, 1);
      for (let z = 0; z < tagList.length; z++) {
        for (let a = 0; a < arrays.length; a++) {
          if (parseInt(tagList[z].id, 10) === parseInt(arrays[a], 10)) {
            let tag = {
              id: tagList[z].id,
              value: tagList[z].value,
            };
            yTags.push(tag);
          }
        }
      }
    }
    this.setState({
      tags: yTags
    });
    this.props.onChangeTag(arraySuggest, yTags);
  }

  render() {
    const {
      async,
      suggestionCount,
      suggestionList,
      showSearchButtom,
      label,
      important,
      primary,
      secondary,
      info,
      success,
      danger,
      warning
    } = this.props;
    const colorProps = {primary, secondary, info, success, danger, warning};

    let searchedArray = [];
    if (async) {
      searchedArray = suggestionList;
    }
    else {
      searchedArray = this.state.arraySuggest;
    }
    if (suggestionCount && suggestionCount < searchedArray.length) {
      searchedArray = searchedArray.slice(0, suggestionCount);
    }
    return (
      <OutoCompelete>
        {
          this.state.tags.length > 0 &&
          <div>
            {
              this.state.tags.map((t, i) => {
                return <Button onClick={this.onClickButton}
                               key={i}
                               value={t.id}
                               name={t.value}
                               icon="window-close"
                               style={{
                                 border: 'none',
                                 padding: "8px", marginLeft: "5px"
                               }}
                               secondary
                               label={t.value}
                               {...colorProps}
                />

              })
            }
          </div>
        }
        <Input
          label={label}
          important={important}

          placeholder=""
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
          {this.state.isOpen && this.state.arraySuggest.length > 0 &&
          <OutoCompeleteMenu>
            <OutoCompeleteWrap>
              <Ul>{
                searchedArray.map((item, i) => {
                  return (
                    <LI key={i} onClick={() => {
                      this.onItemClick(item)
                    }}>
                      {item.value}
                    </LI>
                  )
                })
              }
              </Ul>
            </OutoCompeleteWrap>
          </OutoCompeleteMenu>}
        </OutsideAlerter>
        {showSearchButtom && <Button onClick={this.onSearchClick}
                                     icon='search'
        />}
      </OutoCompelete>

    );
  }
}

TagEditor.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool
};

export default TagEditor;
