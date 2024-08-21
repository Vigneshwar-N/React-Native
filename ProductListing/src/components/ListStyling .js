import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
  },
  image: {
    height: 150,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  text: {
    textAlign: 'center',
    margin: 10,
    fontSize: 16,
    color: '#333',
  },
});
