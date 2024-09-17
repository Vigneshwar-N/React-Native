import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 1,
  },
  itemContent: {
    backgroundColor: '#FFFFFF',
    shadowOffset: {height: 3, width: 0},
    shadowColor: '#000000',
    elevation: 3,
    shadowRadius: 2,
  },
  image: {
    width: 190,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  brandContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '3%',
    paddingHorizontal: '2%',
  },
  conditionContainer: {
    paddingHorizontal: '3.5%',
  },
  categoryModelContainer: {
    flexDirection: 'row',
    paddingLeft: '6%',
    marginBottom: 5,
  },
  categoryButton: {
    backgroundColor: '#FF0000',
    margin: 1,
  },
  modelButton: {
    backgroundColor: '#FF0000',
    margin: 1,
    marginLeft: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    padding: 1,
  },
  priceContainer: {
    paddingBottom: '2%',
    backgroundColor: '#b4d0ce',
    borderWidth: 0.5,
    borderColor: '#000000',
  },
  priceText: {
    textAlign: 'right',
    paddingRight: 10,
  },
});
