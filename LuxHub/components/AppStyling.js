import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFFFFF',
    shadowOffset: {height: 3, width: 0},
    shadowColor: '#000000',
    elevation: 3,
    shadowRadius: 2,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLeft: {
    height: 20,
  },
  headerTitle: {
    color: '#70B3FF',
    fontWeight: 'bold',
    fontSize: 20,
    right: 10,
  },
  headerSubtitle: {
    fontWeight: 'bold',
    fontSize: 15,
    right: 15,
    color: '#000000',
  },
  iconRight: {
    height: 27,
  },
  listContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
});
