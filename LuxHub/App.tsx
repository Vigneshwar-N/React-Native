import {FlatList, Image, ScrollView, StatusBar, Text, View} from 'react-native';
import React from 'react';
import List from './components/Flatlist';
import {data} from './constants/data';
import {styles} from './components/AppStyling';
import List2 from './components/List2';
const data1 = data.filter((item, index) => index % 2 === 0);
const data2 = data.filter((item, index) => index % 2 !== 0);

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#ffffff'} />
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            style={styles.iconLeft}
            source={require('./assets/leftarrow.png')}
          />
          <Text style={styles.headerTitle}>LuxHub</Text>
        </View>
        <View>
          <Text style={styles.headerSubtitle}>Buy used goods</Text>
        </View>
        <View>
          <Image
            style={styles.iconRight}
            source={require('./assets/menue.png')}
          />
        </View>
      </View>
      <ScrollView>
        <View style={{flexDirection: 'row', backgroundColor: '#ebebeb'}}>
          <FlatList
            scrollEnabled={false}
            contentContainerStyle={styles.listContainer}
            numColumns={1}
            data={data1}
            renderItem={({item}) => <List data={item} />}
          />
          <FlatList
            scrollEnabled={false}
            contentContainerStyle={styles.listContainer}
            numColumns={1}
            data={data2}
            renderItem={({item}) => <List2 data={item} />}
          />
        </View>
      </ScrollView>
    </View>
  );
}
