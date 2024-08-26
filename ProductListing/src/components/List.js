import React, {memo, useState, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  RefreshControl,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';
import UseEffect from '../Hooks/UseEffect';
import {styles} from './ListStyling ';

const List = ({onPress}) => {
  const storage = UseEffect();
  const [data, setData] = useState(storage.slice(0, 10));
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  // Function to shuffle an array
  const shuffleArray = array => {
    let shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Handle refresh (shuffle data)
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Shuffle data and update state
    const randomizedData = shuffleArray(storage);
    setData(randomizedData.slice(0, 10));
    setRefreshing(false);
  }, [storage]);

  // Handle load more data
  const loadMoreData = () => {
    if (data.length < storage.length && !loadingMore) {
      setLoadingMore(true);
      setTimeout(() => {
        // Simulate network delay
        const moreData = storage.slice(data.length, data.length + 10);
        setData(prevData => [...prevData, ...moreData]);
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
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.container}
            onPress={() => onPress(item)}
            onLongPress={() => openModal(item.image)}>
            <Image style={styles.image} source={{uri: item?.image}} />
            <Text style={styles.text}>{item?.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{paddingBottom: 20}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loadingMore ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : null
        }
      />
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            }}>
            <Image
              style={{
                width: '90%',
                height: '70%',
                resizeMode: 'contain',
              }}
              source={{uri: selectedImage}}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default memo(List);
