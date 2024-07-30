import {
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
//------------------------------------------------------------------------------------------------------Props
import {images} from '../constants/images';
import {styles} from '../components/flatListStyling';

export default function Flatlisst() {
  //------------------------------------------------------------------------------------------------state
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [storage, setStorage] = useState([
    {image: images.unknown, name: 'Sheon', number: '441241r24412'},
    {image: images.unknown, name: 'Jhonson', number: '9988776655'},
    {image: images.unknown, name: 'Emily', number: '1234567890'},
    {image: images.unknown, name: 'Michael', number: '9876543210'},
    {image: images.unknown, name: 'Sarah', number: '5551234567'},
    {image: images.unknown, name: 'William', number: '8901234567'},
    {image: images.unknown, name: 'Olivia', number: '2345678901'},
    {image: images.unknown, name: 'James', number: '4567890123'},
    {image: images.unknown, name: 'Ava', number: '6789012345'},
    {image: images.unknown, name: 'Robert', number: '9012345678'},
    {image: images.unknown, name: 'Isabella', number: '3456789012'},
    {image: images.unknown, name: 'Richard', number: '7890123456'},
  ]);
  const [add, setAdd] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.content}>
        {/**----------------------------------------------------------------------------------------Flat list */}
        <FlatList
          data={storage}
          renderItem={({item}) => (
            //-------------------------------------------------------------------------------------->Scroll View
            <ScrollView>
              <View style={styles.itemContainer}>
                <View style={styles.imageContainer}>
                  <Image style={styles.image} source={item.image} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemNumber}>{item.number}</Text>
                </View>
              </View>
            </ScrollView>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
        <View style={styles.addContainer}>
          <View style={styles.addButtonWrapper}>
            {!add && (
              <View style={styles.addButton}>
                <TouchableOpacity
                  //-------------------------------------------------------------------------------------------------------Touchables
                  onPress={() => {
                    setAdd(true);
                    setLoading(true);
                    setTimeout(() => {
                      setLoading(false);
                    }, 2000);
                  }}>
                  <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            )}
            {add && (
              <View style={styles.inputWrapper}>
                {loading ? ( //-------------------------------------------------------------------------------------------------Activity indicator
                  <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                  <View>
                    <View style={styles.textInputContainer}>
                      <TextInput
                        style={styles.textInput}
                        onChangeText={text => setName(text)}
                        placeholder="Name"
                      />
                    </View>
                    <View style={styles.textInputContainer}>
                      <TextInput
                        style={styles.textInput}
                        //--------------------------------------------------------------------------------------------Text Input
                        placeholder="Number"
                        maxLength={10}
                        keyboardType="numeric"
                        onChangeText={no => setNumber(no)}
                      />
                    </View>
                    <TouchableOpacity
                      style={styles.saveButton}
                      onPress={() => {
                        setLoading(true);
                        setTimeout(() => {
                          setLoading(false);
                          setAdd(false);
                          setName('');
                          setNumber('');
                        }, 2000);
                        setStorage([
                          ...storage,
                          {image: images.unknown, name: name, number: number},
                        ]);
                      }}>
                      <Text style={styles.saveButtonText}>Save</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            )}
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
