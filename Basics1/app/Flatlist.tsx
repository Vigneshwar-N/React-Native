import {
  Button,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import {images} from '../constants/images';
import {styles} from '../components/flatListStyling';

export default function List() {
  // Data
  const [storage, setStorage] = useState([
    {
      id: '1',
      image: images.unknown,
      name: 'Alice Johnson',
      number: '1234567890',
    },
    {id: '2', image: images.unknown, name: 'Bob Smith', number: '9876543210'},
    {
      id: '3',
      image: images.unknown,
      name: 'Charlie Brown',
      number: '1112223333',
    },
    {id: '4', image: images.unknown, name: 'David Lee', number: '4445556666'},
    {id: '5', image: images.unknown, name: 'Emily Green', number: '7778889999'},
    {id: '6', image: images.unknown, name: 'Frank White', number: '2223334444'},
    {id: '7', image: images.unknown, name: 'Grace Black', number: '5556667777'},
    {
      id: '8',
      image: images.unknown,
      name: 'Henry Orange',
      number: '8889990000',
    },
    {
      id: '9',
      image: images.unknown,
      name: 'Isabella Yellow',
      number: '1234567891',
    },
    {
      id: '10',
      image: images.unknown,
      name: 'Jack Purple',
      number: '9876543211',
    },
    {id: '11', image: images.unknown, name: 'Karen Blue', number: '1112223334'},
    {id: '12', image: images.unknown, name: 'Liam Green', number: '4445556667'},
    {
      id: '13',
      image: images.unknown,
      name: 'Maria Brown',
      number: '7778889998',
    },
    {id: '14', image: images.unknown, name: 'Noah White', number: '2223334445'},
    {
      id: '15',
      image: images.unknown,
      name: 'Olivia Black',
      number: '5556667778',
    },
    {
      id: '16',
      image: images.unknown,
      name: 'Peter Orange',
      number: '8889990001',
    },
    {
      id: '17',
      image: images.unknown,
      name: 'Quinn Yellow',
      number: '1234567892',
    },
    {
      id: '18',
      image: images.unknown,
      name: 'Riley Purple',
      number: '9876543212',
    },
    {
      id: '19',
      image: images.unknown,
      name: 'Sophia Blue',
      number: '1112223335',
    },
    {
      id: '20',
      image: images.unknown,
      name: 'Thomas Green',
      number: '4445556668',
    },
    {id: '21', image: images.unknown, name: 'Uma Brown', number: '7778889997'},
    {
      id: '22',
      image: images.unknown,
      name: 'Victor White',
      number: '2223334446',
    },
    {
      id: '23',
      image: images.unknown,
      name: 'Wendy Black',
      number: '5556667779',
    },
    {
      id: '24',
      image: images.unknown,
      name: 'Xavier Orange',
      number: '8889990002',
    },
    {
      id: '25',
      image: images.unknown,
      name: 'Yara Yellow',
      number: '1234567893',
    },
    {
      id: '26',
      image: images.unknown,
      name: 'Zara Purple',
      number: '9876543213',
    },
    {id: '27', image: images.unknown, name: 'Aaron Blue', number: '1112223336'},
    {
      id: '28',
      image: images.unknown,
      name: 'Bella Green',
      number: '4445556669',
    },
    {
      id: '29',
      image: images.unknown,
      name: 'Caleb Brown',
      number: '7778889996',
    },
    {
      id: '30',
      image: images.unknown,
      name: 'Dylan White',
      number: '2223334447',
    },
    {
      id: '31',
      image: images.unknown,
      name: 'Emily Black',
      number: '5556667780',
    },
    {
      id: '32',
      image: images.unknown,
      name: 'Finn Orange',
      number: '8889990003',
    },
    {
      id: '33',
      image: images.unknown,
      name: 'Grace Yellow',
      number: '1234567894',
    },
    {
      id: '34',
      image: images.unknown,
      name: 'Henry Purple',
      number: '9876543214',
    },
    {
      id: '35',
      image: images.unknown,
      name: 'Isabella Blue',
      number: '1112223337',
    },
    {id: '36', image: images.unknown, name: 'Jack Green', number: '4445556670'},
    {
      id: '37',
      image: images.unknown,
      name: 'Karen Brown',
      number: '7778889995',
    },
    {id: '38', image: images.unknown, name: 'Liam White', number: '2223334448'},
    {
      id: '39',
      image: images.unknown,
      name: 'Maria Black',
      number: '5556667781',
    },
    {
      id: '40',
      image: images.unknown,
      name: 'Noah Orange',
      number: '8889990004',
    },
  ]);
  // States
  const [showNumber, setShowNumber] = useState(false);
  const [longPress, setLongpress] = useState(false);
  const [selectedId, setSelectedId] = useState('');
  const [add, setAdd] = useState(false);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [editId, setEditId] = useState('');
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(storage.length / itemsPerPage);
  const paginatedData = storage.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Functions

  // Longpress function
  const longpressFunction = id => {
    setLongpress(true);
    setSelectedId(id);
  };

  // Show number function
  const showNumberFunction = id => {
    setShowNumber(!showNumber);
    setSelectedId(id);
  };

  // Save function
  const saveFunction = () => {
    setStorage(prevStorage =>
      prevStorage.map(item =>
        item.id === editId ? {...item, name: name, number: number} : item,
      ),
    );
    setLongpress(false);
    setEditId('');
    setName('');
    setNumber('');
  };

  // Update name
  const onChangeText = text => {
    setName(text);
  };

  // Update number
  const onChangeNum = number => {
    setNumber(number);
  };

  // Delete item
  const deleteItem = id => {
    setStorage(prevStorage => prevStorage.filter(item => item.id !== id));
    setLongpress(false);
    setSelectedId('');
  };

  // Create item
  const creationfunction = () => {
    setStorage([
      ...storage,
      {
        id: (storage.length + 1).toString(),
        image: images.unknown,
        name: name,
        number: number,
      },
    ]);
    setName('');
    setNumber('');
    setAdd(false);
  };

  // Change page
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };
  console.log(editId);
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Phone</Text>
        <View style={styles.add}>
          <TouchableOpacity onPress={() => setAdd(true)}>
            {!add && <Image style={styles.headerImage} source={images.add} />}
          </TouchableOpacity>
        </View>
      </View>

      {/* Creation */}
      {add && (
        <View style={styles.addContainer}>
          <TextInput
            style={styles.input}
            placeholder="name"
            placeholderTextColor="#888888"
            onChangeText={text => onChangeText(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="number"
            placeholderTextColor="#888888"
            maxLength={10}
            keyboardType="numeric"
            onChangeText={num => onChangeNum(num)}
          />
          <TouchableOpacity
            onPress={() => {
              creationfunction();
            }}>
            <Image source={images.add} style={styles.addImage} />
          </TouchableOpacity>
        </View>
      )}

      {/* FlatList */}
      <View style={styles.faltListContainer}>
        <FlatList
          data={paginatedData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <TouchableOpacity
                style={styles.itemTouchable}
                onLongPress={() => longpressFunction(item.id)}>
                <View style={styles.itemContent}>
                  <TouchableOpacity onPress={() => showNumberFunction(item.id)}>
                    <Image style={styles.itemImage} source={item.image} />
                  </TouchableOpacity>

                  <View style={styles.itemTextWrapper}>
                    <TextInput
                      placeholder="Name"
                      editable={item.id === editId}
                      value={item.id === editId ? name : item.name}
                      style={styles.itemNameText}
                      onChangeText={text => {
                        if (item.id === editId) {
                          onChangeText(text);
                        }
                      }}
                    />
                    {selectedId === item.id && showNumber && (
                      <TextInput
                        placeholder="Number"
                        value={item.id === editId ? number : item.number}
                        editable={item.id === editId}
                        style={styles.itemNumberText}
                        maxLength={10}
                        keyboardType="numeric"
                        onChangeText={num => {
                          if (item.id === editId) {
                            onChangeNum(num);
                          }
                        }}
                      />
                    )}
                  </View>
                </View>

                {selectedId === item.id && longPress && (
                  <View style={styles.actionsContainer}>
                    <View style={styles.actionsButtonWrapper}>
                      <TouchableOpacity
                        onPress={() => {
                          setEditId(item.id);
                          setName(item.name);
                          setNumber(item.number);
                        }}
                        style={styles.editButton}>
                        <Text style={styles.buttonText}>Edit</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.deleteButton}
                        onPress={() => deleteItem(item.id)}>
                        <Text style={styles.buttonText}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                    {editId === item.id && (
                      <TouchableOpacity
                        onPress={saveFunction}
                        style={styles.saveButton}>
                        <Text style={styles.buttonText}>Save</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                )}
              </TouchableOpacity>
            </View>
          )}
        />
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Button
              title="Previous"
              disabled={currentPage === 1}
              onPress={() => handlePageChange(currentPage - 1)}
            />
            <Button
              title="Next"
              disabled={currentPage === totalPages}
              onPress={() => handlePageChange(currentPage + 1)}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
