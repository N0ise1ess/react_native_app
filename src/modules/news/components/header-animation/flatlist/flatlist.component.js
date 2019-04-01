import React from 'react';
import { isAndroid } from '../../../utils';
import { FlatList as FlatListRn, Animated } from 'react-native'; 
import { HeaderContext } from '../'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatListRn);

class FlatListHelper extends React.PureComponent {
  
  componentDidMount() {
    let { tabRoute, animation, addHandlerScroll } = this.props;

    addHandlerScroll(tabRoute, this.scrollToOffset);

    setTimeout(() => {
      this.scrollToOffset(animation.initialScroll, false)
    }, 250);
  }

  scrollToOffset = (offset, animated = true) => {
    this.flatList && this.flatList.getNode().scrollToOffset({offset, animated});
  };

  _onMomentumScrollBegin = () =>  this.props._canJumpToTab(false);  
  _onMomentumScrollEnd = () => this.props._canJumpToTab(true);
  _onScrollEndDrag = e => {
    let velocity = e.nativeEvent.velocity.y;
    if(velocity == 0 || (isAndroid() && Math.abs(Math.round(velocity)) <= 2)) {
      this.props.animation.handleIntermediateState(this.scrollToOffset);
    }
  };

  render() {
    let { scrollY } = this.props.animation;
    let { contentContainerStyle } = this.props;
    
    return (
      <AnimatedFlatList
        {...this.props}
        scrollEventThrottle={1}  
        onScrollEndDrag={this._onScrollEndDrag}
        onMomentumScrollBegin={this._onMomentumScrollBegin}
        onMomentumScrollEnd={this._onMomentumScrollEnd}
        contentContainerStyle={[
          contentContainerStyle
        ]}
        ref={component => this.flatList = component}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      />
    );
  }
}

const withHeaderContext= Comp => props => (
  <HeaderContext.Consumer>
    {(context) => 
      <Comp
        {...context}
        {...props} 
      />
    }
  </HeaderContext.Consumer>
);

export const FlatList = withHeaderContext(FlatListHelper);