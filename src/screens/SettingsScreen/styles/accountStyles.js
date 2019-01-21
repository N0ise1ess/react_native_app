import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  sectionStyle: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 20,
  },
  imageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    tintColor: '#163D7D',
    borderWidth: 1,
    borderColor: '#163D7D',
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  nameStyle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  label: {
    fontSize: 12,
    paddingTop: 12,
  },
  textStyle: {
    fontSize: 14,
    marginTop: 5,
  },
  inputStyle: {
    fontSize: 14,
    marginTop: 5,
    marginRight: 5,
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 2,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 5,
  },
  info: {
    borderColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20,
    marginBottom: 50,
  },
  buttonStyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    margin: 5,
  },
  editStyle: {
    backgroundColor: '#ED3944',
  },
  cancelStyle: {
    backgroundColor: '#1166F6',
  },
  iconStyle: {
    fontSize: 18,
    color: '#fff',
  },

})
