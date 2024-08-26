import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
  },
  image: {
    resizeMode: 'contain',
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
  contentContainer: {
    paddingBottom: 20,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalImage: {
    width: '90%',
    height: '70%',
    resizeMode: 'contain',
  },
});
