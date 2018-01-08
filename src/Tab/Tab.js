import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TabLabels from './TabLabels';
import Wrapper from './style/WrapperStyled';
import Content from './style/ContentStyled';
class Tab extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentTab: props.currentTab
    };
  }

  onTabChange(index) {
    this.setState({currentTab: index});
  }

  render() {
    const tabContent = this.props.tabs.length > 0 ? this.props.tabs[this.state.currentTab].content : null;
    return (
      <Wrapper {...this.props}>
        <TabLabels
          tabs={this.props.tabs}
          onTabChange={this.onTabChange.bind(this)}
          currentTab={this.state.currentTab}
          primary={this.props.primary}
          secondary={this.props.secondary}
          info={this.props.info}
          warning={this.props.warning}
          danger={this.props.danger}
          success={this.props.success}
          inverse={this.props.inverse}
          rtl={this.props.rtl}
        />
        <Content {...this.props}>
          {tabContent}
        </Content>
      </Wrapper>
    );
  }
}

Tab.propTypes = {
  tabs: PropTypes.array,
  style: PropTypes.object,
  labelListStyle: PropTypes.object,
  currentTab: PropTypes.number,

  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  inverse: PropTypes.bool,
};

export default Tab;
