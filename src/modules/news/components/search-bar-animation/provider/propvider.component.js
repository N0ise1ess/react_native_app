import React from 'react';
import { HeaderContext, HeaderAnimation } from '../';

export class HeaderProvider extends React.Component {
  constructor(props) {
    super(props);

    this.headerAnimation = new HeaderAnimation({
      scrollToOffset: (configScroll) => {
        let tab = configScroll.tab ? configScroll.tab : this.props.currentTab;

        let scrollToOffset = this._handlersScroll[tab];
        scrollToOffset && scrollToOffset(configScroll.offset, configScroll.animated);
      }
    });

    this.state = {
      currentTab: null,
      canJumpToTab: true,
      contextProvider: {
        animation: this.headerAnimation.animationProps, 
        addHandlerScroll: this._addHandlerScroll,
        _canJumpToTab: this._canJumpToTab
      }
    };
  }

  componentWillUnmount() {
    this.headerAnimation.destroy();
  }

  _handlersScroll = {};
  _addHandlerScroll = (tab, handler) => {
    this._handlersScroll[tab] = handler;
  };

  _canJumpToTab = (canJumpToTab) => this.setState({canJumpToTab});

  render() {
    return (
      <HeaderContext.Provider value={this.state.contextProvider}>
        {this.props.children(this.headerAnimation, {
          canJumpToTab: this.state.canJumpToTab
        })}
      </HeaderContext.Provider>
    );
  }
}