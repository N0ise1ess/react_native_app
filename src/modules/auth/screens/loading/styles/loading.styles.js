import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#163d7d',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    top: '10%',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: '13%',
  },
  progressBar: {
    position: 'absolute',
    bottom: '10%',
  },
});
