import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62',
  },
  subtitleCTA: {
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
});

export default styles;
