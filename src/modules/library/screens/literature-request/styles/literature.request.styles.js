import { StyleSheet, Dimensions } from 'react-native';
import { getSizeFonts, fontSettings } from '../../../../shared';
const { width, height } = Dimensions.get('window');

export const styles = (fontSize) => StyleSheet.create({
  container: {
    backgroundColor: '#C8D1D3',
  },
  wrapper: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  listStyle: {
    marginTop: 12,
  },
  listItemStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 10,
    paddingBottom: 20,
    paddingLeft: 20,
    backgroundColor: '#fff',
    flex: 1,
    fontWeight: '200',
    marginTop: 7,
    marginLeft: 0,
  },
  label: {
    fontFamily: 'MyriadPro-Light',
    color: '#1E1E1E',
    fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
    fontWeight: '300',
    marginTop: 15,
    marginBottom: 12,
  },
  title: {
    fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, fontSize),
    flexWrap: 'wrap',
    color: '#1E1E1E',
    fontWeight: 'bold',
    marginTop: 5,
    paddingLeft: 40,
    paddingRight: 40,
  },
  textStyle: {
    fontFamily: 'MyriadPro-Light',
    color: '#979797',
    fontSize: getSizeFonts(fontSettings.FONT_SIZE_14, fontSize),
    fontWeight: '300',
    paddingLeft: 40,
  },
  details: {
    marginTop: 2,
  },
  picker: {
    width: '70%',
    alignSelf: 'center',
  },
  pickerText: {
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },
  searchInputWrapper: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 30,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  pickerItemText: {
    color: '#1E1E1E',
    fontSize: getSizeFonts(fontSettings.FONT_SIZE_12, fontSize),
  },
  modal: {
    width: 320,
    height: 240,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    position: 'absolute',
    top: - height / 5 + 30,
  },
  modalContent: {
    width: 300,
    height: 220,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  modalText: {
    padding: 30,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },
  modalCloseIcon: {
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: getSizeFonts(fontSettings.FONT_SIZE_16, fontSize),
    position: 'absolute',
    height: 22,
    width: 25,
    right: -5,
    top: -3,
    bottom: 0,
  },
  closeIcon: {
    fontSize: 26,
    position: 'absolute',
    right: 20,
    top: 20,
    bottom: 0
  },
  modalButtons: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  modalButton: {
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 15,
    paddingBottom: 0,
    paddingTop: 0,
    justifyContent: 'center',
    width: 100,
    height: 35,
    borderColor: '#fff'
  },
  buttonCancel: {
    backgroundColor: '#1669f9',
    marginRight: 10,
  },
  buttonConfirm: {
    backgroundColor: '#ff003c',
  },
  buttonConfirmFull: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  button: {
		width: '70%',
    justifyContent: 'center',
    backgroundColor: '#ff003c',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  }
});
