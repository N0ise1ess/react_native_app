import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C8D1D3',
  },
  listItemStyle: {
    flexDirection: 'column',
    marginBottom: 5,
    backgroundColor: '#fff',
    width: '100%',
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 75,
    paddingRight: 75,
    paddingTop: 20,
    paddingBottom: 20,
  },
  listStyle: {},
  textStyle: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  fontTitle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingTop: 15,
    paddingBottom: 5,
  },
  sliderView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 5,
    position: 'relative',
  },
  sliderCircleOne: {
    width: 10,
    height: 10,
    borderRadius: 50,
    position: 'absolute',
    top: 14,
    left: 0,
    backgroundColor: '#26518f',
    zIndex: 0,
  },
  sliderCircleTwo: {
    width: 10,
    height: 10,
    borderRadius: 50,
    position: 'absolute',
    top: 14,
    right: 0,
    backgroundColor: '#26518f',
    zIndex: 0,
  },
  slider: {
    width: '100%',
    zIndex: 1,
  },
  thumbSlider: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  smallTitle: {
    fontSize: 12,
  },
  mediumTitle: {
    fontSize: 16,
  },
  largeTitle: {
    fontSize: 20,
  },
  buttonClear_box: {
    marginTop: 20,
    width: '100%',
  },
  buttonClear: {
    backgroundColor: '#ff003c',
    color: '#fff',
  },
  buttonClear_text: {
    color: '#fff',
  },
  textRam: {
    marginTop: 10,
    color: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  textRam_title: {
    fontSize: 12,
    color: '#333',
  },
  textRam_number: {
    paddingLeft: 10,
    color: '#ff003c',
    fontSize: 20,
  },
  textRam_size: {
    color: '#ff003c',
    fontSize: 14,
  },
  textRam_description: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
