import React from 'react';
import { AsyncStorage, Image, Text, View } from 'react-native';
import { Bar } from 'react-native-progress';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';

import { img_logo_white } from '../../../../assets/images';
import { goToAuth } from '../../../../navigation/navigation';
import { setFontSize } from '../../../settings/store/settings-actions';
import { initLoad } from '../../store/loading-actions';
import { styles } from './styles';

class InnerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
    };
  }

  componentWillReceiveProps(props) {
    if (props.isLoaded) {
      goToAuth();
    }
  }

  componentWillMount() {
    this.props.initLoad();
  }

  async componentDidMount() {
    SplashScreen.hide();
  }

  _retrieveData = async () => {
    try {
      const fontSize = await AsyncStorage.getItem('fontSize');
      fontSize && this.props.setFontSize(parseInt(fontSize));
      console.log('fontSize', fontSize);
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({ styles: styles(this.props.fontSize) });
  }

  render() {
    const { styles } = this.state;
    return (
      <View style={styles.container}>
        <Image source={img_logo_white} resizeMode="contain" style={styles.image} />
        <Text style={styles.text}>{this.props.text}</Text>
        <View style={styles.progressBar}>
          <Bar progress={this.props.progress} width={200} borderWidth={0} borderRadius={2} color="#ff003c" unfilledColor="white" />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.authReducer,
    ...state.loadingScreen,
    ...state.settings,
  };
};

const mapDispatchToProps = (dispatch) => ({
  initLoad: () => dispatch(initLoad()),
  setFontSize: (fontSize) => dispatch(setFontSize(fontSize)),
});

export const LoadingScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
