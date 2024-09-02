import React, {useContext, useState, useCallback, memo} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  RefreshControl,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  getResponsiveFontSize,
  getResponsiveHeight,
  getResponsiveWidth,
} from '../utility/responsive';
import {fonts} from '../constants/fonts/font';
import HeartImage from '../../assets/images/svgs/Home/Heart';
import UseEffect from '../Hooks/UseEffect';
import {ThemeContext} from '../Hooks/UseContext';
import {myColor} from '../utility/Colors/myColors';
import {SelectedItemContext} from '../apis/PassData';

const Products = ({navigation}) => {
  const {selectedItem, setSelectedItem} = useContext(SelectedItemContext);

  const Storage = UseEffect();
  const {darkTheme} = useContext(ThemeContext);
  const [data, setData] = useState(Storage.slice(0, 10));
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const shuffleArray = array => {
    let shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    const randomizedData = shuffleArray(Storage);
    setData(randomizedData.slice(0, 10));
    setRefreshing(false);
  }, [Storage]);

  const loadMoreData = () => {
    if (data.length < Storage.length && !loadingMore) {
      setLoadingMore(true);
      setTimeout(() => {
        setData(prevData => [
          ...prevData,
          ...shuffleArray(Storage).slice(prevData.length, prevData.length + 10),
        ]);
        setLoadingMore(false);
      }, 1000);
    }
  };

  const openModal = imageUri => {
    setSelectedImage(imageUri);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: darkTheme ? myColor.black : myColor.white},
      ]}>
      <FlatList
        data={data}
        numColumns={2}
        contentContainerStyle={styles.listContentContainer}
        renderItem={({item, index}) => (
          <View
            style={[
              styles.itemContainer,
              {
                paddingLeft: index % 2 !== 0 ? '1%' : '0%',
                paddingRight: index % 2 !== 0 ? '0%' : '1%',
              },
            ]}>
            <View
              style={[
                styles.itemContent,
                {
                  backgroundColor: darkTheme
                    ? myColor.darkGray
                    : myColor.lightGray,
                },
              ]}>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: item?.thumbnail}} />
              </View>
              <View style={styles.heartIconContainer}>
                <TouchableOpacity>
                  <HeartImage
                    height={getResponsiveHeight(25.57)}
                    width={getResponsiveWidth(31)}
                    color={darkTheme ? myColor.white : myColor.black}
                  />
                </TouchableOpacity>
              </View>
              <Text
                style={[
                  styles.title,
                  {color: darkTheme ? myColor.white : myColor.black},
                ]}
                numberOfLines={1}>
                {item?.title}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setSelectedItem(item);
                  navigation.navigate('ProductDescription');
                }}>
                <View
                  style={[
                    styles.shopNowContainer,
                    {
                      backgroundColor: darkTheme
                        ? myColor.darkGray
                        : myColor.lightGray,
                    },
                    {borderColor: darkTheme ? myColor.white : myColor.black},
                  ]}>
                  <Text
                    style={[
                      styles.shopNowText,
                      {color: darkTheme ? myColor.white : myColor.black},
                    ]}>
                    SHOP NOW
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loadingMore ? (
            <ActivityIndicator
              size="large"
              color={!darkTheme ? myColor.black : myColor.white}
            />
          ) : null
        }
      />
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalBackground}>
            <Image style={styles.modalImage} source={{uri: selectedImage}} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default memo(Products);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContentContainer: {
    alignItems: 'center',
    paddingBottom: getResponsiveHeight(30),
  },
  itemContainer: {
    alignItems: 'center',
    marginBottom: getResponsiveHeight(30),
    marginTop: getResponsiveHeight(20),
  },
  itemContent: {
    height: getResponsiveHeight(210),
    width: getResponsiveWidth(170),
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageContainer: {
    height: getResponsiveHeight(111),
    width: getResponsiveWidth(111),
    position: 'static',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  heartIconContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: getResponsiveFontSize(18),
    fontFamily: fonts.PlayfairDisplayBold,
    paddingRight: '0.1%',
    paddingLeft: '0.1%',
  },
  shopNowContainer: {
    borderBottomWidth: getResponsiveWidth(1.8),
    alignItems: 'center',
    borderColor: myColor.black,
  },
  shopNowText: {
    fontSize: getResponsiveFontSize(14),
    fontFamily: fonts.WorkSansMedium,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalImage: {
    width: '90%',
    height: '80%',
    resizeMode: 'contain',
  },
});
