import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
  },
  sectionStyle: {
    flexDirection: 'row',
    paddingLeft: 20,
  },
  photoStyle: {
    width: 150,
    height: 200,
    resizeMode: 'contain',
  },
  imageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    tintColor: '#4099F4',
    marginLeft: 10,
    marginRight: 10,
  },
  nameStyle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  label: {
    fontSize: 10,
    paddingTop: 12,
  },
  textStyle: {
    fontSize: 14,
    marginTop: 5,
  },
  dataStyle: {
    fontSize: 14,
    paddingTop: 5,
  },
  dataSection: {
    borderColor: 'black',
    borderTopWidth: 1,
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 5,
  },
  info: {
    paddingBottom: 20,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20,
    marginBottom: 50,
  },
  buttonStyle: {
    paddingLeft: 25,
    paddingRight: 25,
    margin: 5,
    backgroundColor: '#ED3944',
    alignSelf: 'flex-end',
  },
});
