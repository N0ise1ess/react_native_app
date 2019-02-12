import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  sectionStyle: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 20,
  },
  photoStyle: {
    width: 150,
    height: 200,
    resizeMode: 'contain',
  },
    btnImageStyle: {
      borderRadius: 45,
      marginRight: 10,
      height: 45,
      width:45,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0C68FF',
    },
  imageStyle: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: 'white'
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
  dataStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4099F4',
  },
  dataSection: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
