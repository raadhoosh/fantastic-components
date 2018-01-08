import React, { Component } from 'react';
import TabLabel from './TabLabel';
import UL from './style/UlStyled';
class TabLabels extends Component {

  render() {

    return (
      <UL {...this.props}>
        {
          this.props.tabs.map((tab, index) => {
            return (
              <TabLabel
                title={tab.title}
                key={index}
                index={index}
                currentTab={this.props.currentTab}
                onTabChange={this.props.onTabChange}
                primary={this.props.primary}
                success={this.props.success}
                secondary={this.props.secondary}
                info={this.props.info}
                warning={this.props.warning}
                danger={this.props.danger}
                inverse={this.props.inverse}
                rtl={this.props.rtl}
              />
            );
          })
        }
      </UL>
    );
  }
}


export  default TabLabels;
