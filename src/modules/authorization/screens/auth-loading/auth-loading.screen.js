import React from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import { styles } from './styles';

class InnerComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token === null) {
      this.props.navigation.navigate('Auth');
    }
    if (newProps.isRehydrated) {
      this.props.navigation.navigate(this.props.token !== null ? 'App' : 'Auth');
    }
  }

  componentWillMount() {
    if (this.props.isRehydrated) {
      this.props.navigation.navigate(this.props.token !== null ? 'App' : 'Auth');
    }
  }

  // Render any loading content that you like here
  render() {
    console.log(this.props.token);
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
  };
};

export const AuthLoadingScreen = connect(
  mapStateToProps,
  null,
)(InnerComponent);
