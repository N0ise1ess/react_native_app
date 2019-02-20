import React from 'react';
import { Image, Text, View } from 'react-native';
import { Bar } from 'react-native-progress';
import { connect } from 'react-redux';

import { img_logo_white } from '../../../../assets/images';
import { styles } from './styles';

class InnerComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    setTimeout(() => {
      this.props.navigation.navigate(this.props.token !== null ? 'App' : 'Auth');
    }, 5000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={img_logo_white} resizeMode="contain" style={styles.image} />
        <Text style={styles.text}>Загрузка...</Text>
        <View style={styles.progressBar}>
          <Bar progress={0.3} width={200} borderWidth={0} borderRadius={2} color="#ff003c" unfilledColor="white" />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
  };
};

export const LoadingScreen = connect(
  mapStateToProps,
  null,
)(InnerComponent);
