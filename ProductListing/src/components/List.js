import React, {memo, useState, useCallback} from 'react';
import {
  View,
  FlatList,
  Image,
  Modal,
  RefreshControl,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';
import UseEffect from '../Hooks/UseEffect';
import TextComponent from './text';
import Button from './Button';
import {styles} from './style/ListStyling ';

const List = ({onPress}) => {
  const storage = UseEffect();
  const [data, setData] = useState(storage.slice(0, 10));
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
    const randomizedData = shuffleArray(storage);
    setData(randomizedData.slice(0, 10));
    setRefreshing(false);
  }, [storage]);

  const loadMoreData = () => {
    if (data.length < storage.length && !loadingMore) {
      setLoadingMore(true);
      setTimeout(() => {
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
        keyExtractor={(item, index) => `${item?.id || index}`} // Unique keyExtractor
        renderItem={({item}) => (
          <Button
            buttonStyle={styles.container}
            onPress={() => onPress(item)}
            onLongPress={() => openModal(item.image)}
            image={{uri: item?.image}}
            imageStlye={styles.image}
            text2={item?.title}
            text2Style={styles.text}
          />
        )}
        contentContainerStyle={styles.contentContainer}
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
          <View style={styles.modalBackground}>
            <Image style={styles.modalImage} source={{uri: selectedImage}} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default memo(List);
