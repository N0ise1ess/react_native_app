import React, { Component }  from 'react';
import { connect } from 'react-redux';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.token === null) {
      this.props.navigation.navigate('Auth');
    }
    if(newProps.isRehydrated) {
      this.props.navigation.navigate(this.props.token !== null ? 'App' : 'Auth');
    }
  }

  componentWillMount() {
    if(this.props.isRehydrated){
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
  }
})

const mapStateToProps = (state) => {
  return {
    ...state.authReducer,
  }
}

export default connect(mapStateToProps, null)(AuthLoadingScreen);
