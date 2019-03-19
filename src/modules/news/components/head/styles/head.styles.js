import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
	wrapper: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		zIndex: 1,
		backgroundColor: '#fff',
	},
	searchContainer: {
		zIndex: 99,
		backgroundColor: '#CED8DA',
		width: '100%',
		overflow: 'hidden',
	},
	customSlide: {
		width,
		flex: 0,
		padding: 0,
	},
	sliderImage: {
		resizeMode: 'cover',
		width,
		height: height / 5,
	},
	buttonSelected: {
		backgroundColor: 'red',
	},
	buttonsPagination: {
		borderRadius: 30,
		paddingRight: 15,
		paddingLeft: 15,
		marginTop: 10,
		marginBottom: 10,
	},
  buttons: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    bottom: 3,
  },
});