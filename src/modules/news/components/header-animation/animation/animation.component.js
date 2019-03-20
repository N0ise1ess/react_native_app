import { Animated } from 'react-native'; 

export class HeaderAnimation {

  statusBarHeight = 0;
  paddingStatusBar = 0;
  arrowHeight = 72;
  topPartHeight = this.arrowHeight + 46;
  fullHeight = 118;
  distanceRange = this.fullHeight - this.topPartHeight;
  maxClamp = this.fullHeight - (this.paddingStatusBar + this.statusBarHeight);
  minClamp = this.topPartHeight;
  diffClamp = this.maxClamp - this.minClamp;

  initialScroll = this.topPartHeight;
  maxActionAnimated = 43;
  actionAnimated = new Animated.Value(0);
  scrollY = new Animated.Value(0);
  _clampedScrollValue = 0;
  _scrollValue = 0;
  initialState = null;
  _statusBarStyle = null;

  stateBarTypes = { CLAMPED: 1, NORMAL: 2, EXPANDED: 3 };
  stateBar = this.stateBarTypes.NORMAL;

  constructor(initialState) {
    this.initialState = initialState;

    this._createClampedScroll();
    this.scrollY.addListener(this._updateScroll);
  }

  destroy() {
    this.scrollY.removeAllListeners();
  }

  _updateScroll = ({value, manually}) => {
    if(value && manually) {
     this._clampedScrollValue = value;
    } else {
      const diff = value - this._scrollValue;
      this._scrollValue = Math.max(value, this.topPartHeight);
      this._clampedScrollValue = Math.min(
        Math.max(this._clampedScrollValue + diff, this.minClamp), 
        this.maxClamp
      );
    }
    this._changeStateBar();
  };

  _createClampedScroll() {
    this.clampedScroll = Animated.diffClamp(
      this.scrollY.interpolate({ 
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolateLeft: 'clamp',
      }).interpolate({ 
        inputRange: [0, this.topPartHeight],
        outputRange: [this.topPartHeight, this.topPartHeight],
        extrapolate: 'identity',
      }), 
      this.minClamp,
      this.maxClamp,
    );
  }

  _setStateBar(state) {
    let toValue = state == 'full' ? this.maxActionAnimated : 0;
    Animated.timing(this.actionAnimated, {
      toValue: toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();

    this.stateBar = state;
  }

  _changeStateBar() {
    let newState, types = this.stateBarTypes;
    let clampedValue = Math.round(this._clampedScrollValue);
    if(Math.round(this.scrollY._value) < this.topPartHeight) {
      newState = types.EXPANDED;
    } else if(clampedValue == this.minClamp) {
      newState = types.NORMAL;
    } else if(clampedValue == this.maxClamp) {
      newState = types.CLAMPED;
    }

    if(newState != undefined && newState != this.stateBar) {
      this.stateBar = newState;
    }
  }

  _handleIntermediateState = (scrollToOffset) => {
    let scrollY = this.scrollY._value;
    if(scrollY < this.topPartHeight) { 
      scrollToOffset(scrollY > (this.topPartHeight / 2) ? this.topPartHeight : 0);
    } else { 
      if(
        this._clampedScrollValue < this.maxClamp && 
        this._clampedScrollValue > this.minClamp
      ) {
        let scrollTo;
        if(this._clampedScrollValue > (this.maxClamp + this.minClamp) / 2) {
          scrollTo = scrollY + this._interpolate(
            this._clampedScrollValue, 
            [this.maxClamp, this.minClamp], 
            [0, this.diffClamp]
          );
        } else {
          scrollTo = scrollY - this._interpolate(
            this._clampedScrollValue, 
            [this.minClamp, this.maxClamp], 
            [0, this.diffClamp]
          );
        }

        scrollToOffset(scrollTo);
      }
    }
  }

  _interpolate = (x, inputRange, outputRange) => {
    let minX = inputRange[0];
    let maxX = inputRange[1];
    let minY = outputRange[0];
    let maxY = outputRange[1];

    return (x - minX) * ((maxY - minY) / (maxX - minX) + minY);
  }

  minimizeBar = () => {
    if(Math.round(this.scrollY._value) == 0) {
      this.scrollToOffset(this.topPartHeight);
    } else { 
      this._setStateBar('normal');
    }
  };

  expandBar = () => {
    if(this.stateBarTypes.EXPANDED == this.stateBar) {
      return;
    }

    if(Math.round(this.scrollY._value) == this.topPartHeight) {
      this.scrollToOffset(0);
    } else { 
      this._setStateBar('full');
    }
  };

  onTabPress = (route) => {    
    let type = this.stateBarTypes;
    let offset = (this.stateBar == type.NORMAL) ? this.topPartHeight : 
                 (this.stateBar == type.CLAMPED) ? this.maxClamp : 0;

    this.initialState.scrollToOffset({
      offset: offset,
      animated: false,
      tab: route.key
    });

    this.scrollY.setValue(offset);
    this._createClampedScroll();
    this._updateScroll({value: offset, manually: true});
  }

  scrollToOffset(offset, animated) {
    if(offset != this.scrollY._value) {
      this.initialState.scrollToOffset({offset, animated});
    }
  }

  animationProps = {
    initialScroll: 0,
    scrollY: this.scrollY,
    fullHeight: this.fullHeight,
    handleIntermediateState: this._handleIntermediateState
  };

  getTransformWrapper() {
    let byScroll = Animated.add(
      Animated.multiply(this.clampedScroll, -1),
      this.scrollY.interpolate({ 
        inputRange: [0, 1],
        outputRange: [0, -1],
      }).interpolate({ 
        inputRange: [-this.topPartHeight, 0],
        outputRange: [0, this.minClamp],
        extrapolate: 'clamp',
      })
    );

    return {
      transform: [{
        translateY: Animated.add(byScroll, this.actionAnimated)
      }]
    };
  }

  getTransformSearchBar() {
    return {
      transform: [{
        translateY: Animated.add(
          this.actionAnimated.interpolate({
            inputRange: [0, this.maxActionAnimated],
            outputRange: [0, -this.topPartHeight + this.arrowHeight],
            extrapolate: 'clamp',
          }), 
          this.scrollY.interpolate({
          inputRange: [0, this.topPartHeight],
          outputRange: [0, this.topPartHeight - this.arrowHeight],
          extrapolate: 'clamp',
        }))
      }]
    };
  }

  getOpacityHead() {
    return {
      opacity: this.clampedScroll.interpolate({
        inputRange: [this.topPartHeight, this.maxClamp],
        outputRange: [1, 0],
        extrapolate: 'clamp',
      })
    };
  }

  getArrowMinimizeStyle() {
    return {
      transform: [{
        translateY: Animated.add(
          this.actionAnimated.interpolate({
            inputRange: [0, this.maxActionAnimated],
            outputRange: [0, -this.topPartHeight],
            extrapolate: 'clamp',
          }),
          this.scrollY.interpolate({
            inputRange: [0, this.topPartHeight],
            outputRange: [0, this.topPartHeight],
            extrapolate: 'clamp',
          })
        )
      }],
      opacity: Animated.add(
        this.actionAnimated.interpolate({
          inputRange: [0, this.maxActionAnimated],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        }),
        this.scrollY.interpolate({
          inputRange: [0, this.topPartHeight],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        })
      )
    };
  }
}