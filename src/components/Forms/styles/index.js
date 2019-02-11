import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
  label: {
    fontSize: 10,
    paddingTop: height < 550 ? 10 : 20,
    color: '#747A7B',
  },
  inputStyle: {
    fontSize: height < 750 ? 12 : 16,
    padding: 0,
    height: 34
  },
  resetInputStyle: {
    backgroundColor: '#fff',
  },
  inputIcon: {
    fontSize: 16,
    color: '#163D7D',
    paddingTop: 0,
    paddingRight: 0
  },
  item: {
    marginTop: height < 550 ? 0 : 5,
  },
  buttonStyle: {
    marginTop: height < 550 ? 0 : 10,
    backgroundColor: '#0C68FF',
  },
  errorStyle: {
    color: 'red',
    fontSize: 10,
    marginRight: 10,
  },
  resetButtonStyle: {
    backgroundColor: '#ED3944',
    marginTop: 30,
  }
})
